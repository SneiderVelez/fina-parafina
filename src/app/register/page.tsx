"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { User, ArrowLeft } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-start min-h-screen pt-10 px-4 gap-8">
      {/* Botón de devolverse */}
      <div
        className="flex items-center justify-center w-12 h-12 bg-white rounded-lg shadow-md cursor-pointer"
        onClick={() => router.back()}
      >
        <ArrowLeft className="w-6 h-6 text-orange-600" />
      </div>

      {/* Icono de usuario */}
      <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center -mb-8 z-10 shadow-md">
        <User className="w-8 h-8 text-black" />
      </div>

      {/* Caja principal de registro */}
      <section
        className="bg-white rounded-2xl shadow-md p-10 flex flex-col relative"
        style={{ width: "892px", height: "535px" }}
      >
        {/* Título */}
        <h1 className="text-[32px] font-bold text-center text-black mb-10">
          Regístrate
        </h1>

        {/* Grid con dos columnas */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* Correo */}
          <div className="flex flex-col">
            <label className="text-black text-sm font-medium mb-2">
              Correo electrónico
            </label>
            <Input type="email" placeholder="tucorreo@gmail.com" />
          </div>

          {/* Contraseña */}
          <div className="flex flex-col">
            <label className="text-black text-sm font-medium mb-2">
              Contraseña
            </label>
            <Input type="password" placeholder="********" />
          </div>

          {/* Nombre completo */}
          <div className="flex flex-col">
            <label className="text-black text-sm font-medium mb-2">
              Nombre completo
            </label>
            <Input type="text" placeholder="Tu nombre completo" />
          </div>

          {/* Teléfono */}
          <div className="flex flex-col">
            <label className="text-black text-sm font-medium mb-2">
              Teléfono
            </label>
            <Input type="tel" placeholder="3000000000" />
          </div>

          {/* Dirección */}
          <div className="flex flex-col">
            <label className="text-black text-sm font-medium mb-2">
              Dirección
            </label>
            <Input type="text" placeholder="Calle 123 # 45 - 67" />
          </div>

          {/* Fecha de nacimiento */}
          <div className="flex flex-col">
            <label className="text-black text-sm font-medium mb-2">
              Fecha de nacimiento
            </label>
            <Input type="date" />
          </div>
        </div>

        {/* Checkbox */}
        <div className="flex items-center gap-2 mb-6">
          <input type="checkbox" id="terms" className="w-4 h-4" />
          <label htmlFor="terms" className="text-sm text-black">
            Acepto los{" "}
            <span className="text-orange-600 cursor-pointer">
              términos y condiciones
            </span>{" "}
            y la{" "}
            <span className="text-orange-600 cursor-pointer">
              política de privacidad
            </span>
          </label>
        </div>

        {/* Botón */}
        <Button className="w-full bg-orange-600 text-black hover:bg-orange-700">
          Crear mi cuenta
        </Button>
      </section>

      {/* Separador y link fuera de la caja */}
      <div className="w-[892px] flex flex-col items-center gap-4">
        <Separator className="bg-gray-400" />
        <p className="text-sm text-black">
          ¿Ya tienes una cuenta?{" "}
          <Link
            href="/login"
            className="text-orange-600 font-medium hover:underline"
          >
            Iniciar Sesión
          </Link>
        </p>
      </div>
    </main>
  );
}
