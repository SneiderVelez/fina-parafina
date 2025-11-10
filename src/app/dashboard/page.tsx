"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import CardProducts from "@/components/ui/card-products";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

type StoredUser = {
  name?: string;
  fullName?: string;
  username?: string;
  email?: string;
  phone?: string;
  telefono?: string;
  phoneNumber?: string;
  address?: string;
  direccion?: string;
  dateOfBirth?: string;
  birthDate?: string;
  fechaNacimiento?: string;
  city?: string;
  ciudad?: string;
  country?: string;
  pais?: string;
  document?: string;
  documento?: string;
} | null;

export default function DashboardPage() {
  const [user, setUser] = useState<StoredUser>(null);

  const displayName = useMemo(() => {
    if (!user) return "Usuario";
    return (
      (user.name as string) ||
      (user.fullName as string) ||
      (user.username as string) ||
      "Usuario"
    );
  }, [user]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("user");
      setUser(raw ? (JSON.parse(raw) as StoredUser) : null);
    } catch {
      setUser(null);
    }
  }, []);

  const getDOB = () =>
    (user?.dateOfBirth as string) ||
    (user?.birthDate as string) ||
    (user?.fechaNacimiento as string) ||
    "";

  const getDOBFormatted = () => {
    const raw = getDOB();
    if (!raw) return "Aún no configurado";
    const d = new Date(raw);
    if (isNaN(d.getTime())) return raw;
    const dd = d.getDate().toString().padStart(2, "0");
    const mm = (d.getMonth() + 1).toString().padStart(2, "0");
    const yyyy = d.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
  };

  const getAge = () => {
    const raw = getDOB();
    if (!raw) return "Aún no configurado";
    const d = new Date(raw);
    if (isNaN(d.getTime())) return "Aún no configurado";
    const today = new Date();
    let age = today.getFullYear() - d.getFullYear();
    const m = today.getMonth() - d.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < d.getDate())) age--;
    return `${age} años`;
  };

  // Valores normalizados para la sección de cuenta
  const nameValue = useMemo(() => (
    (user?.name as string) || (user?.fullName as string) || (user?.username as string) || ""
  ), [user]);
  const emailValue = (user?.email as string) || "";
  const dobValue = getDOB();
  const dobFormattedValue = dobValue ? getDOBFormatted() : "";
  const ageValue = dobValue ? getAge() : "";
  const phoneValue = (user?.phone as string) || (user?.telefono as string) || (user?.phoneNumber as string) || "";
  const addressValue = (user?.address as string) || (user?.direccion as string) || "";
  const cityValue = (user?.city as string) || (user?.ciudad as string) || "";
  const countryValue = (user?.country as string) || (user?.pais as string) || "";
  const documentValue = (user?.document as string) || (user?.documento as string) || "";

  return (
    <main className="flex flex-col gap-8">
      {/* KPIs */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Pedidos activos", value: 0 },
          { label: "Completados", value: 0 },
          { label: "Última compra", value: "-" },
        ].map((k) => (
          <div key={k.label} className="bg-white rounded-2xl shadow-custom p-5">
            <p className="text-gray-600 text-sm">{k.label}</p>
            <p className="text-2xl font-bold text-gray-700 mt-1">{k.value}</p>
          </div>
        ))}
      </section>

      {/* Pedidos recientes */}
      <section className="bg-white rounded-2xl shadow-custom p-6 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-700">Mis pedidos recientes</h2>
        </div>
        <Separator className="bg-gray-400" />
        <div className="text-gray-600 flex flex-col gap-3">
          <div className="flex items-center justify-center py-6 text-center">
            <div>
              <Image src="/image/icon-candle.png" alt="Sin pedidos" width={48} height={48} className="mx-auto opacity-70" />
              <p className="mt-2">Aún no tienes pedidos.</p>
              <Button asChild className="mt-3">
                <Link href="/catalogo">Ir al catálogo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Información de la cuenta */}
      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-bold text-gray-700">Información de la cuenta</h2>
        <Separator className="bg-gray-400" />
        <ul className="bg-white rounded-2xl shadow-custom p-5 divide-y divide-gray-200">
          {[
            { label: "Nombre", value: nameValue },
            { label: "Correo", value: emailValue },
            { label: "Fecha de nacimiento", value: dobFormattedValue },
            { label: "Edad", value: ageValue },
            { label: "Teléfono", value: phoneValue },
            { label: "Dirección", value: addressValue },
            { label: "Ciudad", value: cityValue },
            { label: "País", value: countryValue },
            { label: "Documento", value: documentValue },
          ]
            .filter((i) => i.value && String(i.value).trim() !== "" && i.value !== "Aún no configurado")
            .map((i) => (
              <li key={i.label} className="flex items-center justify-between py-3">
                <span className="text-gray-600 text-sm">{i.label}</span>
                <span className="text-gray-700 font-bold">{i.value}</span>
              </li>
            ))}
        </ul>
        <div className="text-right">
          <Link href="/dashboard/perfil" className="text-yellow hover:underline text-sm">
            Completar o editar información
          </Link>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-bold text-gray-700">Recomendados para ti</h2>
        <Separator className="bg-gray-400" />
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <CardProducts
              key={i}
              image_product="/image/aroma.jpg"
              title={`Fragancia artesanal #${i}`}
              description="Notas suaves y cálidas."
              type="Fragancia"
              weight="250 ml"
              price="$9.990"
              variant="light"
            />
          ))}
        </div>
      </section>
    </main>
  );
}
