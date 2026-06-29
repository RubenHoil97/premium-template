import { Service } from "@/types/landing";
import { CheckCircle2 } from "lucide-react";

type ServicesProps = {
  services: Service[];
};
export default function Services({ services }: Readonly<ServicesProps>) {
  return (
    <section id="servicios" className="mx-auto max-w-7xl px-6 py-20">
      {/* Header */}
      <div className="mb-12 max-w-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-300">
          Qué incluye
        </p>

        <h2 className="text-4xl font-bold md:text-5xl">
          Todo lo necesario para vender mejor en internet.
        </h2>
      </div>

      {/* Grid servicios */}
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/10"
          >
            <CheckCircle2 className="mb-6 text-cyan-300" size={32} />

            <h3 className="text-2xl font-semibold">{service.title}</h3>

            <p className="mt-3 text-slate-300">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
