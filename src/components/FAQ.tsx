import { faqs } from "@/data/faq";

export default function FAQ() {
  return (
    <section id="faq" className="bg-[#faf7fd] px-6 py-20 text-[#341a4d]">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-[#8f63b8]">
          FAQ
        </p>

        <h2 className="text-3xl font-bold text-[#5f2d82] md:text-4xl">
          Preguntas frecuentes
        </h2>

        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="rounded-2xl border border-[#e2d3f0] bg-white p-5 shadow-sm"
            >
              <summary className="cursor-pointer text-lg font-semibold text-[#5f2d82]">
                {faq.question}
              </summary>
              <p className="mt-4 leading-7 text-[#5c4370]">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}