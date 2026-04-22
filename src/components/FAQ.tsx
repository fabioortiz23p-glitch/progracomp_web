import { faqs } from "@/data/faq";

export default function FAQ() {
  return (
    <section id="faq" className="bg-white px-6 py-20 text-black">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-gray-500">
          FAQ
        </p>

        <h2 className="text-3xl font-bold md:text-4xl">
          Preguntas frecuentes
        </h2>

        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-5"
            >
              <summary className="cursor-pointer text-lg font-semibold">
                {faq.question}
              </summary>
              <p className="mt-4 leading-7 text-gray-700">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}