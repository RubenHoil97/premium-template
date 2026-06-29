import { Faqc } from "@/types/landing";

type FaqProps = {
  faqs: Faqc[];
};

export default function Faq({ faqs }: FaqProps) {
  return (
    <section id="faq" className="bg-slate-900 py-20">
      <div className="mx-auto max-w-4xl px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-300">
            FAQ
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Preguntas frecuentes
          </h2>
        </div>

        {/* Lista FAQ */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-xl font-semibold">{faq.question}</h3>

              <p className="mt-3 text-slate-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
