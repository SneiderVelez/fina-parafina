"use client";

import { Button } from "@/components/ui/button";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

const ContactSocial = () => {
  const socialNetworks = [
    {
      icon: Facebook,
      name: "Facebook",
      url: "https://facebook.com/finaparafina",
      color: "from-blue-600 to-blue-700",
      description: "Síguenos para tips y novedades",
    },
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://instagram.com/finaparafina",
      color: "from-pink-500 to-purple-600",
      description: "Descubre nuestras creaciones",
    },
    {
      icon: MessageCircle,
      name: "TikTok",
      url: "https://tiktok.com/@finaparafina",
      color: "from-gray-800 to-gray-900",
      description: "Tutoriales y contenido divertido",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-jakarta text-3xl xl:text-4xl font-bold text-gray-800 mb-4">
          Síguenos en{" "}
          <span className="font-pacifico text-4xl xl:text-5xl text-blue">
            Redes Sociales
          </span>
        </h2>

        <p className="font-lato text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Síguenos y descubre tips, novedades y promociones exclusivas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {socialNetworks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
              >
                <div
                  className={`inline-flex w-16 h-16 bg-gradient-to-br ${social.color} rounded-2xl items-center justify-center mb-4`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                <h3 className="font-jakarta text-xl font-semibold text-gray-800 mb-2">
                  {social.name}
                </h3>

                <p className="font-lato text-gray-600 mb-4 text-sm">
                  {social.description}
                </p>

                <Button
                  onClick={() => window.open(social.url, "_blank")}
                  variant="outline"
                  className="w-full hover:bg-gray-50"
                >
                  Seguir en {social.name}
                </Button>
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
          <p className="font-lato text-gray-700 italic">
            "Conecta con nuestra comunidad de artesanos y descubre el mundo de
            las velas artesanales"
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSocial;
