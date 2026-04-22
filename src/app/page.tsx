import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QueEs from "@/components/QueEs";
import Ventajas from "@/components/Ventajas";
import DirigidoA from "@/components/DirigidoA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <QueEs />
        <Ventajas />
        <DirigidoA />
      </main>
      <Footer />
    </>
  );
}
