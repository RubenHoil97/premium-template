import { ArrowRight, MapPin, MessageCircle, Star } from "lucide-react";
import { Theme } from "@/types/landing";

type HeroProps = {
  theme: Theme;
  badge: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
};

export default function Hero({
  theme,
  badge,
  title,
  description,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center">
        {/* ======================================================
              HERO: TEXTO IZQUIERDA
          ====================================================== */}
        <div className="relative z-10">
          {/* Badge */}
          <div className={theme.badge}>
            <MapPin size={16} />
            {badge}
          </div>

          {/* Título */}
          <h1 className="max-w-3xl text-5xl font-bold tracking-tight md:text-7xl">
            {title}
          </h1>

          {/* Descripción */}
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {description}
          </p>

          {/* Botones */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            {/* CTA principal */}
            <a
              href="https://wa.me/529981234567"
              className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 font-semibold transition ${theme.primaryButton}`}
            >
              {primaryCta}
              <ArrowRight size={18} />
            </a>

            {/* CTA secundario */}
            <a
              href="#servicios"
              className={`inline-flex items-center justify-center rounded-full border px-7 py-4 font-semibold transition ${theme.secondaryButton}`}
            >
              {secondaryCta}
            </a>
          </div>

          {/* Estadísticas */}
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
            <div>
              <p className="text-3xl font-bold">+3</p>
              <p className="text-sm text-slate-400">sectores demo</p>
            </div>

            <div>
              <p className="text-3xl font-bold">24/7</p>
              <p className="text-sm text-slate-400">contacto online</p>
            </div>

            <div>
              <p className="text-3xl font-bold">100%</p>
              <p className="text-sm text-slate-400">responsive</p>
            </div>
          </div>
        </div>

        {/* ======================================================
              HERO: CARD VISUAL DERECHA
          ====================================================== */}
        <div className="relative z-10 rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-xl">
          <div className="rounded-[1.5rem] bg-slate-900 p-5">
            {/* Top card */}
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Vista previa</p>

                <h3 className="text-xl font-semibold">Negocio Local Premium</h3>
              </div>

              <div className="rounded-full bg-emerald-400/10 px-3 py-1 text-sm text-emerald-300">
                Online
              </div>
            </div>

            {/* Imagen principal */}
            <div className="h-72 rounded-3xl bg-gradient-to-br from-cyan-300 via-sky-500 to-blue-900 p-6">
              <div className="flex h-full flex-col justify-end">
                <p className="mb-3 w-fit rounded-full bg-white/20 px-3 py-1 text-sm backdrop-blur">
                  Demo personalizada
                </p>

                <h4 className="text-3xl font-bold">
                  Agenda clientes desde tu página
                </h4>
              </div>
            </div>

            {/* Cards pequeñas */}
            <div className="mt-5 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white/5 p-4">
                <Star className="mb-3 text-yellow-300" />

                <p className="font-semibold">Confianza visual</p>

                <p className="text-sm text-slate-400">Diseño moderno</p>
              </div>

              <div className="rounded-2xl bg-white/5 p-4">
                <MessageCircle className="mb-3 text-emerald-300" />

                <p className="font-semibold">WhatsApp directo</p>

                <p className="text-sm text-slate-400">Más contactos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
