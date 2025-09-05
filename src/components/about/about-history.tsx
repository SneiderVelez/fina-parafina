import Image from "next/image";
import { Clock, Globe, Target } from "lucide-react";

const AboutHistory = () => {
  const historyPoints = [
    {
      icon: Clock,
      title: "Tradición Artesanal",
      description:
        "Años de experiencia atendiendo a clientes en nuestra tienda física, conociendo las necesidades reales de cada artesano.",
    },
    {
      icon: Globe,
      title: "Innovación Digital",
      description:
        "Ahora también con presencia online para llegar a más personas y hacer que nuestros insumos estén disponibles para todos.",
    },
    {
      icon: Target,
      title: "Nuestro Propósito",
      description:
        "Ayudar a cada cliente a transformar sus ideas en velas únicas, brindando asesoría experta y productos de calidad.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-jakarta text-3xl xl:text-4xl font-bold text-gray-700 mb-4">
            Historia y{" "}
            <span className="font-pacifico text-4xl xl:text-5xl ">
              Propósito
            </span>
          </h2>
          <p className="font-lato text-lg text-gray-600 max-w-3xl mx-auto">
            Nuestra historia se construye día a día con cada cliente que confía
            en nosotros para dar vida a sus creaciones artesanales.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative h-80 xl:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/image/hero.jpg"
                alt="Tienda física de Fina Parafina"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-lato text-sm">Nuestra tienda física</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {historyPoints.map((point, index) => {
              const IconComponent = point.icon;
              return (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue to-blue-600 rounded-full flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-jakarta text-xl font-bold text-gray-700 mb-2">
                      {point.title}
                    </h3>
                    <p className="font-lato text-gray-600 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHistory;
