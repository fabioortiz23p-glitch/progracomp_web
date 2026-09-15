"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ImageCarouselProps = {
  images: string[];
  altPrefix?: string;
};

export default function ImageCarousel({
  images,
  altPrefix = "Programa de Acompañamiento",
}: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (images.length <= 1 || paused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [images.length, paused]);

  const previous = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const next = () => {
    setCurrent((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  if (images.length === 0) {
    return (
      <div className="flex aspect-[4/3] w-full items-center justify-center rounded-3xl border-2 border-dashed border-[#d8c5e8] bg-white/60 shadow-sm">
        <div className="px-8 text-center">
          <p className="text-lg font-semibold text-[#5f2d82]">
            Galería de imágenes
          </p>

          <p className="mt-2 text-sm text-[#806b91]">
            Las fotografías se mostrarán aquí.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-black shadow-xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image}
            alt={`${altPrefix} ${index + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {images.length > 1 && (
        <>
          <button
            onClick={previous}
            aria-label="Imagen anterior"
            className="absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-3xl text-[#5f2d82] shadow-md transition hover:scale-110"
          >
            ‹
          </button>

          <button
            onClick={next}
            aria-label="Siguiente imagen"
            className="absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-3xl text-[#5f2d82] shadow-md transition hover:scale-110"
          >
            ›
          </button>

          <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                aria-label={`Ir a imagen ${index + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  current === index
                    ? "bg-white"
                    : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}