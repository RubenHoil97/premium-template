"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400 font-bold text-slate-950">
            R
          </div>
          <span className="font-semibold">Ruben Web Studio</span>
        </div>

        <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a href="#servicios" className="hover:text-white">
            Servicios
          </a>
          <a href="#proceso" className="hover:text-white">
            Proceso
          </a>
          <a href="#faq" className="hover:text-white">
            FAQ
          </a>
        </div>

        <a
          href="https://wa.me/529981234567"
          className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 md:inline-flex"
        >
          Cotizar ahora
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
          aria-label="Abrir menú"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 px-6 py-5 md:hidden">
          <div className="flex flex-col gap-4 text-slate-300">
            <a href="#servicios" onClick={() => setIsOpen(false)}>
              Servicios
            </a>
            <a href="#proceso" onClick={() => setIsOpen(false)}>
              Proceso
            </a>
            <a href="#faq" onClick={() => setIsOpen(false)}>
              FAQ
            </a>

            <a
              href="https://wa.me/529981234567"
              className="mt-2 rounded-full bg-cyan-400 px-5 py-3 text-center font-semibold text-slate-950"
            >
              Cotizar ahora
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
