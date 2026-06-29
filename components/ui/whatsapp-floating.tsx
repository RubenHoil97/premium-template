import { MessageCircle } from "lucide-react";

export default function WhatsAppFloating() {
  return (
    <a
      href="https://wa.me/529988906245?text=Hola,%20quiero%20información%20sobre%20una%20landing%20page"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 animate-pulse items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl transition hover:scale-110 hover:bg-emerald-400"
    >
      <MessageCircle size={28} />
    </a>
  );
}
