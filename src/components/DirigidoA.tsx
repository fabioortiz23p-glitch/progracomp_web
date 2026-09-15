import { dirigidoAContent } from "@/data/content";
import Carrusel from "@/components/Carrusel";

export default function DirigidoA() {
  const images: string[] = [
    // "/images/publico/publico-1.jpg",
    // "/images/publico/publico-2.jpg",
    // "/images/publico/publico-3.jpg",
  ];

  return (
    <section
      id="dirigido"
      className="bg-[#faf7fd] px-6 py-20 text-[#341a4d]"
    >
      <div className="mx-auto max-w-6xl">

        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-[#8f63b8]">
              Público objetivo
            </p>

            <h2 className="text-3xl font-bold text-[#5f2d82] md:text-4xl">
              {dirigidoAContent.title}
            </h2>

            <p className="mt-6 text-justify text-lg leading-8 text-[#5c4370]">
              {dirigidoAContent.text}
            </p>
          </div>

          <div className="w-full max-w-sm justify-self-end">
            <Carrusel
              images={images}
              altPrefix="Estudiantes del Programa de Acompañamiento"
            />
          </div>

        </div>

      </div>
    </section>
  );
}