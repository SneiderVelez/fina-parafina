"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { User, ArrowLeft } from "lucide-react"; // Iconos

export default function LoginPage() {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-start min-h-screen p-5 px-5 gap-8">
      {/* Botón de devolverse */}
      <div
        className="flex items-center justify-center w-12 h-12 bg-white rounded-md shadow-lg cursor-pointer"
        onClick={() => router.back()}
      >
        <ArrowLeft className="w-6 h-6 text-orange-600" />
      </div>

      {/* Icono de usuario */}
      <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center -mb-8 z-10 shadow-lg">
        <User className="w-8 h-8 text-black" />
      </div>

      {/* Caja principal de login */}
      <section
        className="bg-white rounded-2xl shadow-lg p-8 flex flex-col relative"
        style={{ width: "463px", height: "444px" }}
      >
        {/* Título */}
        <h1 className="text-[32px] font-bold text-center text-black mb-8">
          Iniciar sesión
        </h1>

        {/* Campo: Correo electrónico */}
        <div className="flex flex-col mb-6">
          <label className="text-black text-sm font-medium mb-2">
            Correo electrónico
          </label>
          <Input
            type="email"
            placeholder="tucorreo@gmail.com"
            className="bg-gray-100"
          />
        </div>

        {/* Campo: Contraseña */}
        <div className="flex flex-col mb-6">
          <label className="text-black text-sm font-medium mb-2">
            Contraseña
          </label>
          <Input
            type="password"
            placeholder="********"
            className="bg-gray-100"
          />
        </div>

        {/* Botón de ingresar */}
        <Button className="w-full bg-orange-600 text-black hover:bg-orange-700">
          Iniciar sesión
        </Button>
      </section>

      {/* Separador y link fuera de la caja */}
      <div className="w-[463px] flex flex-col items-center gap-4">
        <Separator className="bg-gray-400" />
        <Link
          href="/recuperar-password"
          className="text-sm text-red-600 hover:underline"
        >
          ¿Olvidaste tu contraseña?
        </Link>
      </div>
    </main>
  );
}
