"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";

type VerifyEmailResponse = {
  accessToken: string | null;
  expiresAt: string | null;
  message: string;
  refreshToken: string;
  success: boolean;
  user: string | null;
};

export default function EmailVerifiedPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const email = searchParams.get("email");
  const [verificationStatus, setVerificationStatus] = useState<
    "loading" | "success" | "error"
  >("loading");
  const [message, setMessage] = useState("");
  const requestedRef = useRef(false);

  useEffect(() => {
    const verifyEmail = async () => {
      if (!token) {
        setVerificationStatus("error");
        setMessage("Token de verificación faltante.");
        return;
      }

      // Evitar llamadas duplicadas en modo estricto de React (dev)
      if (requestedRef.current) return;
      requestedRef.current = true;

      try {
        const response = await axios.get<VerifyEmailResponse>(
          "http://localhost:5273/api/Auth/verify-email",
          { params: { token } }
        );

        if (response.data.success) {
          setVerificationStatus("success");
          setMessage(
            response.data.message ||
              "¡Tu email ha sido verificado exitosamente!"
          );
        } else {
          setVerificationStatus("error");
          setMessage(response.data.message || "Error al verificar el email.");
        }
      } catch (error) {
        console.error("Error verifying email:", error);
        const axiosError = error as AxiosError<VerifyEmailResponse>;
        setVerificationStatus("error");
        setMessage(
          axiosError.response?.data?.message ||
            "Error al verificar el email. El enlace puede haber expirado."
        );
      }
    };

    verifyEmail();
  }, [token]);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-10 px-4 gap-8">
      <div
        className="flex items-center justify-center w-12 h-12 bg-white rounded-lg shadow-md cursor-pointer"
        onClick={() => router.back()}
      >
        <ArrowLeft className="w-6 h-6 text-red" />
      </div>

      <section className="bg-white rounded-2xl shadow-custom p-10 flex flex-col items-center text-center w-[600px] gap-6">
        {verificationStatus === "loading" && (
          <>
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
            </div>
            <h1 className="text-[32px] font-bold font-jakarta text-black">
              Verificando tu email...
            </h1>
            <p className="text-gray-600 text-lg">
              Por favor espera mientras confirmamos tu verificación.
            </p>
          </>
        )}

        {verificationStatus === "success" && (
          <>
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-[32px] font-bold font-jakarta text-black">
              ¡Email verificado!
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">{message}</p>
            <Button asChild className="w-full">
              <Link href="/login">Iniciar sesión</Link>
            </Button>
          </>
        )}

        {verificationStatus === "error" && (
          <>
            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-red-600" />
            </div>
            <h1 className="text-[32px] font-bold font-jakarta text-black">
              Error en la verificación
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">{message}</p>
            <div className="flex flex-col gap-4 w-full">
              <Button asChild variant="outline" className="w-full">
                <Link href="/verify-email">Solicitar nuevo enlace</Link>
              </Button>
              <Button asChild className="w-full">
                <Link href="/register">Registrarse de nuevo</Link>
              </Button>
            </div>
          </>
        )}
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
