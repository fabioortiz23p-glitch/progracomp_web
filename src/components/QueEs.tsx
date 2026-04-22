import { queEsContent } from "@/data/content";

export default function QueEs() {
  return (
    <section id="programa" className="bg-[#faf7fd] px-6 py-20 text-[#341a4d]">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-[#8f63b8]">
            Programa
          </p>

          <h2 className="text-3xl font-bold text-[#5f2d82] md:text-4xl">
            {queEsContent.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#5c4370]">
            {queEsContent.text}
          </p>
        </div>
      </div>
    </section>
  );
}