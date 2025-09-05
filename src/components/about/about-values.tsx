import { Heart, Shield, Users, Smartphone } from "lucide-react";

const AboutValues = () => {
  const values = [
    {
      icon: Heart,
      title: "Confianza Local",
      description:
        "Un negocio cercano y humano que entiende las necesidades de cada artesano y emprendedor local.",
    },
    {
      icon: Shield,
      title: "Calidad Garantizada",
      description:
        "Insumos seleccionados con altos estándares de calidad para asegurar el éxito de cada proyecto.",
    },
    {
      icon: Users,
      title: "Acompañamiento",
      description:
        "Asesoría experta para que cada proyecto sea un éxito, desde la idea hasta el resultado final.",
    },
    {
      icon: Smartphone,
      title: "Omnicanalidad",
      description:
        "La misma experiencia de calidad en tienda física y en la web, adaptándonos a tus necesidades.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br to-brand-quinary">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-jakarta text-3xl xl:text-4xl font-bold text-gray-700 mb-4">
            Nuestros{" "}
            <span className="font-pacifico text-4xl xl:text-5xl ">Valores</span>
          </h2>
          <p className="font-lato text-lg text-gray-600 max-w-3xl mx-auto">
            Los principios que guían cada decisión y cada interacción con
            nuestros clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br from-yellow to-yellow-600 rounded-2xl flex items-center justify-center`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-jakarta text-xl font-bold text-gray-700 mb-3">
                      {value.title}
                    </h3>
                    <p className="font-lato text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
