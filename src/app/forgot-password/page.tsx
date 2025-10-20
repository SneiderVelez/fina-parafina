"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ArrowLeft, Mail, CheckCircle } from "lucide-react";
import { Label } from "@/components/ui/label";
import { ChangeEvent, MouseEvent, useState } from "react";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [emailErrors, setEmailErrors] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email: string) => {
    if (!email || email.trim() === "") {
      return "El email es requerido";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "El formato del email no es válido";
    }

    return "";
  };

  const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    const error = validateEmail(email);
    setEmailErrors(error);

    if (error) {
      return;
    }

    setIsLoading(true);
    setEmailErrors("");

    try {
      // Aquí iría la llamada real al API: await forgotPassword({ email });
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulación
      setIsSuccess(true);
    } catch (error) {
      setEmailErrors("Error al enviar la solicitud. Inténtalo de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen p-10 px-4 gap-8">
        <div
          className="flex items-center justify-center w-12 h-12 bg-white rounded-lg shadow-md cursor-pointer"
          onClick={() => router.back()}
        >
          <ArrowLeft className="w-6 h-6 text-red" />
        </div>

        <section className="bg-white rounded-2xl shadow-custom p-10 flex flex-col items-center text-center w-[600px] gap-6">
          <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>

          <h1 className="text-[32px] font-bold font-jakarta text-black">
            ¡Solicitud enviada!
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed">
            Si el email{" "}
            <span className="font-semibold text-black">{email}</span> existe en
            nuestro sistema, recibirás un enlace para restablecer tu contraseña
            en los próximos minutos.
          </p>

          <div className="bg-blue-50 rounded-lg p-4 w-full">
            <p className="text-sm text-blue-700">
              Revisa tu bandeja de entrada y carpeta de spam. El enlace expirará
              en 24 horas.
            </p>
          </div>

          <div className="flex flex-col gap-4 w-full">
            <Button asChild className="w-full">
              <Link href="/login">Volver al inicio de sesión</Link>
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                setIsSuccess(false);
                setEmail("");
              }}
              className="w-full"
            >
              Enviar a otro email
            </Button>
          </div>
        </section>

        <div className="w-[600px] flex flex-col items-center gap-4">
          <Separator className="bg-gray-400" />
          <p className="text-sm text-black">
            ¿Necesitas ayuda?{" "}
            <Button variant="link" asChild>
              <Link href="/contacto">Contáctanos</Link>
            </Button>
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-10 px-4 gap-8">
      <div
        className="flex items-center justify-center w-12 h-12 bg-white rounded-lg shadow-md cursor-pointer"
        onClick={() => router.back()}
      >
        <ArrowLeft className="w-6 h-6 text-red" />
      </div>

      <section className="bg-white rounded-2xl shadow-custom p-10 flex flex-col relative w-[600px]">
        <h1 className="text-[32px] font-bold text-center font-jakarta text-black mb-10">
          Restablecer contraseña
        </h1>

        <div className="flex flex-col gap-6 mb-6">
          <div className="flex flex-col gap-2">
            <Label> Correo electrónico</Label>
            <div className="flex flex-col gap-1">
              <Input
                type="email"
                placeholder="tucorreo@gmail.com"
                value={email}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  const inputValue = event.target.value;
                  setEmail(inputValue);
                }}
                className={emailErrors.length > 0 ? "border-error" : ""}
                disabled={isLoading}
              />
              {emailErrors.length > 0 && (
                <span className="text-error text-xs ml-2">{emailErrors}</span>
              )}
            </div>
          </div>

          <Button
            className="w-full"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Enviando...
              </>
            ) : (
              <>
                <Mail className="w-4 h-4 mr-2" />
                Enviar enlace de restablecimiento
              </>
            )}
          </Button>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-sm text-gray-600 text-center">
            Ingresa el email asociado a tu cuenta y te enviaremos un enlace
            seguro para restablecer tu contraseña.
          </p>
        </div>
      </section>

      <div className="w-[600px] flex flex-col items-center gap-4">
        <Separator className="bg-gray-400" />
        <p className="text-sm text-black">
          ¿Recordaste tu contraseña?{" "}
          <Button variant="link" asChild>
            <Link href="/login">Iniciar sesión</Link>
          </Button>
        </p>
      </div>
    </main>
  );
}
