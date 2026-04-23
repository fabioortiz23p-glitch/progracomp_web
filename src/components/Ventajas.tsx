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
              className="group relative overflow-hidden rounded-2xl border border-[#e2d3f0] bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#caaee3] hover:shadow-xl"
            >
              <div className="absolute left-0 top-0 h-1 w-full scale-x-0 origin-left bg-[#8f63b8] transition-transform duration-300 group-hover:scale-x-100" />
              <p className="text-base leading-7 text-[#5c4370] transition-colors duration-300 group-hover:text-[#4d2c67]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}