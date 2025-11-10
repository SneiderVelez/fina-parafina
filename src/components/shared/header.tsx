"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import Logo from "../../../public/image/Logo.svg";
import { Separator } from "../ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

function decodeNameFromJwt(token: string): string | null {
  try {
    const parts = token.split(".");
    if (parts.length !== 3) return null;
    const payload = JSON.parse(
      atob(parts[1].replace(/-/g, "+").replace(/_/g, "/"))
    );
    return (
      payload?.name ||
      payload?.fullName ||
      payload?.given_name ||
      payload?.unique_name ||
      payload?.username ||
      null
    );
  } catch {
    return null;
  }
}

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [userName, setUserName] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 1);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const readAuth = () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const expiresAt = localStorage.getItem("expiresAt");
        const userRaw = localStorage.getItem("user");
        const userNameDirect = localStorage.getItem("userName");

        const notExpired = expiresAt ? new Date(expiresAt) > new Date() : true;
        const authed = Boolean(accessToken) && notExpired;
        setIsAuth(authed);

        if (authed) {
          // prioridad: userName directo > user guardado > JWT > fallback
          if (userNameDirect) {
            setUserName(userNameDirect);
          } else if (userRaw) {
            try {
              const u = JSON.parse(userRaw);
              const name = u?.name || u?.fullName || u?.username || "";
              setUserName(name || "Usuario");
              setAvatarUrl(u?.avatarUrl || "");
            } catch {
              setUserName("Usuario");
            }
          } else if (accessToken) {
            const nameFromToken = decodeNameFromJwt(accessToken);
            setUserName(nameFromToken || "Usuario");
          } else {
            setUserName("Usuario");
          }
        } else {
          setUserName("");
          setAvatarUrl("");
        }
      } catch {
        setIsAuth(false);
        setUserName("");
        setAvatarUrl("");
      }
    };

    // Inicial
    readAuth();
    // Cambios de ruta y eventos custom/storage
    window.addEventListener("auth-changed", readAuth as EventListener);
    window.addEventListener("storage", readAuth as EventListener);
    return () => {
      window.removeEventListener("auth-changed", readAuth as EventListener);
      window.removeEventListener("storage", readAuth as EventListener);
    };
  }, [pathname]);

  const handleLogout = () => {
    try {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("expiresAt");
      localStorage.removeItem("user");
      localStorage.removeItem("userName");
      setIsAuth(false);
      setUserName("");
      setAvatarUrl("");
      window.dispatchEvent(new Event("auth-changed"));
    } catch {}
  };

  return (
    <header
      className={`h-[90px] backdrop-blur-md rounded-b-lg border-b border-brand-secondary shadow-customBottom flex flex-row items-center justify-between px-5 z-50 transition-all duration-300 ${
        isScrolled
          ? "fixed top-0 left-0 right-0 bg-black/70"
          : "relative bg-black"
      }`}
    >
      <Link href="/" className="hover:opacity-80 transition-opacity">
        <figure>
          <Image src={Logo} alt="logo" width={105} height={59.02} />
        </figure>
      </Link>
      <section className="flex flex-row gap-4 items-center justify-center">
        <Link href="/">
          <Button variant="text">Inicio</Button>
        </Link>
        <Link href="/catalogo">
          <Button variant="text">Catálogo</Button>
        </Link>
        <Link href="/quienes-somos">
          <Button variant="text">Nosotros</Button>
        </Link>
        <Link href="/contacto">
          <Button variant="text">Contacto</Button>
        </Link>
      </section>
      <section className="flex items-center gap-4">
        <Button variant="ghost" className="relative transition-colors">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white hover:text-yellow"
          >
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="m1 1 4 4 13 1-1 7H6"></path>
          </svg>
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            0
          </span>
        </Button>
        <Separator orientation="vertical" className="h-7 w-0.5" />
        <div className="flex items-center gap-3">
          {isAuth ? (
            <>
              <Link
                href="/dashboard"
                className="flex items-center gap-3 group"
                aria-label="Ir a mi panel"
              >
                <Avatar>
                  {avatarUrl ? (
                    <AvatarImage src={avatarUrl} alt={userName} />
                  ) : (
                    <AvatarFallback>
                      {userName
                        .split(" ")
                        .filter(Boolean)
                        .map((p) => p[0])
                        .join("")
                        .slice(0, 2)
                        .toUpperCase()}
                    </AvatarFallback>
                  )}
                </Avatar>
                <span className="text-white text-base font-bold block max-w-[200px] truncate capitalize group-hover:text-yellow">
                  {userName}
                </span>
              </Link>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button variant="text">Ingresar</Button>
              </Link>
              <Separator orientation="vertical" className="h-7 w-0.5" />
              <Link href="/register">
                <Button variant="text">Registrarse</Button>
              </Link>
            </>
          )}
        </div>
      </section>
    </header>
  );
};

export default Header;
