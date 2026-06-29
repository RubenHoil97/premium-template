import Benefits from "@/components/landing/benefits";
import Cta from "@/components/landing/cta";
import Faq from "@/components/landing/faq";
import Footer from "@/components/landing/footer";
import Hero from "@/components/landing/hero";
import NavBar from "@/components/landing/navbar";
import Process from "@/components/landing/process";
import Services from "@/components/landing/services";
import Testimonials from "@/components/landing/testimonials";
import ContactForm from "@/components/ui/contact-form";
import WhatsAppFloating from "@/components/ui/whatsapp-floating";
import {
  tourismBenefits,
  tourismFaqs,
  tourismServices,
  tourismTestimonials,
} from "@/data/tourism";
import tourismTheme from "@/themes/tourism";

export default function TourismDemoPage() {
  return (
    <>
      <main className="bg-emerald-950 text-white">
        <NavBar />

        <Hero
          theme={tourismTheme}
          badge="Demo para turismo y rentas"
          title="Vende tours, rentas y experiencias con una página que inspira confianza."
          description="Ideal para agencias de tours, rentadoras de autos, administradores de departamentos y experiencias locales en Cancún."
          primaryCta="Reservar ahora"
          secondaryCta="Ver experiencias"
        />

        <Services services={tourismServices} />
        <Benefits benefits={tourismBenefits} />
        <Process />
        <Testimonials testimonials={tourismTestimonials} />
        <Faq faqs={tourismFaqs} />
        <Cta />
        <ContactForm
          title="Reserva tu experiencia"
          description="Indícanos la fecha y el número de personas."
          submitText="Reservar ahora"
        />
        <Footer />
      </main>

      <WhatsAppFloating />
    </>
  );
}
