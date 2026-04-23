import Image from "next/image";
import { heroContent } from "@/data/content";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="bg-gradient-to-br from-[#b998d8] via-[#a57ccc] to-[#8f63b8] px-6 py-20 text-white md:py-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[#f4ecfa]">
            Ingeniería Industrial | Universidad de los Andes
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            {heroContent.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#f8f3fc]">
            {heroContent.subtitle}
          </p>

          <div className="mt-8 flex flex-col items-center gap-8 sm:flex-row sm:justify-center">
            <a
              href="#programa"
              className="rounded-xl bg-white px-6 py-3 text-center font-medium text-[#5f2d82] transition hover:bg-[#efe6f7]"
            >
              {heroContent.primaryButton}
            </a>

            <a
              href="#equipo"
              className="rounded-xl border border-white/30 px-6 py-3 text-center font-medium text-white transition hover:bg-white/10"
            >
              Nuestro equipo
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 md:ml-50">
          <div className="rounded-[2rem] bg-white/15 p-6 shadow-2xl backdrop-blur">
            <Image
              src="/brand/logo-pa.png"
              alt="Logo Programa de Acompañamiento"
              width={280}
              height={280}
              className="rounded-full"
              unoptimized
            />
          </div>

          <div className="w-full max-w-[300px] rounded-2xl bg-white/10 px-4 py-3 backdrop-blur">
            <p className="text-center text-sm text-[#f8f3fc]">
              Acompañamiento académico, integración y adaptación a la vida
              universitaria
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}