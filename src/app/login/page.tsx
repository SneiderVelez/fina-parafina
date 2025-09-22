"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { User, ArrowLeft } from "lucide-react"; // Iconos
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-5 px-5 gap-8">
      <div
        className="flex items-center justify-center w-12 h-12 bg-white rounded-md shadow-lg cursor-pointer"
        onClick={() => router.back()}
      >
        <ArrowLeft className="w-6 h-6 text-red" />
      </div>

      {/* Icono de usuario */}
      {/* <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center -mb-8 z-10 shadow-lg">
        <User className="w-8 h-8 text-black" />
      </div> */}

      <section className="bg-white rounded-2xl shadow-custom w-[463px] p-8 flex flex-col relative">
        <h1 className="text-[32px] font-bold text-center text-black mb-8 font-jakarta">
          Iniciar sesión
        </h1>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Label> Correo electrónico</Label>
            <Input
              type="email"
              placeholder="tucorreo@gmail.com"
              className="bg-gray-100"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label>Contraseña</Label>
            <Input type="password" placeholder="********" />
          </div>
          <Button className="w-full">Iniciar sesión</Button>
        </div>
      </section>

      <div className="w-[463px] flex flex-col items-center gap-4">
        <Separator className="bg-gray-400" />
        <Button variant={"link"}>
          <Link
            href="/recuperar-password"
            className="text-sm text-red hover:underline"
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </Button>
      </div>
    </main>
  );
}
