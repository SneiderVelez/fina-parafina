"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { User, ArrowLeft } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ChangeEvent, MouseEvent, MouseEventHandler, useState } from "react";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";

type RegisterRequest = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
  phone?: string;
  dateOfBirth?: string;
  address?: string;
};

type RegisterResponse = {
  accessToken: string | null;
  expiresAt: string | null;
  message: string;
  refreshToken: string;
  success: boolean;
  user: string | null;
};

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [emailErrors, setEmailErrors] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErrors, setPasswordErrors] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordErrors, setConfirmPasswordErrors] = useState("");
  const [fullName, setFullName] = useState("");
  const [fullNameErrors, setFullNameErrors] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [birthDateErrors, setBirthDateErrors] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneErrors, setPhoneErrors] = useState("");
  const [address, setAddress] = useState("");
  const [addressErrors, setAddressErrors] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [acceptTermsErrors, setAcceptTermsErrors] = useState("");

  const validateEmail = (email: string) => {
    if (!email || email.trim() === "") {
      return "El email es requerido";
    }

    if (email.length > 255) {
      return "El email no puede exceder 255 caracteres";
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

    if (password.length < 8 || password.length > 100) {
      return "La contraseña debe tener entre 8 y 100 caracteres";
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]*$/;
    if (!passwordRegex.test(password)) {
      return "La contraseña debe contener al menos una letra minúscula, una mayúscula, un número y un carácter especial";
    }

    return "";
  };

  const validateConfirmPassword = (
    confirmPassword: string,
    password: string
  ) => {
    if (!confirmPassword || confirmPassword.trim() === "") {
      return "La confirmación de contraseña es requerida";
    }

    if (confirmPassword !== password) {
      return "Las contraseñas no coinciden";
    }

    return "";
  };

  const validateFullName = (fullName: string) => {
    if (!fullName || fullName.trim() === "") {
      return "El nombre es requerido";
    }

    if (fullName.length > 100) {
      return "El nombre no puede exceder 100 caracteres";
    }

    return "";
  };

  const validateBirthDate = (birthDate: string) => {
    if (!birthDate) {
      return "";
    }

    const selectedDate = new Date(birthDate);
    const today = new Date();

    if (selectedDate >= today) {
      return "La fecha de nacimiento debe ser anterior a la fecha actual";
    }

    return "";
  };

  const validatePhone = (phone: string) => {
    if (!phone) {
      return "";
    }

    if (phone.length > 20) {
      return "El teléfono no puede exceder 20 caracteres";
    }

    const phoneRegex = /^\+?[1-9]\d{9,14}$/;
    if (!phoneRegex.test(phone)) {
      return "El teléfono debe tener entre 10 y 15 dígitos (incluyendo código de país opcional)";
    }

    return "";
  };

  const validateAddress = (address: string) => {
    if (!address) {
      return ""; // No es obligatorio, así que no hay error si está vacío
    }

    if (address.length > 500) {
      return "La dirección no puede exceder 500 caracteres";
    }

    return "";
  };

  const validateAcceptTerms = (acceptTerms: boolean) => {
    if (!acceptTerms) {
      return "Debe aceptar los términos y condiciones";
    }

    return "";
  };

  const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    const error = validateEmail(email);
    setEmailErrors(error);
    const errorPassword = validatePassword(password);
    setPasswordErrors(errorPassword);
    const errorConfirmPassword = validateConfirmPassword(
      confirmPassword,
      password
    );
    setConfirmPasswordErrors(errorConfirmPassword);
    const errorFullName = validateFullName(fullName);
    setFullNameErrors(errorFullName);
    const errorBirthDate = validateBirthDate(birthDate);
    setBirthDateErrors(errorBirthDate);
    const errorPhone = validatePhone(phone);
    setPhoneErrors(errorPhone);
    const errorAddress = validateAddress(address);
    setAddressErrors(errorAddress);
    const errorAcceptTerms = validateAcceptTerms(acceptTerms);
    setAcceptTermsErrors(errorAcceptTerms);

    if (
      error ||
      errorPassword ||
      errorConfirmPassword ||
      errorFullName ||
      errorBirthDate ||
      errorPhone ||
      errorAddress ||
      errorAcceptTerms
    ) {
      return;
    }

    const request: RegisterRequest = {
      name: fullName,
      email,
      password,
      confirmPassword,
      acceptTerms,
      ...(phone && { phone }),
      ...(birthDate && { dateOfBirth: birthDate }),
      ...(address && { address }),
    };

    axios
      .post("http://localhost:5273/api/auth/register", request)
      .then(function (response) {
        console.log(response);
        router.push(`/verify-email?email=${encodeURIComponent(email)}`);
      })
      .catch(function (error: AxiosError<RegisterResponse>) {
        console.log(error);
        toast("Registro no exitoso", {
          description:
            error.response?.data?.message ||
            "Ha ocurrido un error en el registro intente nuevamente",
          action: {
            label: "Cerrar",
            onClick: () => console.log("Cerrar"),
          },
        });
      });
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-10 px-4 gap-8">
      <div
        className="flex items-center justify-center w-12 h-12 bg-white rounded-lg shadow-md cursor-pointer"
        onClick={() => router.back()}
      >
        <ArrowLeft className="w-6 h-6 text-red" />
      </div>

      <section className="bg-white rounded-2xl shadow-custom p-10 flex flex-col relative w-[892px]">
        <h1 className="text-[32px] font-bold text-center font-jakarta text-black mb-10">
          Regístrate
        </h1>

        <div className="grid grid-cols-2 gap-6 mb-6">
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
              />
              {emailErrors.length > 0 && (
                <span className="text-error text-xs ml-2">{emailErrors}</span>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label> Nombre completo</Label>
            <div className="flex flex-col gap-1">
              <Input
                type="text"
                placeholder="Tu nombre completo"
                value={fullName}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  const inputValue = event.target.value;
                  setFullName(inputValue);
                }}
                className={fullNameErrors.length > 0 ? "border-error" : ""}
              />
              {fullNameErrors.length > 0 && (
                <span className="text-error text-xs ml-2">
                  {fullNameErrors}
                </span>
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
                className={passwordErrors.length > 0 ? "border-error" : ""}
              />
              {passwordErrors.length > 0 && (
                <span className="text-error text-xs ml-2">
                  {passwordErrors}
                </span>
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
                  const inputValue = event.target.value;
                  setConfirmPassword(inputValue);
                }}
                className={
                  confirmPasswordErrors.length > 0 ? "border-error" : ""
                }
              />
              {confirmPasswordErrors.length > 0 && (
                <span className="text-error text-xs ml-2">
                  {confirmPasswordErrors}
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label>Fecha de nacimiento</Label>
            <div className="flex flex-col gap-1">
              <Input
                type="date"
                value={birthDate}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  const inputValue = event.target.value;
                  setBirthDate(inputValue);
                }}
                className={birthDateErrors.length > 0 ? "border-error" : ""}
              />
              {birthDateErrors.length > 0 && (
                <span className="text-error text-xs ml-2">
                  {birthDateErrors}
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label>Teléfono</Label>
            <div className="flex flex-col gap-1">
              <Input
                type="tel"
                placeholder="3000000000"
                value={phone}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  const inputValue = event.target.value;
                  setPhone(inputValue);
                }}
                className={phoneErrors.length > 0 ? "border-error" : ""}
              />
              {phoneErrors.length > 0 && (
                <span className="text-error text-xs ml-2">{phoneErrors}</span>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label>Dirección</Label>
            <div className="flex flex-col gap-1">
              <Input
                type="text"
                placeholder="Calle 123 # 45 - 67"
                value={address}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  const inputValue = event.target.value;
                  setAddress(inputValue);
                }}
                className={addressErrors.length > 0 ? "border-error" : ""}
              />
              {addressErrors.length > 0 && (
                <span className="text-error text-xs ml-2">{addressErrors}</span>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 w-6/12 mx-auto">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <Checkbox
                id="terms"
                checked={acceptTerms}
                onCheckedChange={(checked) =>
                  setAcceptTerms(checked as boolean)
                }
              />
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
            {acceptTermsErrors.length > 0 && (
              <span className="text-error text-xs ml-2">
                {acceptTermsErrors}
              </span>
            )}
          </div>
          {/* Botón */}
          <Button
            className="w-full"
            onClick={(event) => {
              return handleSubmit(event);
            }}
          >
            Crear mi cuenta
          </Button>
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
