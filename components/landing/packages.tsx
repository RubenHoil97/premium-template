import { CheckCircle2 } from "lucide-react";

const packages = [
  {
    name: "Landing básica",
    description: "Ideal para validar presencia digital rápido.",
    items: [
      "1 landing page",
      "Diseño responsive",
      "Botón WhatsApp",
      "SEO básico",
    ],
  },
  {
    name: "Landing premium",
    description: "Para negocios que quieren verse más profesionales.",
    items: [
      "Diseño personalizado",
      "Secciones completas",
      "Google Maps",
      "Open Graph",
      "Optimización móvil",
    ],
    featured: true,
  },
  {
    name: "Landing + mantenimiento",
    description: "Para quienes quieren olvidarse de lo técnico.",
    items: [
      "Hosting administrado",
      "Cambios mensuales",
      "Soporte básico",
      "Backups",
      "Monitoreo",
    ],
  },
];

export default function Packages() {
  return (
    <section className="bg-white py-20 text-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-600">
            Paquetes
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Opciones simples para empezar.
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Puedes iniciar con una landing y después agregar mantenimiento,
            hosting o WordPress si lo necesitas.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {packages.map((item) => (
            <div
              key={item.name}
              className={`rounded-3xl border p-6 ${
                item.featured
                  ? "border-cyan-400 bg-slate-950 text-white shadow-2xl"
                  : "border-slate-200 bg-slate-50"
              }`}
            >
              <h3 className="text-2xl font-bold">{item.name}</h3>

              <p
                className={`mt-3 ${
                  item.featured ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {item.description}
              </p>

              <div className="mt-6 space-y-4">
                {item.items.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className={
                        item.featured ? "text-cyan-300" : "text-cyan-600"
                      }
                    />

                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
