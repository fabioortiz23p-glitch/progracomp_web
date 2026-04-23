import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#5f2d82] px-6 py-12 text-white">
      <div className="mx-auto grid w-full gap-8 md:w-fit md:grid-cols-[570px_280px]">
        <div>
          <div className="flex items-center gap-3 sm:gap-4">
            <Image
              src="/brand/logo-pa.png"
              alt="Logo Programa de Acompañamiento"
              width={64}
              height={64}
              className="h-12 w-12 rounded-full sm:h-16 sm:w-16"
              unoptimized
            />

            <div className="min-w-0">
              <h3 className="text-lg font-semibold sm:text-xl">
                Programa de Acompañamiento
              </h3>
              <p className="mt-1 text-sm text-[#efe6f7]">
                Ingeniería Industrial | Universidad de los Andes
              </p>
            </div>
          </div>

          <p className="mt-5 max-w-xl text-sm leading-7 text-[#efe6f7]">
            Espacio de apoyo entre pares para estudiantes de primer semestre de
            Ingeniería Industrial, enfocado en acompañamiento académico,
            integración y adaptación a la vida universitaria.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-[220px_1fr] md:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#e8d9f5]">
                Contacto
              </p>

              <a
                href="mailto:progracomp@uniandes.edu.co"
                className="mt-2 block break-all text-sm text-white underline underline-offset-2 hover:text-[#efe6f7]"
              >
                progracomp@uniandes.edu.co
              </a>

              <a
                href="mailto:f.ortizp@uniandes.edu.co"
                className="mt-2 block break-all text-sm text-white underline underline-offset-2 hover:text-[#efe6f7]"
              >
                f.ortizp@uniandes.edu.co
              </a>
            </div>

            <div>
              <div className="inline-flex rounded-2xl bg-white/10 px-4 py-3 backdrop-blur">
                <Image
                  src="/brand/logo-uniandes-industrial.png"
                  alt="Universidad de los Andes - Departamento de Ingeniería Industrial"
                  width={320}
                  height={88}
                  className="h-auto w-full max-w-[260px] sm:max-w-[320px]"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>

        <div className="md:ml-36">
          <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#e8d9f5]">
            Navegación
          </h4>

          <div className="mt-4 flex flex-col gap-2 text-sm text-[#f5eefb]">
            <a href="#programa" className="hover:text-white">
              Qué es el programa
            </a>
            <a href="#ventajas" className="hover:text-white">
              Ventajas
            </a>
            <a href="#dirigido" className="hover:text-white">
              A quién va dirigido
            </a>
            <a href="#que-se-hace" className="hover:text-white">
              Qué se hace
            </a>
            <a href="#calificacion" className="hover:text-white">
              Calificación
            </a>
            <a href="#equipo" className="hover:text-white">
              Nuestro equipo
            </a>
            <a href="#faq" className="hover:text-white">
              Preguntas frecuentes
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}