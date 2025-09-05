import CardProducts from "./ui/card-products";

const ProductsSection = () => {
  return (
    <div>
      <CardProducts
        image_product={"../../public/image/logo.svg"}
        title=""
        description=""
        price=""
        buttonText="Ver mas →"
        variant="light"
      ></CardProducts>
    </div>
  );
};
export default ProductsSection;
