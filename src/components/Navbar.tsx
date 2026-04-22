export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="text-lg font-semibold text-white">
          ProgrAcomp
        </a>

        <nav className="hidden gap-6 text-sm text-white md:flex">
          <a href="#programa" className="transition hover:text-gray-300">
            Programa
          </a>
          <a href="#ventajas" className="transition hover:text-gray-300">
            Ventajas
          </a>
          <a href="#dirigido" className="transition hover:text-gray-300">
            Dirigido a
          </a>
          <a href="#que-se-hace" className="transition hover:text-gray-300">
            Qué se hace
          </a>
          <a href="#calificacion" className="transition hover:text-gray-300">
            Calificación
          </a>
          <a href="#equipo" className="transition hover:text-gray-300">
            Equipo
          </a>
          <a href="#faq" className="transition hover:text-gray-300">
            FAQ
          </a>
        </nav>
      </div>
    </header>
  );
}