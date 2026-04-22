import Image from "next/image";
import { teamMembers } from "@/data/team";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function Equipo() {
  const assistant = teamMembers.find((member) =>
    member.role.includes("Asistente Graduado")
  );

  const monitors = teamMembers.filter(
    (member) => !member.role.includes("Asistente Graduado")
  );

  return (
    <section id="equipo" className="bg-[#faf7fd] px-6 py-20 text-[#341a4d]">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.15em] text-[#8f63b8]">
          Equipo
        </p>

        <h2 className="text-center text-3xl font-bold text-[#5f2d82] md:text-4xl">
          Nuestro equipo
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-center text-lg leading-8 text-[#5c4370]">
          El Programa de Acompañamiento 2026-10 cuenta con un equipo conformado
          por un asistente graduado y monitores que acompañan a los estudiantes
          de primer semestre en su adaptación académica y universitaria.
        </p>

        {assistant && (
          <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-[#e2d3f0] bg-white p-8 shadow-sm">
            <div className="flex flex-col items-center text-center">
              {assistant.image ? (
                <div className="relative h-44 w-44 overflow-hidden rounded-full border-4 border-[#efe6f7]">
                  <Image
                    src={assistant.image}
                    alt={`Foto de ${assistant.name}`}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              ) : (
                <div className="flex h-44 w-44 items-center justify-center rounded-full bg-[#8f63b8] text-4xl font-bold text-white">
                  {getInitials(assistant.name)}
                </div>
              )}

              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.15em] text-[#8f63b8]">
                Asistente Graduado
              </p>

              <h3 className="mt-2 text-2xl font-bold text-[#5f2d82]">
                {assistant.name}
              </h3>

              <p className="mt-2 text-[#5c4370]">{assistant.role}</p>

              <a
                href={`mailto:${assistant.email}`}
                className="mt-4 inline-block text-sm font-medium text-[#5f2d82] underline"
              >
                {assistant.email}
              </a>
            </div>
          </div>
        )}

        <div className="mt-14">
          <h3 className="text-center text-2xl font-bold text-[#5f2d82]">
            Monitores
          </h3>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {monitors.map((member) => (
              <div
                key={member.email}
                className="rounded-3xl border border-[#e2d3f0] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex justify-center">
                  {member.image ? (
                    <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-[#efe6f7]">
                      <Image
                        src={member.image}
                        alt={`Foto de ${member.name}`}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                  ) : (
                    <div className="flex h-28 w-28 items-center justify-center rounded-full bg-[#8f63b8] text-2xl font-bold text-white">
                      {getInitials(member.name)}
                    </div>
                  )}
                </div>

                <div className="mt-5 text-center">
                  <h4 className="text-lg font-semibold text-[#5f2d82]">
                    {member.name}
                  </h4>
                  <p className="mt-2 text-sm text-[#6f5685]">{member.role}</p>
                  <a
                    href={`mailto:${member.email}`}
                    className="mt-4 inline-block text-sm text-[#5f2d82] underline"
                  >
                    {member.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}