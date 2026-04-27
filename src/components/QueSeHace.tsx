"use client";

import { useState } from "react";
import { queSeHaceContent } from "@/data/content";

export default function QueSeHace() {
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const toggleActive = (index: number) => {
    setActiveIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section
      id="que-se-hace"
      className="bg-[#efe6f7] px-6 py-20 text-[#341a4d]"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-[#8f63b8]">
            Actividades
          </p>

          <h2 className="text-3xl font-bold text-[#5f2d82] md:text-4xl">
            {queSeHaceContent.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#5c4370]">
            {queSeHaceContent.intro}
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {queSeHaceContent.items.map((item, index) => {
            const isActive = activeIndexes.includes(index);
            const isOpen = hoveredIndex === index || isActive;

            return (
              <button
                key={item}
                type="button"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onFocus={() => setHoveredIndex(index)}
                onBlur={() => setHoveredIndex(null)}
                onClick={() => toggleActive(index)}
                aria-expanded={isOpen}
                className="group relative min-h-[170px] overflow-hidden rounded-2xl border border-[#e2d3f0] bg-white p-6 text-left shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#caaee3] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#8f63b8]/40"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-[#8f63b8] to-[#7b4faa] transition-opacity duration-300 ${
                    isOpen ? "opacity-100" : "opacity-0"
                  }`}
                />

                <div className="relative flex h-full min-h-[120px] items-center justify-center">
                  <span
                    className={`text-5xl font-bold transition-all duration-300 ${
                      isOpen
                        ? "scale-90 opacity-0"
                        : "scale-100 text-[#8f63b8] opacity-100"
                    }`}
                  >
                    {index + 1}
                  </span>

                  <p
                    className={`absolute inset-0 flex items-center justify-center text-center text-base leading-7 transition-all duration-300 ${
                      isOpen
                        ? "translate-y-0 px-2 text-white opacity-100"
                        : "translate-y-2 px-2 text-white opacity-0"
                    }`}
                  >
                    {item}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}