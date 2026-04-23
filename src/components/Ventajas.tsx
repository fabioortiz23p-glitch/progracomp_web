import { ventajasContent } from "@/data/content";

export default function Ventajas() {
  return (
    <section id="ventajas" className="bg-[#efe6f7] px-6 py-20 text-[#341a4d]">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-[#8f63b8]">
          Ventajas
        </p>

        <h2 className="text-3xl font-bold text-[#5f2d82] md:text-4xl">
          ¿Cuáles son las ventajas?
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {ventajasContent.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-[#e2d3f0] bg-white p-6 shadow-sm"
            >
              <p className="text-base leading-7 text-[#5c4370]">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}