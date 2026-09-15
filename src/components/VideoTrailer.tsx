"use client";

import { useState } from "react";

export default function VideoTrailer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="bg-[#efe6f7] px-6 pt-27 pb-20">
        <div className="mx-auto max-w-6xl">

          <div className="mb-10 text-center">
            <p className="mb-8 text-center text-xl font-semibold uppercase tracking-[0.15em] text-[#8f63b8] md:text-2xl">
            VIVE LA EXPERIENCIA
            </p>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="group relative mx-auto block aspect-video w-full max-w-5xl overflow-hidden rounded-3xl shadow-xl"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            >
              <source
                src="/videos/acompanamiento.mp4"
                type="video/mp4"
              />
            </video>

            <div className="absolute inset-0 bg-black/30 transition duration-300 group-hover:bg-black/40" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-3xl text-[#5f2d82] shadow-lg transition duration-300 group-hover:scale-110">
                ▶
              </div>

              <h3 className="mt-5 text-2xl font-semibold">
                Conoce Acompañamiento
              </h3>

              <p className="mt-2 text-sm">
                Ver video completo
              </p>
            </div>
          </button>

        </div>
      </section>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
          onClick={() => setOpen(false)}
        >
          <button
            onClick={() => setOpen(false)}
            className="absolute right-7 top-5 text-5xl text-white"
            aria-label="Cerrar video"
          >
            ×
          </button>

          <div
            className="w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              controls
              autoPlay
              className="aspect-video w-full rounded-2xl bg-black"
            >
              <source
                src="/videos/acompanamiento.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      )}
    </>
  );
}