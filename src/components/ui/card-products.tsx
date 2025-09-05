import { Button } from "./button";
import Image from "next/image";

interface CardProductsProps {
  image_product: string;
  title: string;
  description: string;
  price: string;
  buttonText?: string;
  variant?: "light" | "dark";
}

const CardProducts = ({
  image_product,
  title,
  description,
  price,
  buttonText = "Ver mas →",
  variant = "light",
}: CardProductsProps) => {
  const bgColor = variant === "light" ? "bg-brand-tertiary" : "bg-gray-100";

  return (
    <div
      className={`${bgColor} rounded-2xl p-3 xl:p-6 hover:shadow-custom flex flex-col gap-2 hover:scale-105 transition-all duration-300 `}
    >
      <section>
        <Image
          src={image_product}
          alt={title}
          width={60}
          height={60}
          className="object-contain"
        />
      </section>
      <section className="bg-gradient-to-tr via-white from-gray-700">
        <h3 className="font-jakarta text-lg xl:text-2xl font-bold text-gray-700">
          {title}
        </h3>
        <p className=" text-gray-600 text-sm xl:text-lg leading-4 xl:leading-relaxed">
          {description}
        </p>
      </section>
      <Button variant="ghost">{buttonText}</Button>
    </div>
  );
};

export default CardProducts;
