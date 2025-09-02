import { Button } from "../button";
import Image from "next/image";
import Logo from "../../../../public/image/logo-footer.png";

const Footer = () => {
  return (
    <footer className="w-[1440px] ">
      <div className="h-[315px] bg-blue-500 flex justify-evenly items-end">
           <div className="flex flex-col items-start mb-[50px]">
            <h2 className="font-bold text-[18.27px] ">Ayuda</h2>
      <div className="flex flex-col items-start">
        <Button variant="ghost" className="font-normal text-[14px] h-auto py-0 px-0 justify-start">Contáctanos</Button>
        <Button variant="ghost" className="font-normal text-[14px] h-auto py-0 px-0 justify-start">Métodos de Pago y Envíos</Button>
        <Button variant="ghost" className="font-normal text-[14px] h-auto py-0 px-0 justify-start">Preguntas Frecuentes</Button>
        <Button variant="ghost" className="font-normal text-[14px] h-auto py-0 px-0 justify-start">Promociones</Button>
      </div>
    </div>
        <figure className="mb-[-5px]">
        <Image src={Logo} alt="logo" width={211} height={211} />
        </figure>
        <div className="flex flex-col items-start mb-[90px]">
            <h3 className="font-bold text-[18.27px] ">Compañía</h3>
      <div className="flex flex-col items-start">
        <Button variant="ghost" className="font-normal text-[14px] h-auto py-0 px-0 justify-start">Nosotros</Button>
        <Button variant="ghost" className="font-normal text-[14px] h-auto py-0 px-0 justify-start">Productos</Button>
      </div>
    </div>

</div>

      <div className="h-[80px] bg-black flex items-center justify-center">
        <p className="">
          
        </p>
      </div>
    </footer>
  );
};

export default Footer;