import Image from "next/image";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex justify-center  flex-col">
      <section
        className="h-[75vh] bg-cover bg-center bg-no-repeat relative "
        style={{
          backgroundImage: "url('/image/hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[8px] "></div>
        <div className="text-center relative z-10 mb-10 mt-40">
          <h1 className="font-jakarta text-[48px] leading-[54px]  mb-4 text-center text-brand-main">
            Calidad que ilumina,
            <br />
            insumos que inspiran
          </h1>
          <p className="font-lato text-[24px] leading-[28px] mb-8 text-brand-main">
            Mayoristas en insumos para velas
          </p>
          <div className="hover:scale-110 transition-all duration-300">
            <Button>Explora nuestros insumos</Button>
          </div>
        </div>
      </section>

      <div className="bg-white/10 rounded-3xl z-10 w-8/12 mx-auto p-7 -mt-72">
        <figure>
          <Image
            src="/image/hero.jpg"
            alt="hero"
            width={500}
            height={500}
            className="w-full h-[507px] object-cover rounded-3xl "
          />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
