import { queSeHaceContent } from "@/data/content";

export default function QueSeHace() {
  return (
    <section id="que-se-hace" className="bg-white px-6 py-20 text-black">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-gray-500">
            Actividades
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            {queSeHaceContent.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            {queSeHaceContent.intro}
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {queSeHaceContent.items.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm"
            >
              <p className="text-base leading-7 text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}