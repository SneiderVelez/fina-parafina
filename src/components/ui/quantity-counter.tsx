"use client";

import { Button } from "./button";
import { cn } from "@/lib/utils";

type Props = {
  value: number;
  min?: number;
  max?: number;
  onChange: (next: number) => void;
  className?: string;
};

export default function QuantityCounter({ value, min = 1, max, onChange, className }: Props) {
  const canDecrement = value > min;
  const canIncrement = typeof max === "number" ? value < max : true;

  const dec = () => {
    if (value <= min) return;
    onChange(value - 1);
  };
  const inc = () => {
    if (!canIncrement) return;
    onChange(value + 1);
  };

  return (
    <div className={cn("inline-flex items-center gap-2", className)}>
      <Button
        type="button"
        variant="outline"
        size="sm"
        aria-label="Disminuir cantidad"
        onClick={dec}
        disabled={!canDecrement}
        className="h-8 w-8 p-0"
      >
        −
      </Button>
      <span aria-live="polite" className="min-w-6 text-center select-none">
        {value}
      </span>
      <Button
        type="button"
        variant="outline"
        size="sm"
        aria-label="Aumentar cantidad"
        onClick={inc}
        disabled={!canIncrement}
        className="h-8 w-8 p-0"
      >
        +
      </Button>
    </div>
  );
}

