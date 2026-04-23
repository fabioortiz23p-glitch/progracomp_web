import { calificacionContent } from "@/data/content";

function renderHighlightedText(text: string, isLast: boolean) {
  const parts = text.split(/\[\[(.*?)\]\]/g);

  return parts.map((part, index) =>
    index % 2 === 1 ? (
      <strong
        key={index}
        className={isLast ? "font-bold text-white" : "font-bold text-[#341a4d]"}
      >
        {part}
      </strong>
    ) : (
      <span key={index}>{part}</span>
    )
  );
}

export default function Calificacion() {
  return (
    <section
      id="calificacion"
      className="bg-[#faf7fd] px-6 py-20 text-[#341a4d]"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-[#8f63b8]">
            Evaluación
          </p>

          <h2 className="text-3xl font-bold text-[#5f2d82] md:text-4xl">
            {calificacionContent.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#5c4370]">
            {calificacionContent.intro}
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {calificacionContent.items.map((item, index) => {
            const isLast = index === calificacionContent.items.length - 1;

            return (
              <div
                key={item}
                className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl flex items-center justify-center ${
                  isLast
                    ? "w-full border border-[#8f63b8] bg-gradient-to-r from-[#8f63b8] to-[#7b4faa] shadow-md md:col-span-2 md:w-[53%] md:justify-self-center"
                    : "border border-[#e2d3f0] bg-white shadow-sm hover:border-[#caaee3]"
                }`}
              >
                <div
                  className={`absolute left-0 top-0 h-1 w-full scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 ${
                    isLast ? "bg-white/80" : "bg-[#8f63b8]"
                  }`}
                />

                <p
                  className={`text-center text-base leading-8 transition-colors duration-300 ${
                    isLast
                      ? "font-medium text-white group-hover:text-white"
                      : "text-[#5c4370] group-hover:text-[#4d2c67]"
                  }`}
                >
                  {renderHighlightedText(item, isLast)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}