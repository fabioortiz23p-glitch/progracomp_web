import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QueEs from "@/components/QueEs";
import Ventajas from "@/components/Ventajas";
import DirigidoA from "@/components/DirigidoA";
import QueSeHace from "@/components/QueSeHace";
import Calificacion from "@/components/Calificacion";
import Equipo from "@/components/Equipo";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-[#faf7fd]">
        <Hero />
        <QueEs />
        <Ventajas />
        <DirigidoA />
        <QueSeHace />
        <Calificacion />
        <Equipo />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
