"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import Logo from "../../../public/image/Logo.svg";
import { Separator } from "../ui/separator";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 1); // Cambia a sticky después de 1px de scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          <Button variant="text">Catalogo</Button>
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
        <div className="flex items-center gap-2">
          <Button variant="text">Ingresar</Button>
          <Separator orientation="vertical" className="h-7 w-0.5" />
          <Button variant="text">Registrarse</Button>
        </div>
      </section>
    </header>
  );
};

export default Header;
