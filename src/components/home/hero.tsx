import Image from "next/image";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen relative bg-gray-700 grid grid-cols-5 items-center gap-1">
      <div
        className="h-[70vh] bg-cover bg-center bg-no-repeat relative rounded-3xl"
        style={{
          backgroundImage: "url('/image/hero.jpg')",
        }}
      ></div>
      <div
        className="h-[85vh] bg-cover bg-center bg-no-repeat relative rounded-3xl"
        style={{
          backgroundImage: "url('/image/hero.jpg')",
        }}
      ></div>
      <div
        className="h-[100vh] bg-cover bg-center bg-no-repeat relative rounded-3xl"
        style={{
          backgroundImage: "url('/image/hero.jpg')",
        }}
      ></div>
      <div
        className="h-[85vh] bg-cover bg-center bg-no-repeat relative rounded-3xl"
        style={{
          backgroundImage: "url('/image/hero.jpg')",
        }}
      ></div>
      <div
        className="h-[60vh] bg-cover bg-center bg-no-repeat relative rounded-3xl"
        style={{
          backgroundImage: "url('/image/hero.jpg')",
        }}
      ></div>
      <div className="text-center flex flex-col gap-4 z-10 mb-10 mt-24 xl:mt-40 absolute left-1/2 -translate-x-1/2 bg-black/80 p-10 rounded-3xl">
        <h1 className="font-jakarta text-[30px] font-bold xl:text-[62px] xl:leading-[72px] leading-[30px] text-center text-brand-main">
          Calidad que ilumina,
          <br />
          insumos que inspiran
        </h1>
        <p className="font-lato text-lg xl:text-[24px] leading-[28px] text-brand-main">
          Mayoristas en insumos para velas
        </p>
        <div className="hover:scale-110 transition-all duration-300">
          <Button>Explora nuestros insumos</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
