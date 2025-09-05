import Hero from "@/components/hero";
import CategoriesSection from "@/components/categories-section";
import ProductsSection from "@/components/products-section";
import KitSection from "@/components/kit-section";
import TestimonialsSection from "@/components/testimonials-section";

export default function Home() {
  return (
    <main>
      <Hero />
      <CategoriesSection />
      <KitSection />
      <ProductsSection />
      <TestimonialsSection />
    </main>
  );
}
