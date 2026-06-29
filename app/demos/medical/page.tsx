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
  medicalBenefits,
  medicalFaqs,
  medicalServices,
  medicalTestimonials,
} from "@/data/medical";
import medicalTheme from "@/themes/medical";

export default function MedicalDemoPage() {
  return (
    <>
      <main className="bg-slate-50 text-slate-950">
        <NavBar />

        <Hero
          theme={medicalTheme}
          badge="Demo para clínicas y estética"
          title="Agenda más citas con una página profesional para tu clínica."
          description="Ideal para dentistas, fisioterapeutas, clínicas de belleza y servicios médicos que quieren generar confianza y recibir más pacientes por WhatsApp."
          primaryCta="Agendar cita"
          secondaryCta="Ver tratamientos"
        />

        <Services services={medicalServices} />
        <Benefits benefits={medicalBenefits} />
        <Process />
        <Testimonials testimonials={medicalTestimonials} />
        <Faq faqs={medicalFaqs} />
        <Cta />
        <ContactForm
          title="Agenda tu cita"
          description="Déjanos tus datos y nos pondremos en contacto contigo."
          submitText="Agendar cita"
        />
        <Footer />
      </main>

      <WhatsAppFloating />
    </>
  );
}
