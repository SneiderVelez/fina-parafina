"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ArrowLeft, Mail, RefreshCw } from "lucide-react";
import { useState, useEffect } from "react";

export default function VerifyEmailPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";
  const token = searchParams.get("token");
  const [isResending, setIsResending] = useState(false);
  const [resendMessage, setResendMessage] = useState("");

  // Si hay token, redirigir a la página de verificación
  useEffect(() => {
    if (token) {
      router.push(`/email-verified?token=${token}`);
    }
  }, [token, router]);

  const handleResendEmail = async () => {
    setIsResending(true);
    setResendMessage("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setResendMessage(
        "Email reenviado exitosamente. Revisa tu bandeja de entrada."
      );
    } catch (error) {
      setResendMessage("Error al reenviar el email. Inténtalo de nuevo.");
    } finally {
      setIsResending(false);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-10 px-4 gap-8">
      <div
        className="flex items-center justify-center w-12 h-12 bg-white rounded-lg shadow-md cursor-pointer"
        onClick={() => router.back()}
      >
        <ArrowLeft className="w-6 h-6 text-red" />
      </div>

      <section className="bg-white rounded-2xl shadow-custom p-10 flex flex-col items-center text-center w-[600px] gap-6">
        <div className="w-16 h-16 bg-red/10 rounded-full flex items-center justify-center">
          <Mail className="w-8 h-8 text-red" />
        </div>

        <h1 className="text-[32px] font-bold font-jakarta text-black">
          Verifica tu email
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed">
          Hemos enviado un enlace de verificación a{" "}
          <span className="font-semibold text-black">{email}</span>. Haz clic en
          el enlace para activar tu cuenta.
        </p>

        <div className="bg-gray-50 rounded-lg p-4 w-full">
          <p className="text-sm text-gray-500">
            ¿No recibiste el email? Revisa tu carpeta de spam o solicita un
            nuevo enlace.
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <Button
            onClick={handleResendEmail}
            disabled={isResending}
            className="w-full"
            variant="outline"
          >
            {isResending ? (
              <>
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                Reenviando...
              </>
            ) : (
              <>
                <RefreshCw className="w-4 h-4 mr-2" />
                Reenviar email de verificación
              </>
            )}
          </Button>

          {resendMessage && (
            <p
              className={`text-sm ${
                resendMessage.includes("Error") ? "text-red" : "text-green-600"
              }`}
            >
              {resendMessage}
            </p>
          )}

          <Button asChild className="w-full">
            <Link href="/login">Ir al inicio de sesión</Link>
          </Button>
        </div>
      </section>

      <div className="w-[600px] flex flex-col items-center gap-4">
        <Separator className="bg-gray-400" />
        <p className="text-sm text-black">
          ¿Ya verificaste tu email?{" "}
          <Button variant="link" asChild>
            <Link href="/login">Iniciar sesión</Link>
          </Button>
        </p>
      </div>
    </main>
  );
}
