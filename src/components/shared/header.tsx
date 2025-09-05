import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import Logo from "../../../public/image/Logo.svg";

const Header = () => {
  return (
    <header className="h-[90px] bg-black/70 backdrop-blur-md  rounded-lg border border-brand-secondary shadow-customBottom flex flex-row items-center justify-between px-5 fixed top-0 left-0 right-0 z-50">
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
        <Button variant="text">Contacto</Button>
      </section>
      <section></section>
    </header>
  );
};

export default Header;
