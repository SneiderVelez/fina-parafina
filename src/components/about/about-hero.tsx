import Image from "next/image";

const AboutHero = () => {
  return (
    <section className="bg-brand-secondary to-brand-quinary pt-28 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="font-jakarta text-4xl xl:text-5xl font-bold text-gray-700 leading-tight">
              Nuestra{" "}
              <span className="font-pacifico text-5xl xl:text-6xl ">
                Esencia
              </span>
            </h1>

            <p className="font-lato text-lg xl:text-xl text-gray-700 leading-relaxed">
              En Fina Parafina somos una tienda local dedicada a los insumos
              para velas artesanales. Nacimos con la idea de acompañar a
              artesanos, emprendedores y amantes de la creatividad en cada paso
              de su proceso.
            </p>

            <p className="font-lato text-lg xl:text-xl text-gray-700 leading-relaxed">
              Queremos que la experiencia de crear sea tan{" "}
              <span className="font-semibold text-black">mágica</span> como el
              resultado final.
            </p>
          </div>

          <div className="relative">
            <div className="relative h-96 xl:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/image/hero.jpg"
                alt="Velas artesanales encendidas en ambiente cálido"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
