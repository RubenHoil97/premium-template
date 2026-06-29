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
  autoBenefits,
  autoFaqs,
  autoServices,
  autoTestimonials,
} from "@/data/automotive";
import automotiveTheme from "@/themes/automotive";

export default function AutomotiveDemoPage() {
  return (
    <>
      <main className="bg-zinc-950 text-white">
        <NavBar />

        <Hero
          theme={automotiveTheme}
          badge="Demo para detailing y servicios automotrices"
          title="Haz que tu servicio automotriz se vea premium desde el primer clic."
          description="Landing page ideal para talleres, detailing, polarizado, lavado premium, mecánicos e instaladores de accesorios."
          primaryCta="Cotizar por WhatsApp"
          secondaryCta="Ver servicios"
        />

        <Services services={autoServices} />
        <Benefits benefits={autoBenefits} />
        <Process />
        <Testimonials testimonials={autoTestimonials} />
        <Faq faqs={autoFaqs} />
        <Cta />
        <ContactForm
          title="Solicita una cotización"
          description="Cuéntanos qué servicio necesita tu vehículo."
          submitText="Cotizar servicio"
        />
        <Footer />
      </main>

      <WhatsAppFloating />
    </>
  );
}
