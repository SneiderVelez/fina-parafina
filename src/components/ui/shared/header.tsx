import Image from "next/image";
import { Button } from "../button";
import Logo from "../../../../public/image/Logo.svg";

const Header = () => {
  return (
    <header className="h-[76px] bg-black m-3 mb-0 rounded-lg border border-brand-secondary shadow-customBottom flex flex-row items-center justify-between px-5">
      <figure>
        <Image src={Logo} alt="logo" width={105} height={59.02} />
      </figure>
      <section className="flex flex-row gap-4 items-center justify-center">
        <Button variant="text">Inicio</Button>
        <Button variant="text">Categorias</Button>
        <Button variant="text">Productos</Button>
        <Button variant="text">Nosotros</Button>
        <Button variant="text">Contacto</Button>
      </section>
      <section></section>
    </header>
  );
};

export default Header;
