import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-[#8f63b8]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between pl-2 pr-3 py-3 sm:px-6 sm:py-4">
        <a
          href="#inicio"
          className="-ml-1 flex min-w-0 items-center gap-2 text-white sm:ml-0 sm:gap-4"
        >
          <Image
            src="/brand/logo-uniandes-industrial.png"
            alt="Universidad de los Andes - Departamento de Ingeniería Industrial"
            width={170}
            height={40}
            className="h-auto w-auto max-w-[110px] sm:max-w-[140px] md:max-w-[170px]"
            unoptimized
          />

          <div className="h-8 w-px shrink-0 bg-white/25 sm:h-10" />

          <Image
            src="/brand/logo-pa.png"
            alt="Logo Programa de Acompañamiento"
            width={42}
            height={42}
            className="h-8 w-8 shrink-0 rounded-full sm:h-[42px] sm:w-[42px]"
            unoptimized
          />

          <span className="whitespace-nowrap text-base font-semibold sm:text-lg">
            ProgrAcomp
          </span>
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