"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import QuantityCounter from "@/components/ui/quantity-counter";
import { useCart, type CartItem } from "@/context/cart-context";
import { formatCOP } from "@/lib/utils";
import { Trash } from "lucide-react";

type Props = {
  item: CartItem;
};

export default function CartItemCard({ item }: Props) {
  const { updateQuantity, removeItem } = useCart();
  const total = item.price * item.quantity;

  return (
    <div className="flex gap-4 py-3 border-b border-gray-200 last:border-none">
      {item.image ? (
        <div className="relative h-16 w-16 rounded-md overflow-hidden bg-gray-100 shrink-0">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover object-center"
          />
        </div>
      ) : (
        <div className="h-16 w-16 rounded-md bg-gray-200" />
      )}

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="text-sm font-bold text-black truncate">{item.name}</p>
            {item.variant && (
              <p className="text-xs text-gray-600 truncate">
                Tipo: {item.variant}
              </p>
            )}
            <p className="text-xs text-gray-700">
              Precio unitario: {formatCOP(item.price)}
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            aria-label={`Eliminar ${item.name}`}
            onClick={() => removeItem(item.id)}
            className="h-8 w-8 p-0 text-red-600 hover:text-red-700"
            title={`Eliminar ${item.name}`}
          >
            <Trash className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">Eliminar {item.name}</span>
          </Button>
        </div>

        <div className="mt-2 flex items-center justify-between">
          <QuantityCounter
            value={item.quantity}
            min={1}
            onChange={(q) => updateQuantity(item.id, q)}
          />
          <p className="text-sm font-bold text-black">{formatCOP(total)}</p>
        </div>
      </div>
    </div>
  );
}
