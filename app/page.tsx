import Benefits from "@/components/landing/benefits";
import Cta from "@/components/landing/cta";
import DemoCards from "@/components/landing/demo-cards";
import Faq from "@/components/landing/faq";
import Footer from "@/components/landing/footer";
import Hero from "@/components/landing/hero";
import NavBar from "@/components/landing/navbar";
import Packages from "@/components/landing/packages";
import Process from "@/components/landing/process";
import Services from "@/components/landing/services";
import Testimonials from "@/components/landing/testimonials";
import ContactForm from "@/components/ui/contact-form";
import WhatsAppFloating from "@/components/ui/whatsapp-floating";
import { benefits, faqs, services, testimonials } from "@/data/landing";
import mainTheme from "@/themes/main";

export default function LocalBusinessLanding() {
  return (
    <main className="bg-slate-950 text-white">
      <NavBar />

      <Hero
        theme={mainTheme}
        badge="Diseño web para negocios locales en Cancún"
        title="Landing pages modernas para negocios que quieren verse profesionales y recibir más clientes."
        description="Diseño páginas rápidas, atractivas y enfocadas en convertir visitantes en mensajes por WhatsApp para clínicas, talleres, turismo, rentas y servicios locales."
        primaryCta="Ver demos"
        secondaryCta="Cotizar por WhatsApp"
      />

      <DemoCards />
      <Services services={services} />
      <Benefits benefits={benefits} />
      <Process />
      <Packages />

      <Testimonials testimonials={testimonials} />
      <Faq faqs={faqs} />
      <Cta />

      <ContactForm
        title="¿Listo para hacer crecer tu negocio?"
        description="Cuéntame sobre tu proyecto y te enviaré una propuesta sin compromiso."
        submitText="Solicitar cotización"
      />
      <Footer />
      <WhatsAppFloating />
    </main>
  );
}
