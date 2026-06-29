import { ArrowRight } from "lucide-react";
import Link from "next/link";

const demos = [
  {
    title: "Clínicas y estética",
    description:
      "Demo para dentistas, fisioterapeutas, clínicas de belleza y servicios médicos.",
    href: "/demos/medical",
    accent: "from-cyan-400 to-blue-500",
  },
  {
    title: "Automotriz y hogar",
    description:
      "Demo para talleres, detailing, instaladores de climas y servicios técnicos.",
    href: "/demos/automotive",
    accent: "from-orange-400 to-red-500",
  },
  {
    title: "Turismo y rentas",
    description:
      "Demo para tours, rentadoras de autos, departamentos y experiencias locales.",
    href: "/demos/tourism",
    accent: "from-emerald-400 to-teal-500",
  },
];

export default function DemoCards() {
  return (
    <section id="demos" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-12 max-w-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-300">
          Demos por sector
        </p>

        <h2 className="text-4xl font-bold md:text-5xl">
          Elige una demo base y la adaptamos a tu negocio.
        </h2>

        <p className="mt-5 text-lg text-slate-300">
          Cada demo se puede personalizar con colores, logo, imágenes, servicios
          y WhatsApp de la empresa.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {demos.map((demo) => (
          <Link
            key={demo.title}
            href={demo.href}
            className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/10"
          >
            <div
              className={`mb-6 h-40 rounded-3xl bg-gradient-to-br ${demo.accent} p-5`}
            >
              <div className="flex h-full items-end">
                <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur">
                  Ver demo
                </span>
              </div>
            </div>

            <h3 className="text-2xl font-semibold">{demo.title}</h3>

            <p className="mt-3 text-slate-300">{demo.description}</p>

            <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
              Explorar demo
              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-1"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
