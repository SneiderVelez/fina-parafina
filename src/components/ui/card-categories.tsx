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
  const bgColor = variant === "light" ? "" : "bg-gray-100";

  return (
    <div
      className={`${bgColor} rounded-2xl p-2 xl:p-6 justify-center items-center hover:shadow-custom flex flex-col gap-2 hover:scale-105 transition-all duration-300 h-full `}
    >
      <div className=" rounded-full flex items-center justify-center">
        <Image
          src={icon}
          alt={title}
          width={60}
          height={60}
          className="object-contain"
        />
      </div>

      <h3 className="font-jakarta text-base xl:text-2xl font-bold text-gray-700 text-center">
        {title}
      </h3>
      <p className=" text-gray-600 text-xs xl:text-lg leading-4 xl:leading-5 text-center">
        {description}
      </p>
      <Button variant="ghost" size="sm" className="mt-auto">
        {buttonText}
      </Button>
    </div>
  );
};

export default CardCategories;
