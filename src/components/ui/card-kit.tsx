import { Badge } from "./badge";
import { Button } from "./button";
import Image from "next/image";

interface CardKitProps {
  image: string;
  name: string;
  description: string;
  price: string;
  buttonText?: string;
  variant?: "light" | "dark";
  level?: string;
  techniques?: string;
}

const CardKit = ({
  image,
  name,
  description,
  price,
  buttonText = "Ver detalles",
  variant = "light",
  level = "NIVEL BÁSICO",
  techniques = "3 TÉCNICAS",
}: CardKitProps) => {
  const bgColor = variant === "light" ? "bg-slate-100" : "bg-gray-100";

  return (
    <div
      className={`${bgColor} rounded-3xl shadow-customBottom flex flex-col transition-all duration-300 h-[400px] xl:h-[500px] cursor-pointer relative overflow-hidden`}
    >
      <div className="flex flex-col lg:flex-row h-full">
        <section className="relative lg:w-3/5 h-full flex-shrink-0">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover object-center"
          />
        </section>

        <section className="bg-gradient-to-br from-brand-quaternary via-gray-400 to-brand-quaternary flex-1 p-4 lg:p-6 flex flex-col justify-between relative">
          <div className="flex flex-col gap-3 lg:gap-4">
            <div className="text-center lg:text-left">
              <h3 className="font-jakarta text-lg lg:text-xl xl:text-2xl font-bold text-black leading-tight">
                {name}
              </h3>
              {level && (
                <p className="font-lato text-sm lg:text-base text-black mt-1">
                  ({level})
                </p>
              )}
            </div>
            <p className="font-lato text-sm lg:text-base text-gray-700 leading-relaxed text-center lg:text-left">
              {description}
            </p>
          </div>
          <div className="flex flex-col  items-center justify-between gap-3 mt-4">
            <div className="text-center lg:text-left">
              <span className="font-jakarta text-xl lg:text-2xl font-bold text-black">
                {price}
              </span>
            </div>
            <Button className="w-full">{buttonText}</Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CardKit;
