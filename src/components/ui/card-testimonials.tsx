import Image from "next/image";
import { Camera, MapPin, MessageCircle } from "lucide-react";

interface CardTestimonialsProps {
  name: string;
  city: string;
  testimonial: string;
  rating?: number;
}

const CardTestimonials = ({
  name,
  city,
  testimonial,
  rating = 5,
}: CardTestimonialsProps) => {
  return (
    <div className="bg-brand-tertiary rounded-2xl border border-gray-300 hover:shadow-xl transition-all duration-300  max-w-md mx-auto h-fit">
      <div className="flex items-center justify-end gap-1 bg-gradient-to-br from-gray-500 to-gray-700 px-6 py-3 rounded-t-2xl">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-4 h-4 ${
              index < rating ? "text-yellow-400" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <section className="flex flex-col gap-4 p-6">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-gray-500 to-gray-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
            <MessageCircle className="w-4 h-4 text-white" />
          </div>
          <div className="flex-1">
            <p className="text-gray-700 leading-relaxed mb-3">{testimonial}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-gradient-to-br from-gray-500 to-gray-700 rounded-full flex items-center justify-center">
            <MapPin className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="font-jakarta font-semibold text-black">{name}</h3>
            <p className="text-sm text-gray-600">{city}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardTestimonials;
