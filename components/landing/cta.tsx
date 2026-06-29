import { MessageCircle } from "lucide-react";

export default function Cta() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="rounded-[2rem] bg-cyan-400 p-8 text-slate-950 md:p-12">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          {/* Texto */}
          <div>
            <h2 className="text-4xl font-bold md:text-5xl">
              ¿Listo para mostrar tu negocio como una marca profesional?
            </h2>

            <p className="mt-4 text-lg text-slate-800">
              Solicita una demo personalizada para tu sector y empieza a captar
              más clientes desde internet.
            </p>
          </div>

          {/* Botón */}
          <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
            <a
              href="https://wa.me/529981234567"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-4 font-semibold text-white"
            >
              <MessageCircle size={18} />
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
