import { teamMembers } from "@/data/team";

export default function Equipo() {
  return (
    <section id="equipo" className="bg-gray-50 px-6 py-20 text-black">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-gray-500">
          Equipo
        </p>

        <h2 className="text-3xl font-bold md:text-4xl">Nuestro equipo</h2>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-700">
          El Programa de Acompañamiento 2026-10 cuenta con un equipo conformado
          por un asistente graduado y monitores que acompañan a los estudiantes
          de primer semestre en su adaptación académica y universitaria.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.email}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-black text-lg font-semibold text-white">
                {member.name.charAt(0)}
              </div>

              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="mt-2 text-gray-600">{member.role}</p>
              <a
                href={`mailto:${member.email}`}
                className="mt-4 inline-block text-sm text-black underline"
              >
                {member.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}