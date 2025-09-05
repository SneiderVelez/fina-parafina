import { Badge } from "./badge";
import { Button } from "./button";
import Image from "next/image";

interface CardProductsProps {
  image_product: string;
  title: string;
  description?: string;
  price: string;
  type: string;
  melting_point?: string;
  base?: string;
  weight: string;
  buttonText?: string;
  variant?: "light" | "dark";
}

const CardProducts = ({
  image_product,
  title,
  description,
  type,
  melting_point,
  base,
  weight,
  price,
  buttonText = "Ver mas →",
  variant = "light",
}: CardProductsProps) => {
  const bgColor = variant === "light" ? "bg-brand-tertiary" : "bg-gray-100";

  return (
    <div
      className={`${bgColor} rounded-2xl hover:shadow-custom flex flex-col hover:scale-105 transition-all duration-300  h-full cursor-pointer`}
    >
      <section className="bg-brand-main rounded-t-2xl h-52 xl:h-64 2xl:h-72 relative overflow-hidden">
        <Image
          src={image_product}
          alt={title}
          fill
          className="object-cover object-center"
        />
        <Badge variant="secondary" className="absolute top-2 left-0">
          {price}
        </Badge>
      </section>
      <section className="bg-brand-tertiary text-gray-700 p-3 xl:p-4 rounded-b-2xl flex flex-col gap-2 flex-1">
        <h3 className="font-jakarta text-sm leading-5 xl:text-xl 2xl:text-2xl font-bold text-black ">
          {title}
        </h3>
        <div className="flex flex-col">
          <div className="flex gap-2 items-center">
            <h2 className="font-jakarta text-xs leading-5 xl:text-sm 2xl:text-base font-bold line-clamp-1 ">
              Tipo: <span className="font-normal">{type}</span>
            </h2>
          </div>
          {melting_point && (
            <div className="flex gap-2 items-center">
              <h2 className="font-jakarta text-xs leading-5 xl:text-sm 2xl:text-base font-bold ">
                Punto de fusión:{" "}
                <span className="font-normal">{melting_point}</span>
              </h2>
            </div>
          )}
          {base && (
            <div className="flex gap-2 items-center">
              <h2 className="font-jakarta text-xs leading-5 xl:text-sm 2xl:text-base font-bold ">
                Base: <span className="font-normal">{base}</span>
              </h2>
            </div>
          )}
          {description && (
            <div className="flex gap-2 items-center">
              <h2 className="font-jakarta text-xs leading-5 xl:text-sm 2xl:text-base font-bold ">
                Características:{" "}
                <span className="font-normal">{description}</span>
              </h2>
            </div>
          )}
          <div className="flex gap-2 items-center">
            <h2 className="font-jakarta text-xs leading-5 xl:text-sm 2xl:text-base font-bold ">
              Peso: <span className="font-normal">{weight}</span>
            </h2>
          </div>
        </div>
        <footer className="flex gap-2 mt-auto pt-3">
          {/* <Button variant="outline" size="sm">
            Ver detalle
          </Button> */}
          <Button variant="outline" className="w-full">
            Añadir al carrito
          </Button>
        </footer>
      </section>
    </div>
  );
};

export default CardProducts;
