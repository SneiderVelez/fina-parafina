import Hero from "@/components/hero";
import CategoriesSection from "@/components/categories-section";
import ProductsSection from "@/components/products-section";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <CategoriesSection />
        <ProductsSection />
      </main>
    </div>
  );
}
