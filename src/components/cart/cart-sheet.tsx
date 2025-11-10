"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { useCart } from "@/context/cart-context";
import { formatCOP } from "@/lib/utils";
import CartItemCard from "./cart-item-card";

export default function CartSheetContent() {
  const { items, subtotal, shipping, total, clear } = useCart();
  const isEmpty = items.length === 0;

  return (
    <SheetContent
      side="right"
      className="bg-brand-tertiary/90 backdrop-blur-md sm:max-w-md flex h-full flex-col"
    >
      <SheetHeader>
        <SheetTitle className="text-3xl">Tu carrito</SheetTitle>
        <SheetDescription>
          {isEmpty
            ? "No has agregado productos aún."
            : "Revisa tus productos y cantidades."}
        </SheetDescription>
      </SheetHeader>

      <div className="mt-4 flex-1 overflow-y-auto pr-1">
        {isEmpty ? (
          <div className="flex flex-col items-center justify-center text-center gap-4 py-10">
            <p className="text-sm text-gray-700">Tu carrito está vacío</p>
            <Link href="/catalogo">
              <Button variant="outline">Explorar productos</Button>
            </Link>
          </div>
        ) : (
          <div className="border-t">
            {items.map((it) => (
              <CartItemCard key={it.id} item={it} />
            ))}
          </div>
        )}
      </div>

      <SheetFooter className="mt-4 sm:flex-col space-y-3">
        <div className="space-y-2 rounded-lg bg-white/60 p-4 w-full">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-700">Subtotal</span>
            <span className="font-bold text-black">{formatCOP(subtotal)}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-700">Envío</span>
            <span className="text-gray-700">Se calcula en checkout</span>
          </div>
          <div className="flex items-center justify-between text-base pt-2 border-t border-gray-200">
            <span className="font-bold text-black">Total</span>
            <span className="font-bold text-black">{formatCOP(total)}</span>
          </div>
        </div>
        {isEmpty ? (
          <SheetClose asChild>
            <Button variant="default" className="w-full">
              Seguir comprando
            </Button>
          </SheetClose>
        ) : (
          <div className="flex flex-col gap-2 w-full">
            <Button className="w-full">Finalizar compra</Button>
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={clear}
                className="flex-1 w-full text-red-600 border-red-300 hover:shadow-customBottom"
              >
                Vaciar carrito
              </Button>
              <SheetClose asChild>
                <Button variant="ghost" className="flex-1">
                  Seguir comprando
                </Button>
              </SheetClose>
            </div>
          </div>
        )}
      </SheetFooter>
    </SheetContent>
  );
}
