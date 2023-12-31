import Hero from "@/components/home/hero";
import Offer from "@/components/home/offer";
import Portfolio from "@/components/home/portfolio";
import Services from "@/components/home/services";
import Testimonials from "@/components/home/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Portfolio />
      <Services />
      <Offer />
      <Testimonials />
    </>
  );
}
