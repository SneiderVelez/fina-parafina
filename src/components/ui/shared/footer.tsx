import { Button } from "../button";
import Image from "next/image";
import Logo from "../../../../public/image/logo-footer.png";
import { Separator } from "@/components/ui/separator"

const Footer = () => {
  return (
  <header className="bg-blue-500 w-full h-[395px] flex flex-col">
    <section className="flex flex-row items-end justify-center pt-8 px-20 space-x-3">
      <Separator orientation="horizontal" className="flex-1 h-[1px] bg-black"/>

      <section className="flex flex-row justify-center space-x-3 px-10">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[44px] h-[44px] flex items-center justify-center rounded-full bg-blue-200 hover:bg-white transition"
        >
          <Image
            src="/icons/facebook.png"
            alt="Facebook"
            width={24}
            height={24}
            className="rounded-full"
          />
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[44px] h-[44px] flex items-center justify-center rounded-full bg-blue-200 hover:bg-white transition"
        >
          <Image
            src="/icons/instagram.png"
            alt="Instagram"
            width={24}
            height={24}
            className="rounded-full"
          />
        </a>

        <a
          href="https://tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[44px] h-[44px] flex items-center justify-center rounded-full bg-blue-200 hover:bg-white transition"
        >
          <Image
            src="/icons/tiktok.png"
            alt="TikTok"
            width={24}
            height={24}
            className="rounded-full"
          />
        </a>

      </section>

      <Separator orientation="horizontal" className="flex-1 h-[1px] bg-black"/>

    </section>

    <section className="flex-1 h-[211px] flex flex-row items-center justify-evenly ">
      <section className="flex flex-col justify-center text-start ">
        <h2 className="font-bold text-[18.27px] pt-10">Ayuda</h2>
        <section className="mt-4 flex flex-col items-start">
          <Button variant="footer" className="!m-0 !p-0">Contactanos</Button>
          <Button variant="footer" className="!m-0 !p-0">Metodos de pago y envios</Button>
          <Button variant="footer" className="!m-0 !p-0">Preguntas frecuentes</Button>
          <Button variant="footer" className="!m-0 !p-0">Promociones</Button>
        </section>
      </section>

      <figure className="items-center justify-center">
        <Image src={Logo} alt="logo-footer" width={211} height={211} />
      </figure>

      <section className="flex flex-col justify-center text-start ">
        <h2 className="font-bold text-[18.27px] pt-10">Compañía</h2>
        <section className="mt-4 flex flex-col items-start">
          <Button variant="footer" className="!m-0 !p-0">Nosotros</Button>
          <Button variant="footer" className="!m-0 !p-0">Productos</Button>

        </section>
      </section>
    </section>

    <section className="h-[80px] bg-black flex justify-around items-center text-white flex-row">
      <p className="">Todos los derechos reservados © 2025 </p>
      <section className="grid grid-flow-col place-items-center gap-[13px]">
        <p className="">Términos y condiciones </p>
        <Separator orientation="vertical" className="h-[43px]"/>
        <p className="">Política de privacidad</p>
      </section>
    </section>
  </header>
  );
};

export default Footer;