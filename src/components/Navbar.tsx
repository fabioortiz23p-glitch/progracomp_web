import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-[#8f63b8]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="flex items-center gap-4 text-white">
          <Image
            src="/brand/logo-uniandes-industrial.png"
            alt="Universidad de los Andes - Departamento de Ingeniería Industrial"
            width={170}
            height={40}
            className="h-auto w-auto max-w-[170px]"
            unoptimized
          />

          <div className="h-10 w-px bg-white/25" />

          <Image
            src="/brand/logo-pa.png"
            alt="Logo Programa de Acompañamiento"
            width={42}
            height={42}
            className="rounded-full"
            unoptimized
          />

          <span className="text-lg font-semibold">ProgrAcomp</span>
        </a>

        <nav className="hidden gap-6 text-sm text-white md:flex">
          <a href="#programa" className="transition hover:text-[#efe6f7]">
            Programa
          </a>
          <a href="#ventajas" className="transition hover:text-[#efe6f7]">
            Ventajas
          </a>
          <a href="#dirigido" className="transition hover:text-[#efe6f7]">
            Dirigido a
          </a>
          <a href="#que-se-hace" className="transition hover:text-[#efe6f7]">
            Qué se hace
          </a>
          <a href="#calificacion" className="transition hover:text-[#efe6f7]">
            Calificación
          </a>
          <a href="#equipo" className="transition hover:text-[#efe6f7]">
            Equipo
          </a>
          <a href="#faq" className="transition hover:text-[#efe6f7]">
            FAQ
          </a>
        </nav>
      </div>
    </header>
  );
}