"use client";

import { useState } from "react";
import CardKit from "./ui/card-kit";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const KitSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const kits = [
    {
      image: "/image/hero.jpg",
      name: "Kit Básico para Velas",
      description:
        "Todo lo que necesitas para dar tus primeros pasos en el mundo de las velas. Simple, práctico y perfecto para principiantes",
      price: "$89.000 COP",
      buttonText: "Empieza ahora",
      level: "NIVEL BÁSICO",
    },
    {
      image: "/image/hero.jpg",
      name: "Kit de Velas Aromáticas",
      description:
        "Explora la magia de los aromas y crea velas únicas para ambientar tus espacios. Ideal para quienes buscan un toque personal y creativo.",
      price: "$125.000 COP",
      buttonText: "Descubre aromas",
      level: "NIVEL INTERMEDIO",
    },
    {
      image: "/image/hero.jpg",
      name: "Kit Premium Creativo",
      description:
        "El kit más completo para los verdaderos apasionados de la creación de velas. Materiales de alta calidad para proyectos únicos.",
      price: "$189.000 COP",
      buttonText: "Llévalo todo",
      level: "NIVEL AVANZADO",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % kits.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + kits.length) % kits.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="  flex flex-col gap-8 py-16">
      <div className="text-center">
        <h1 className="font-jakarta text-[20px] font-bold leading-[40px] xl:text-[30px] xl:leading-[54px] text-gray-700">
          Arma tu experiencia con nuestros Kits de Insumos
        </h1>
        <h3 className="font-lato text-[16px] leading-[24px] xl:text-[20px] xl:leading-[28px] text-gray-600 max-w-3xl mx-auto mt-4">
          Encuentra combinaciones listas de materiales para que empieces a crear
          sin complicaciones. Desde principiantes hasta expertos, tenemos el kit
          perfecto para ti.
        </h3>
      </div>

      <div className="relative w-full max-w-4xl xl:max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {kits.map((kit, index) => (
              <div key={index} className="w-full flex-shrink-0 p-4">
                <div className="w-10/12 mx-auto">
                  <CardKit
                    image={kit.image}
                    name={kit.name}
                    description={kit.description}
                    price={kit.price}
                    buttonText={kit.buttonText}
                    level={kit.level}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <Button
          onClick={prevSlide}
          variant="outline"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full transition-all duration-200 hover:scale-110"
          aria-label="Anterior"
        >
          <ChevronLeft size={24} />
        </Button>

        <Button
          onClick={nextSlide}
          variant="outline"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full transition-all duration-200 hover:scale-110"
          aria-label="Siguiente"
        >
          <ChevronRight size={24} />
        </Button>

        <div className="flex justify-center mt-6 gap-2">
          {kits.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? "bg-gray-700 scale-125"
                  : "bg-gray-300 hover:bg-gray-500"
              }`}
              aria-label={`Ir a slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default KitSection;
