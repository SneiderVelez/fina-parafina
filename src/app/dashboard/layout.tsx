"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Home,
  ShoppingCart,
  Heart,
  RotateCcw,
  CreditCard,
  FileText,
  LifeBuoy,
  Settings,
  Bell,
} from "lucide-react";

type StoredUser = {
  name?: string;
  fullName?: string;
  username?: string;
  email?: string;
  avatarUrl?: string;
} | null;

function isSessionValid(): boolean {
  try {
    const token = localStorage.getItem("accessToken");
    const expiresAt = localStorage.getItem("expiresAt");
    const notExpired = expiresAt ? new Date(expiresAt) > new Date() : true;
    return Boolean(token) && notExpired;
  } catch {
    return false;
  }
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [checking, setChecking] = useState(true);
  const [user, setUser] = useState<StoredUser>(null);
  const [notifications] = useState<number>(0);

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
    if (!isSessionValid()) {
      router.replace("/login");
      return;
    }
    try {
      const raw = localStorage.getItem("user");
      setUser(raw ? (JSON.parse(raw) as StoredUser) : null);
    } catch {
      setUser(null);
    }
    setChecking(false);
  }, [router]);

  const isActive = (href: string) => {
    if (href === "/dashboard") return pathname === "/dashboard";
    return pathname?.startsWith(href);
  };

  const handleLogout = () => {
    try {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("expiresAt");
      localStorage.removeItem("user");
      localStorage.removeItem("userName");
      if (typeof window !== "undefined") {
        window.dispatchEvent(new Event("auth-changed"));
      }
      router.replace("/");
    } catch {
      router.replace("/");
    }
  };

  if (checking) {
    return (
      <main className="min-h-[60vh] px-5 py-10 flex items-center justify-center">
        <div className="animate-pulse text-gray-600">
          Preparando tu panel...
        </div>
      </main>
    );
  }

  return (
    <div className="px-5 py-6 md:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-6">
      <aside className="bg-white rounded-2xl shadow-custom p-4 h-max sticky top-[110px] self-start max-h-[calc(100vh-110px)] overflow-y-auto hidden lg:block">
        <nav className="flex flex-col gap-1">
          <Link
            href="/dashboard"
            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
              isActive("/dashboard")
                ? "bg-yellow text-gray-700"
                : "hover:bg-gray-900 hover:text-white"
            }`}
          >
            <Home size={18} /> Inicio
          </Link>
          <Link
            href="/dashboard/pedidos"
            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
              isActive("/dashboard/pedidos")
                ? "bg-yellow text-gray-700"
                : "hover:bg-gray-900 hover:text-white"
            }`}
          >
            <ShoppingCart size={18} /> Mis pedidos
          </Link>
          <button
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 cursor-not-allowed"
            title="Próximamente"
          >
            <Heart size={18} /> Favoritos
          </button>
          <button
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 cursor-not-allowed"
            title="Próximamente"
          >
            <RotateCcw size={18} /> Recompras rápidas
          </button>
          <button
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 cursor-not-allowed"
            title="Próximamente"
          >
            <CreditCard size={18} /> Métodos de pago
          </button>
          <button
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 cursor-not-allowed"
            title="Próximamente"
          >
            <FileText size={18} /> Direcciones
          </button>
          <Link
            href="/dashboard/soporte"
            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
              isActive("/dashboard/soporte")
                ? "bg-yellow text-gray-700"
                : "hover:bg-gray-900 hover:text-white"
            }`}
          >
            <LifeBuoy size={18} /> Soporte
          </Link>
          <Link
            href="/dashboard/perfil"
            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
              isActive("/dashboard/perfil")
                ? "bg-yellow text-gray-700"
                : "hover:bg-gray-900 hover:text-white"
            }`}
          >
            <Settings size={18} /> Configuración
          </Link>
        </nav>
      </aside>

      {/* Main */}
      <section>
        {/* Header interno del dashboard (visible en todas las vistas) */}
        <div className="bg-white rounded-2xl shadow-custom p-5 mb-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-700 font-jakarta capitalize">
                Hola, {displayName}
              </h1>
              <p className="text-gray-600">
                Gestiona tus pedidos y preferencias desde un solo lugar.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                className="relative"
                aria-label="Notificaciones"
              >
                <Bell className="w-5 h-5" />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </Button>
              <Separator orientation="vertical" className="h-8 w-0.5" />
              <Link
                href="/dashboard/perfil"
                className="flex items-center gap-3 group"
              >
                <Avatar>
                  {user?.avatarUrl ? (
                    <AvatarImage src={user.avatarUrl} alt={displayName} />
                  ) : (
                    <AvatarFallback>
                      {displayName
                        .split(" ")
                        .filter(Boolean)
                        .map((p) => p[0])
                        .join("")
                        .slice(0, 2)
                        .toUpperCase()}
                    </AvatarFallback>
                  )}
                </Avatar>
                <span className="hidden md:block text-gray-700 font-bold group-hover:text-yellow">
                  Configurar
                </span>
              </Link>
              <Button variant="destructive" onClick={handleLogout}>
                Cerrar sesión
              </Button>
            </div>
          </div>
        </div>

        <div className="lg:hidden bg-white rounded-2xl shadow-custom p-2 mb-6 overflow-x-auto">
          <div className="flex items-center gap-2 min-w-max">
            <Link
              href="/dashboard"
              className={`px-3 py-2 rounded-lg text-sm ${
                isActive("/dashboard")
                  ? "bg-yellow text-gray-700"
                  : "hover:bg-gray-900 hover:text-white"
              }`}
            >
              Inicio
            </Link>
            <Link
              href="/dashboard/pedidos"
              className={`px-3 py-2 rounded-lg text-sm ${
                isActive("/dashboard/pedidos")
                  ? "bg-yellow text-gray-700"
                  : "hover:bg-gray-900 hover:text-white"
              }`}
            >
              Mis pedidos
            </Link>
            <Link
              href="/dashboard/soporte"
              className={`px-3 py-2 rounded-lg text-sm ${
                isActive("/dashboard/soporte")
                  ? "bg-yellow text-gray-700"
                  : "hover:bg-gray-900 hover:text-white"
              }`}
            >
              Soporte
            </Link>
            <Link
              href="/dashboard/perfil"
              className={`px-3 py-2 rounded-lg text-sm ${
                isActive("/dashboard/perfil")
                  ? "bg-yellow text-gray-700"
                  : "hover:bg-gray-900 hover:text-white"
              }`}
            >
              Configuración
            </Link>
          </div>
        </div>

        {children}
      </section>
    </div>
  );
}
