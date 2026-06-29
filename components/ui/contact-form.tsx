type ContactFormProps = {
  title?: string;
  description?: string;
  submitText?: string;
};

export default function ContactForm({
  title,
  description,
  submitText,
}: Readonly<ContactFormProps>) {
  return (
    <section id="contacto" className="bg-white py-20 text-slate-950">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-600">
            Contacto
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">{title}</h2>

          <p className="mt-4 text-lg text-slate-600">{description}</p>
        </div>

        <form className="space-y-6 rounded-3xl border border-slate-200 bg-slate-50 p-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                Nombre
              </label>

              <input
                id="name"
                type="text"
                placeholder="Tu nombre"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-cyan-500"
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                Teléfono / WhatsApp
              </label>

              <input
                id="phone"
                type="tel"
                placeholder="998..."
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-cyan-500"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="business"
              className="mb-2 block text-sm font-medium"
            >
              Negocio
            </label>

            <input
              id="business"
              type="text"
              placeholder="Ej. Clínica dental, detailing, tours..."
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-cyan-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium">
              Mensaje
            </label>

            <textarea
              id="message"
              rows={5}
              placeholder="Cuéntame qué necesitas..."
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-cyan-500"
            />
          </div>

          <button
            type="submit"
            className="inline-flex rounded-full bg-cyan-500 px-8 py-4 font-semibold text-white transition hover:bg-cyan-600"
          >
            {submitText}
          </button>
        </form>
      </div>
    </section>
  );
}
