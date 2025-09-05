"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import CardTestimonials from "./ui/card-testimonials";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "María González",
      city: "Bogotá, Colombia",
      testimonial:
        "Los kits de Fina Parafina son increíbles. La calidad de los materiales es excelente y las instrucciones muy claras. ¡Recomendado 100%!",
      rating: 5,
    },
    {
      name: "Laura G",
      city: "Medellín, Colombia",
      testimonial:
        "Encontré todo lo que necesitaba para mis velas artesanales, excelente calidad y atención.",
      rating: 4,
    },
    {
      name: "Marcela R.",
      city: "Cali, Colombia",
      testimonial:
        "La página web me permitió comprar fácil y recibir rápido en casa. Muy recomendados",
      rating: 5,
    },
    {
      name: "Carlos M.",
      city: "Barranquilla, Colombia",
      testimonial:
        "Excelente servicio al cliente y productos de primera calidad. Mis velas quedaron perfectas gracias a sus insumos.",
      rating: 5,
    },
    {
      name: "Ana L.",
      city: "Pereira, Colombia",
      testimonial:
        "La variedad de fragancias es impresionante. Cada vela que hago es única y aromática. Definitivamente volveré a comprar.",
      rating: 4,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (testimonials.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + (testimonials.length - 2)) % (testimonials.length - 2)
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="items-center flex flex-col gap-8 pb-16 bg-gradient-to-b from-brand-quinary via-brand-secondary">
      <section className="flex flex-col items-center">
        <h1 className="font-jakarta text-[20px] font-bold leading-[40px] xl:text-[30px] xl:leading-[54px] text-gray-700 ">
          Lo que nuestros clientes dicen de Fina Parafina
        </h1>
        <p className="font-jakarta text-[16px] leading-[24px] xl:text-[20px] xl:leading-[28px] text-gray-600">
          Ellos ya confiaron en nosotros para crear sus mejores proyectos.
        </p>
      </section>
      <Button variant="outline" className="w-fit">
        Ver más reseñas
      </Button>

      <div className="flex items-center gap-4 w-full max-w-4xl xl:max-w-6xl mx-auto">
        <Button
          onClick={prevSlide}
          variant="outline"
          className="rounded-full transition-all duration-200 hover:scale-110 flex-shrink-0"
          aria-label="Anterior"
        >
          <ChevronLeft size={24} />
        </Button>
        <div className="flex-1 overflow-hidden pb-10">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-1/3 flex-shrink-0 px-1 xl:px-2">
                <CardTestimonials
                  name={testimonial.name}
                  city={testimonial.city}
                  testimonial={testimonial.testimonial}
                  rating={testimonial.rating}
                />
              </div>
            ))}
          </div>
        </div>
        <Button
          onClick={nextSlide}
          variant="outline"
          className="rounded-full transition-all duration-200 hover:scale-110 flex-shrink-0"
          aria-label="Siguiente"
        >
          <ChevronRight size={24} />
        </Button>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {[...Array(testimonials.length - 2)].map((_, index) => (
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
  );
};

export default TestimonialsSection;
