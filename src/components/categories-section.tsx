import { Button } from "./ui/button";
import CardCategories from "./ui/card-categories";

const CategoriesSection = () => {
  return (
    <div className="bg-brand-main py-16">
      <section className="w-10/12  mx-auto flex flex-col gap-16 ">
        <h1 className="font-jakarta text-[20px] font-bold leading-[40px] xl:text-[30px] xl:leading-[54px] text-gray-700 text-center">
          Todo lo que necesitas para crear
        </h1>
        <div className="grid grid-cols-6 gap-3 ">
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
            title="Aromas"
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
      </section>
    </div>
  );
};

export default CategoriesSection;
