"use client";

import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const ContactChannels = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Teléfono / WhatsApp",
      info: "(+57) 300 000 0000",
      buttonText: "Escribenos por WhatsApp",
      buttonAction: () => window.open("https://wa.me/573000000000", "_blank"),
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: Mail,
      title: "Correo electrónico",
      info: "contacto@finaparafina.com",
      buttonText: "Enviar correo",
      buttonAction: () =>
        window.open("mailto:contacto@finaparafina.com", "_blank"),
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: MapPin,
      title: "Dirección (tienda física)",
      info: "Calle XX # XX-XX, Medellín, Colombia",
      buttonText: "Ver en Google Maps",
      buttonAction: () => window.open("https://maps.google.com", "_blank"),
      color: "from-red-400 to-pink-500",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-jakarta text-3xl xl:text-4xl font-bold text-gray-800 mb-4">
            Canales de{" "}
            <span className="font-pacifico text-4xl xl:text-5xl text-blue">
              Contacto
            </span>
          </h2>
          <p className="font-lato text-lg text-gray-600 max-w-3xl mx-auto">
            Elige la forma que más te convenga para comunicarte con nosotros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
              >
                <div className="text-center">
                  <div
                    className={`inline-flex w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl items-center justify-center mb-6`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="font-jakarta text-xl font-semibold text-gray-800 mb-3">
                    {method.title}
                  </h3>

                  <p className="font-lato text-gray-600 mb-6 leading-relaxed">
                    {method.info}
                  </p>

                  <Button
                    onClick={method.buttonAction}
                    variant="outline"
                    className="w-full hover:bg-gray-50"
                  >
                    {method.buttonText}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactChannels;
