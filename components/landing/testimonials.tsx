import { Testimonial } from "@/types/landing";
import { Star } from "lucide-react";

type TestimonialProps = {
  testimonials: Testimonial[];
};

export default function Testimonials({ testimonials }: TestimonialProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((item) => (
          <div
            key={item.name}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            {/* Estrellas */}
            <div className="mb-4 flex gap-1 text-yellow-300">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={18} fill="currentColor" />
              ))}
            </div>

            {/* Texto */}
            <p className="text-slate-300">“{item.text}”</p>

            {/* Nombre */}
            <p className="mt-5 font-semibold">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
