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
      color: "from-blue-700 to-blue-500",
    },
    {
      icon: Mail,
      title: "Correo electrónico",
      info: "contacto@finaparafina.com",
      buttonText: "Enviar correo",
      buttonAction: () =>
        window.open("mailto:contacto@finaparafina.com", "_blank"),
      color: "from-blue-700 to-blue-500",
    },
    {
      icon: MapPin,
      title: "Dirección (tienda física)",
      info: "Calle XX # XX-XX, Medellín, Colombia",
      buttonText: "Ver en Google Maps",
      buttonAction: () => window.open("https://maps.google.com", "_blank"),
      color: "from-blue-700 to-blue-500",
    },
  ];

  return (
    <section className="py-16 flex flex-col items-center justify-center gap-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="font-jakarta text-4xl xl:text-5xl font-bold text-gray-700 mb-6">
          Estamos aquí para ayudarte
        </h1>

        <p className="font-lato text-lg xl:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
          Si tienes dudas, pedidos especiales o quieres saber más sobre nuestros
          insumos, estamos a un mensaje de distancia.
        </p>
      </div>
      <div className="max-w-6xl mx-auto px-4 flex flex-col gap-8">
        <div className="text-center flex flex-col items-center justify-center">
          <h2 className="font-jakarta text-3xl xl:text-4xl font-bold text-gray-700  ">
            Canales de contacto
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
                className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
              >
                <div className="text-center">
                  <div className="flex flex-row  gap-4">
                    <div
                      className={`inline-flex w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl items-center justify-center mb-6`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex flex-col items-start justify-start">
                      <h3 className="font-jakarta text-xl font-semibold text-gray-700">
                        {method.title}
                      </h3>

                      <p className="font-lato text-gray-600 text-left">
                        {method.info}
                      </p>
                    </div>
                  </div>

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
