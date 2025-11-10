"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

export type CartItem = {
  id: string;
  name: string;
  price: number; // precio unitario
  image?: string;
  variant?: string; // color/tamaño/aroma, etc.
  quantity: number;
};

type CartState = {
  items: CartItem[];
  count: number;
  subtotal: number;
  shipping: number; // placeholder/calculado luego
  total: number;
  addItem: (item: Omit<CartItem, "quantity"> & { quantity?: number }) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clear: () => void;
};

const CartContext = createContext<CartState | null>(null);

const STORAGE_KEY = "fp_cart_v1";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  // hidratar desde localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as CartItem[];
        if (Array.isArray(parsed)) setItems(parsed);
      }
    } catch {}
  }, []);

  // persistir cambios
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
      // notificar a otros tabs
      window.dispatchEvent(new Event("cart-changed"));
    } catch {}
  }, [items]);

  const addItem = useCallback<CartState["addItem"]>((item) => {
    setItems((prev) => {
      const qty = item.quantity ?? 1;
      const idx = prev.findIndex((i) => i.id === item.id && i.variant === item.variant);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = {
          ...next[idx],
          // actualiza precio al más reciente (evita precios antiguos mal parseados)
          price: Math.round(item.price),
          quantity: next[idx].quantity + qty,
        };
        return next;
      }
      return [...prev, { ...item, price: Math.round(item.price), quantity: qty }];
    });
  }, []);

  const removeItem = useCallback<CartState["removeItem"]>((id) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const updateQuantity = useCallback<CartState["updateQuantity"]>((id, quantity) => {
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, quantity: Math.max(1, quantity) } : i)));
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const count = useMemo(() => items.reduce((acc, i) => acc + i.quantity, 0), [items]);
  const subtotal = useMemo(() => items.reduce((acc, i) => acc + i.price * i.quantity, 0), [items]);
  const shipping = 0; // Placeholder: calcular en checkout
  const total = subtotal + shipping;

  const value = useMemo<CartState>(() => ({
    items,
    count,
    subtotal,
    shipping,
    total,
    addItem,
    removeItem,
    updateQuantity,
    clear,
  }), [items, count, subtotal, shipping, total, addItem, removeItem, updateQuantity, clear]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart debe usarse dentro de CartProvider");
  return ctx;
}
