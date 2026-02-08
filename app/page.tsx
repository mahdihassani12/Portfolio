import About from "@/components/Home/About";
import Hero from "@/components/Home/Hero";
import InfoStrip from "@/components/Home/InfoStripe";
import Services from "@/components/Home/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <InfoStrip />
      <Services />
      <About />
    </main>
  );
}
