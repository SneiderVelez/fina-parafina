import { Button } from "./button";
import Image from "next/image";

interface CardCategoriesProps {
  icon: string;
  title: string;
  description: string;
  buttonText?: string;
  variant?: "light" | "dark";
}

const CardCategories = ({
  icon,
  title,
  description,
  buttonText = "Ver mas →",
  variant = "light",
}: CardCategoriesProps) => {
  const bgColor = variant === "light" ? "bg-brand-tertiary" : "bg-gray-100";

  return (
    <div
      className={`${bgColor} rounded-2xl p-6 hover:shadow-custom flex flex-col gap-2 hover:scale-105 transition-all duration-300 `}
    >
      <div className=" rounded-full flex items-center justify-between">
        <Image
          src={icon}
          alt={title}
          width={60}
          height={60}
          className="object-contain"
        />
        <Button variant="ghost">{buttonText}</Button>
      </div>

      <h3 className="font-jakarta text-2xl font-bold text-gray-700">{title}</h3>
      <p className=" text-gray-600 text-lg leading-relaxed">{description}</p>
    </div>
  );
};

export default CardCategories;
