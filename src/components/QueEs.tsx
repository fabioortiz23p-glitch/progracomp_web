import { queEsContent } from "@/data/content";

export default function QueEs() {
  return (
    <section id="programa" className="bg-white px-6 py-20 text-black">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-gray-500">
            Programa
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            {queEsContent.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            {queEsContent.text}
          </p>
        </div>
      </div>
    </section>
  );
}