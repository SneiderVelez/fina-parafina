import { Badge } from "@/components/ui/badge";
import CardProducts from "@/components/ui/card-products";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

const CatalogPage = () => {
  const products = [
    {
      image_product: "/image/ceraSoya.jpg",
      title: "Cera de Soya 100% Natural",
      price: "$27.000 COP",
      type: "APF (Alto Punto de Fusión)",
      melting_point: "55-56 °C",
      weight: "1kg",
      buttonText: "Ver detalle",
      variant: "light" as const,
    },
    {
      image_product: "/image/colorantes.jpg",
      title: "Colorantes Líquidos",
      description: "No manchan moldes",
      price: "$13,500 COP",
      type: "Líquidos liposolubles",
      weight: "30kg",
      buttonText: "Ver detalle",
      variant: "light" as const,
    },
    {
      image_product: "/image/aroma.jpg",
      title: "Aromas Premium",
      price: "$11,000 COP",
      type: "Premium para velas/jabones/masajes",
      base: "Aceite",
      weight: "1 onza",
      buttonText: "Ver detalle",
      variant: "light" as const,
    },
  ];

  const repeatedProducts = Array.from({ length: 12 }, (_, index) => ({
    ...products[index % products.length],
    id: index,
  }));

  return (
    <div>
      <section
        className="h-[60vh]  2xl:h-[75vh] bg-cover bg-bottom rounded-b-[80px] bg-no-repeat relative "
        style={{
          backgroundImage: "url('/image/banner-catalogo.jpg')",
        }}
      >
        <h1 className="font-jakarta text-[30px] xl:text-[62px] xl:leading-[72px] leading-[30px]  text-brand-main absolute bottom-20 left-20">
          Tu inspiración empieza <br />
          con los mejores insumos
        </h1>
      </section>
      <section className="flex flex-col gap-4 mt-7">
        <div className="w-4/12 mx-auto ">
          <Input
            placeholder="Buscar insumo"
            variant="search"
            suffix={
              <figure className=" h-auto bg-gray-700 rounded-full px-3 py-1 -mr-2 ">
                <SearchIcon className="text-white" />
              </figure>
            }
          />
        </div>
        <div className="flex gap-2 justify-center items-center">
          <Badge size="sm" type="square">
            Ceras
          </Badge>
          <Badge size="sm" type="square">
            Mechas
          </Badge>
          <Badge size="sm" type="square">
            Fragancias
          </Badge>
          <Badge size="sm" type="square">
            Colorantes
          </Badge>
          <Badge size="sm" type="square">
            Moldes
          </Badge>
        </div>
      </section>
      <section className="grid grid-cols-3 2xl:grid-cols-4 gap-6 xl:gap-8 2xl:gap-10 my-16 w-9/12 2xl:w-10/12 mx-auto  ">
        {repeatedProducts.map((product) => (
          <CardProducts
            key={product.id}
            image_product={product.image_product}
            title={product.title}
            description={product.description}
            price={product.price}
            type={product.type}
            melting_point={product.melting_point}
            base={product.base}
            weight={product.weight}
            buttonText={product.buttonText}
            variant={product.variant}
          />
        ))}
      </section>
    </div>
  );
};

export default CatalogPage;
