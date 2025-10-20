"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Lock } from "lucide-react";
import { Label } from "@/components/ui/label";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";

type ResetPasswordRequest = {
  token: string;
  email: string;
  newPassword: string;
  confirmPassword: string;
};

type ResetPasswordResponse = {
  success: boolean;
  message: string;
};

export default function ResetPasswordPage() {
  const router = useRouter();
  const params = useSearchParams();
  const token = params.get("token") || "";
  const emailFromLink = params.get("email") || "";

  const [email, setEmail] = useState<string>(emailFromLink);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailErrors, setEmailErrors] = useState("");
  const [passwordErrors, setPasswordErrors] = useState("");
  const [confirmErrors, setConfirmErrors] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [tokenError, setTokenError] = useState("");

  useEffect(() => {
    if (!token) {
      setTokenError("Enlace inválido o expirado. Solicita uno nuevo.");
    }
  }, [token]);

  const validatePassword = (value: string) => {
    if (!value || value.trim() === "") {
      return "La contraseña es requerida";
    }
    if (value.length < 8 || value.length > 100) {
      return "La contraseña debe tener entre 8 y 100 caracteres";
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]*$/;
    if (!passwordRegex.test(value)) {
      return "Debe contener minúscula, mayúscula, número y carácter especial";
    }
    return "";
  };

  const validateConfirm = (value: string, pass: string) => {
    if (!value || value.trim() === "") {
      return "La confirmación es requerida";
    }
    if (value !== pass) {
      return "Las contraseñas no coinciden";
    }
    return "";
  };

  const validateEmail = (value: string) => {
    if (!value || value.trim() === "") return "El email es requerido";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) return "El formato del email no es válido";
    return "";
  };

  const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (!token) return;

    const pErr = validatePassword(password);
    const cErr = validateConfirm(confirmPassword, password);
    const eErr = emailFromLink ? "" : validateEmail(email);
    setPasswordErrors(pErr);
    setConfirmErrors(cErr);
    setEmailErrors(eErr);

    if (pErr || cErr || eErr) return;

    setIsLoading(true);

    try {
      const normalizedToken = token.replace(/\s/g, "+");
      const normalizedEmail = (email || "").trim().toLowerCase();
      const request: ResetPasswordRequest = {
        token: normalizedToken,
        email: normalizedEmail,
        newPassword: password,
        confirmPassword,
      };
      const { data } = await axios.post<ResetPasswordResponse>(
        "http://localhost:5273/api/auth/reset-password",
        request
      );

      if (data.success) {
        setIsSuccess(true);
        toast("Contraseña restablecida", {
          description: data.message || "Ahora puedes iniciar sesión",
          action: { label: "Cerrar", onClick: () => {} },
        });
      } else {
        toast("No se pudo restablecer", {
          description: data.message || "Inténtalo nuevamente",
          action: { label: "Cerrar", onClick: () => {} },
        });
      }
    } catch (error) {
      const axiosError = error as AxiosError<ResetPasswordResponse>;
      const msg =
        axiosError.response?.data?.message ||
        "Error al restablecer la contraseña. Intenta nuevamente.";
      toast("Error", { description: msg, action: { label: "Cerrar", onClick: () => {} } });
    } finally {
      setIsLoading(false);
    }
  };

  if (tokenError) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen p-10 px-4 gap-8">
        <div
          className="flex items-center justify-center w-12 h-12 bg-white rounded-lg shadow-md cursor-pointer"
          onClick={() => router.back()}
        >
          <ArrowLeft className="w-6 h-6 text-red" />
        </div>

        <section className="bg-white rounded-2xl shadow-custom p-10 flex flex-col items-center text-center w-[600px] gap-6">
          <h1 className="text-[28px] font-bold text-black">Enlace inválido o expirado</h1>
          <p className="text-gray-600">{tokenError}</p>
          <Button asChild>
            <Link href="/forgot-password">Solicitar nuevo enlace</Link>
          </Button>
        </section>
      </main>
    );
  }

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
          <h1 className="text-[32px] font-bold text-black">¡Contraseña actualizada!</h1>
          <p className="text-gray-600">Inicia sesión con tu nueva contraseña.</p>
          <Button asChild className="w-full">
            <Link href="/login">Ir al inicio de sesión</Link>
          </Button>
        </section>
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
          Crear nueva contraseña
        </h1>

        <div className="flex flex-col gap-6 mb-6">
          {emailFromLink === "" && (
            <div className="flex flex-col gap-2">
              <Label>Correo electrónico</Label>
              <div className="flex flex-col gap-1">
                <Input
                  type="email"
                  placeholder="tucorreo@gmail.com"
                  value={email}
                  onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    const v = event.target.value;
                    setEmail(v);
                  }}
                  className={emailErrors ? "border-error" : ""}
                  disabled={isLoading}
                />
                {emailErrors && (
                  <span className="text-error text-xs ml-2">{emailErrors}</span>
                )}
              </div>
            </div>
          )}
          <div className="flex flex-col gap-2">
            <Label>Nueva contraseña</Label>
            <div className="flex flex-col gap-1">
              <Input
                type="password"
                placeholder="********"
                value={password}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  const v = event.target.value;
                  setPassword(v);
                }}
                className={passwordErrors ? "border-error" : ""}
                disabled={isLoading}
              />
              {passwordErrors && (
                <span className="text-error text-xs ml-2">{passwordErrors}</span>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label>Confirmar contraseña</Label>
            <div className="flex flex-col gap-1">
              <Input
                type="password"
                placeholder="********"
                value={confirmPassword}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  const v = event.target.value;
                  setConfirmPassword(v);
                }}
                className={confirmErrors ? "border-error" : ""}
                disabled={isLoading}
              />
              {confirmErrors && (
                <span className="text-error text-xs ml-2">{confirmErrors}</span>
              )}
            </div>
          </div>

          <Button className="w-full" onClick={handleSubmit} disabled={isLoading || !token}>
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Guardando...
              </>
            ) : (
              <>
                <Lock className="w-4 h-4 mr-2" />
                Restablecer contraseña
              </>
            )}
          </Button>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-sm text-gray-600 text-center">
            El enlace de restablecimiento es de un solo uso. Si expira, solicita uno nuevo.
          </p>
        </div>
      </section>

      <div className="w-[600px] flex flex-col items-center gap-4">
        <Separator className="bg-gray-400" />
        <p className="text-sm text-black">
          ¿Necesitas ayuda? <Button variant="link" asChild><Link href="/contacto">Contáctanos</Link></Button>
        </p>
      </div>
    </main>
  );
}


