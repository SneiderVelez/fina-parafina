import Image from "next/image";
import { Sparkles } from "lucide-react";

const AboutClosing = () => {
  return (
    <section className="py-16 bg-brand-main relative overflow-hidden">
      <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-400/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-400/5 rounded-full blur-2xl"></div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <div className="mb-2">
          <div className="inline-flex items-center gap-2 bg-blue-400/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
            <Sparkles className="w-5 h-5 text-blue" />
            <span className="font-lato text-blue-600 font-medium">
              Nuestra Promesa
            </span>
          </div>
        </div>

        <h2 className="font-jakarta text-4xl font-bold text-gray-700 mb-0 leading-tight">
          En Fina Parafina, no solo vendemos insumos,
        </h2>

        <div className="relative mb-8">
          <h3 className="font-jakarta text-3xl text-yellow-400 mb-4">
            encendemos ideas
          </h3>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
        </div>

        <p className="font-lato text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto ">
          Cada vela que ayudamos a crear es una historia, una pasión, un sueño
          hecho realidad. Somos el puente entre tu creatividad y el mundo.
        </p>

        <div className="mt-8">
          <p className="font-lato text-lg text-blue-600 italic">
            "Porque cada idea merece brillar"
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutClosing;
