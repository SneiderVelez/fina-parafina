import { Button } from "./ui/button";
import CardCategories from "./ui/card-categories";

const CategoriesSection = () => {
  return (
    <section className="w-10/12 mx-auto flex flex-col gap-16 my-16">
      <h1 className="font-jakarta text-[48px] leading-[54px] text-gray-700">
        Todo lo que necesitas{" "}
        <span className="font-pacifico text-[64px]">para crear</span>
      </h1>
      <div className="grid grid-cols-3 gap-x-8 gap-y-8 col-span-2">
        <CardCategories
          icon={"/image/icon-candle.png"}
          title="Ceras y parafinas"
          description="Parafinas de primera calidad para bases perfectas"
        />
        <CardCategories
          icon={"/image/icon-skein-of-yarn.png"}
          title="Pabilos"
          description="Pabilos de todos los tipos y grosores"
        />
        <CardCategories
          icon={"/image/icon-aroma.png"}
          title="Aromas y fragancias"
          description="Fragancias nacionales e importadas para cada ocasión"
        />
        <CardCategories
          icon={"/image/icon-mold.png"}
          title="Moldes"
          description="Moldes de silicona y aluminio en múltiples diseños"
        />
        <CardCategories
          icon={"/image/icon-paint-palette.png"}
          title="Colorantes"
          description="Colorantes líquidos y en polvo para todos los tonos"
        />
        <CardCategories
          icon={"/image/icon-bottle.png"}
          title="Recipientes"
          description="Recipientes, herramientas y todo lo que necesitas"
        />
      </div>
      <div className="flex justify-center">
        <Button size="lg">Ver todas las categorías</Button>
      </div>
    </section>
  );
};

export default CategoriesSection;
