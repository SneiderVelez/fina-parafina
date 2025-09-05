import CardProducts from "./ui/card-products";

const ProductsSection = () => {
  return (
    <section className="bg-gradient-to-t from-brand-quinary via-brand-secondary  flex flex-col gap-8 pb-16">
      <div className="w-9/12 2xl:w-8/12 mx-auto my-16">
        <h1 className="font-jakarta text-[20px] font-bold leading-[40px] xl:text-[30px] xl:leading-[54px] text-gray-700 text-center">
          Favoritos de Nuestros Artesanos
        </h1>
        <section className="grid grid-cols-3 gap-6 xl:gap-8 2xl:gap-10 mt-16 ">
          <CardProducts
            image_product={"/image/ceraSoya.jpg"}
            title="Cera de Soya 100% Natural"
            price="$27.000 COP"
            type="APF (Alto Punto de Fusión)"
            melting_point="55-56 °C"
            weight="1kg"
            buttonText="Ver detalle"
            variant="light"
          ></CardProducts>
          <CardProducts
            image_product={"/image/colorantes.jpg"}
            title="Colorantes Líquidos"
            description="No manchan moldes"
            price="$13,500 COP"
            type="Líquidos liposolubles"
            weight="30kg"
            buttonText="Ver detalle"
            variant="light"
          ></CardProducts>
          <CardProducts
            image_product={"/image/aroma.jpg"}
            title=" Aromas Premium"
            price="$11,000 COP"
            type="Premium para velas/jabones/masajes"
            base="Aceite"
            weight="1 onza"
            buttonText="Ver detalle"
            variant="light"
          ></CardProducts>
        </section>
      </div>
    </section>
  );
};
export default ProductsSection;
