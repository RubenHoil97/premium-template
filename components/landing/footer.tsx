import { Clock, Phone, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        {/* Info */}
        <div>
          <p className="font-semibold">Ruben Web Studio</p>

          <p className="text-sm text-slate-400">
            Landing pages para negocios locales en Cancún.
          </p>
        </div>

        {/* Datos */}
        <div className="flex flex-wrap gap-4 text-sm text-slate-300">
          <span className="inline-flex items-center gap-2">
            <Phone size={16} />
            998 890 6245
          </span>

          <span className="inline-flex items-center gap-2">
            <Clock size={16} />
            Lun - Sáb
          </span>

          <span className="inline-flex items-center gap-2">
            <ShieldCheck size={16} />
            Soporte mensual
          </span>
        </div>
      </div>
    </footer>
  );
}
