import { queEsContent } from "@/data/content";
import Carrusel from "@/components/Carrusel";

export default function QueEs() {
  const images: string[] = [
    // "/images/programa/programa-1.jpg",
    // "/images/programa/programa-2.jpg",
    // "/images/programa/programa-3.jpg",
  ];

  return (
    <section
      id="programa"
      className="bg-[#faf7fd] px-6 py-20 text-[#341a4d]"
    >
      <div className="mx-auto max-w-6xl">

        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">

          {/* Texto a la izquierda */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-[#8f63b8]">
              Programa
            </p>

            <h2 className="text-3xl font-bold text-[#5f2d82] md:text-4xl">
              {queEsContent.title}
            </h2>

            <p className="mt-6 text-justify text-lg leading-8 text-[#5c4370]">
              {queEsContent.text}
            </p>
          </div>

          {/* Carrusel pequeño a la derecha */}
          <div className="w-full max-w-sm justify-self-end">
            <Carrusel
              images={images}
              altPrefix="Programa de Acompañamiento"
            />
          </div>

        </div>

      </div>
    </section>
  );
}