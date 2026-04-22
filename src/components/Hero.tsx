import { heroContent } from "@/data/content";

export default function Hero() {
  return (
    <section id="inicio" className="bg-black px-6 py-24 text-white md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-gray-400">
            Ingeniería Industrial · Uniandes
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            {heroContent.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-300 md:text-xl">
            {heroContent.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#programa"
              className="rounded-xl bg-white px-6 py-3 text-center font-medium text-black transition hover:bg-gray-200"
            >
              {heroContent.primaryButton}
            </a>

            <a
              href="#dirigido"
              className="rounded-xl border border-white/20 px-6 py-3 text-center font-medium text-white transition hover:bg-white/10"
            >
              {heroContent.secondaryButton}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}