import { calificacionContent } from "@/data/content";

export default function Calificacion() {
  return (
    <section id="calificacion" className="bg-gray-50 px-6 py-20 text-black">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-gray-500">
            Evaluación
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            {calificacionContent.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            {calificacionContent.intro}
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {calificacionContent.items.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <p className="text-base leading-7 text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}