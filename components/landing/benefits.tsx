import { CheckCircle2 } from "lucide-react";
import { Benefit } from "@/types/landing";

type BenefitProps = {
  benefits: Benefit[];
};

export default function Benefits({ benefits }: BenefitProps) {
  return (
    <section className="bg-white py-20 text-slate-950">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        {/* Texto */}
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-600">
            Beneficios
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Tu negocio disponible para nuevos clientes todos los días.
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Una landing bien hecha no solo se ve bonita: guía al visitante para
            que confíe, entienda tu servicio y te contacte.
          </p>
        </div>

        {/* Lista */}
        <div className="grid gap-4 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="flex items-start gap-3 rounded-2xl border border-slate-200 p-4"
            >
              <CheckCircle2
                className="mt-0.5 shrink-0 text-cyan-600"
                size={20}
              />

              <span className="font-medium">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
