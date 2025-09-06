import Hero from "@/components/home/hero";
import CategoriesSection from "@/components/home/categories-section";
import ProductsSection from "@/components/home/products-section";
import KitSection from "@/components/home/kit-section";
import TestimonialsSection from "@/components/home/testimonials-section";

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
