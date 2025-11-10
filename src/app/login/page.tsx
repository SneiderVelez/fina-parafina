"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { User, ArrowLeft } from "lucide-react"; // Iconos
import { Label } from "@/components/ui/label";
import { ChangeEvent, MouseEvent, useState } from "react";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";

type LoginRequest = {
  email: string;
  password: string;
};

type AuthResponse = {
  success: boolean;
  code?: string | number | null;
  message: string;
  accessToken: string | null;
  refreshToken: string | null;
  expiresAt: string | null;
  user: unknown | null;
};

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [emailErrors, setEmailErrors] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErrors, setPasswordErrors] = useState("");

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

  const validatePassword = (password: string) => {
    if (!password || password.trim() === "") {
      return "La contraseña es requerida";
    }

    return "";
  };

  const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    const error = validateEmail(email);
    setEmailErrors(error);
    const errorPassword = validatePassword(password);
    setPasswordErrors(errorPassword);

    if (error || errorPassword) {
      return;
    }

    try {
      const request: LoginRequest = { email, password };
      const response = await axios.post<AuthResponse>(
        "http://localhost:5273/api/auth/login",
        request
      );

      if (response.data.success) {
        if (response.data.accessToken)
          localStorage.setItem("accessToken", response.data.accessToken);
        if (response.data.refreshToken)
          localStorage.setItem("refreshToken", response.data.refreshToken);
        if (response.data.expiresAt)
          localStorage.setItem("expiresAt", response.data.expiresAt);
        if (response.data.user)
          localStorage.setItem("user", JSON.stringify(response.data.user));
        // Persistir también un nombre directo para el header
        try {
          const u: any = response.data.user;
          const name = u?.name || u?.fullName || u?.username || "";
          if (name) localStorage.setItem("userName", name as string);
        } catch {}

        // Notificar al header que cambió el estado de sesión
        if (typeof window !== "undefined") {
          window.dispatchEvent(new Event("auth-changed"));
        }

        toast("Inicio de sesión exitoso", {
          description: response.data.message || "Bienvenido de nuevo",
          action: { label: "Cerrar", onClick: () => {} },
        });

        router.push("/dashboard");
      } else {
        toast("No se pudo iniciar sesión", {
          description: response.data.message || "Correo inválido",
          action: { label: "Cerrar", onClick: () => {} },
        });
      }
    } catch (error) {
      const axiosError = error as AxiosError<AuthResponse>;
      toast("Login no exitoso", {
        description:
          axiosError.response?.data?.message ||
          (axiosError.response?.status === 401
            ? "Correo inválido"
            : "Ha ocurrido un error en el login. Intenta nuevamente"),
        action: { label: "Cerrar", onClick: () => {} },
      });
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-5 px-5 gap-8">
      <div
        className="flex items-center justify-center w-12 h-12 bg-white rounded-md shadow-lg cursor-pointer"
        onClick={() => router.back()}
      >
        <ArrowLeft className="w-6 h-6 text-red" />
      </div>

      <section className="bg-white rounded-2xl shadow-custom w-[463px] p-8 flex flex-col relative">
        <h1 className="text-[32px] font-bold text-center text-black mb-8 font-jakarta">
          Iniciar sesión
        </h1>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Label> Correo electrónico</Label>
            <div className="flex flex-col gap-1">
              <Input
                type="email"
                placeholder="tucorreo@gmail.com"
                className="bg-gray-100"
                value={email}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  const inputValue = event.target.value;
                  setEmail(inputValue);
                }}
              />
              {emailErrors.length > 0 && (
                <span className="text-error text-xs ml-2">{emailErrors}</span>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label>Contraseña</Label>
            <div className="flex flex-col gap-1">
              <Input
                type="password"
                placeholder="********"
                value={password}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  const inputValue = event.target.value;
                  setPassword(inputValue);
                }}
              />
              {passwordErrors.length > 0 && (
                <span className="text-error text-xs ml-2">
                  {passwordErrors}
                </span>
              )}
            </div>
          </div>
          <Button
            className="w-full"
            onClick={(event) => {
              return handleSubmit(event);
            }}
          >
            Iniciar sesión
          </Button>
        </div>
      </section>

      <div className="w-[463px] flex flex-col items-center gap-4">
        <Separator className="bg-gray-400" />
        <Button variant={"link"}>
          <Link
            href="/forgot-password"
            className="text-sm text-red hover:underline"
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </Button>
      </div>
    </main>
  );
}
