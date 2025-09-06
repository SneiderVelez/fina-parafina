"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import Logo from "../../../public/image/Logo.svg";

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
      <section></section>
    </header>
  );
};

export default Header;
