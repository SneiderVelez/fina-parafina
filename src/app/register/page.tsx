"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { User, ArrowLeft } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function RegisterPage() {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-10 px-4 gap-8">
      <div
        className="flex items-center justify-center w-12 h-12 bg-white rounded-lg shadow-md cursor-pointer"
        onClick={() => router.back()}
      >
        <ArrowLeft className="w-6 h-6 text-red" />
      </div>
      {/* <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center -mb-8 z-10 shadow-md">
        <User className="w-8 h-8 text-black" />
      </div> */}

      <section className="bg-white rounded-2xl shadow-custom p-10 flex flex-col relative w-[892px]">
        <h1 className="text-[32px] font-bold text-center font-jakarta text-black mb-10">
          Regístrate
        </h1>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="flex flex-col gap-2">
            <Label> Correo electrónico</Label>
            <Input type="email" placeholder="tucorreo@gmail.com" />
          </div>

          <div className="flex flex-col gap-2">
            <Label>Contraseña</Label>
            <Input type="password" placeholder="********" />
          </div>

          <div className="flex flex-col gap-2">
            <Label> Nombre completo</Label>
            <Input type="text" placeholder="Tu nombre completo" />
          </div>

          <div className="flex flex-col gap-2">
            <Label>Teléfono</Label>
            <Input type="tel" placeholder="3000000000" />
          </div>

          <div className="flex flex-col gap-2">
            <Label>Dirección</Label>
            <Input type="text" placeholder="Calle 123 # 45 - 67" />
          </div>

          <div className="flex flex-col gap-2">
            <Label>Fecha de nacimiento</Label>
            <Input type="date" />
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 w-6/12 mx-auto">
          <div className="flex items-center gap-3">
            <Checkbox id="terms" />
            <Label htmlFor="terms">
              Acepto los{" "}
              <Link
                href="/terms"
                className="text-red cursor-pointer underline hover:opacity-80"
              >
                términos y condiciones
              </Link>{" "}
              y la{" "}
              <Link
                href="/privacy-policy"
                className="text-red cursor-pointer underline hover:opacity-80"
              >
                política de privacidad
              </Link>
            </Label>
          </div>
          {/* Botón */}
          <Button className="w-full">Crear mi cuenta</Button>
        </div>
      </section>

      {/* Separador y link fuera de la caja */}
      <div className="w-[892px] flex flex-col items-center gap-4">
        <Separator className="bg-gray-400" />
        <p className="text-sm text-black">
          ¿Ya tienes una cuenta?{" "}
          <Button variant="link" asChild>
            <Link href="/login">Iniciar sesión</Link>
          </Button>
        </p>
      </div>
    </main>
  );
}
