export default function Process() {
  return (
    <section id="proceso" className="mx-auto max-w-7xl px-6 py-20">
      {/* Header */}
      <div className="mb-12 max-w-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-300">
          Proceso
        </p>

        <h2 className="text-4xl font-bold md:text-5xl">
          De idea a landing publicada.
        </h2>
      </div>

      {/* Pasos */}
      <div className="grid gap-6 md:grid-cols-3">
        {[
          [
            "01",
            "Revisamos tu negocio",
            "Definimos servicios, público, colores, imágenes y objetivo principal.",
          ],
          [
            "02",
            "Diseño y desarrollo",
            "Se crea una landing rápida, moderna y enfocada en conversión.",
          ],
          [
            "03",
            "Publicación y soporte",
            "Se conecta dominio, hosting, WhatsApp, Analytics y mantenimiento.",
          ],
        ].map(([step, title, description]) => (
          <div key={step} className="rounded-3xl bg-white/5 p-6">
            <p className="mb-6 text-5xl font-bold text-cyan-300">{step}</p>

            <h3 className="text-2xl font-semibold">{title}</h3>

            <p className="mt-3 text-slate-300">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
