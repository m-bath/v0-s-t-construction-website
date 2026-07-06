import { Star } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

const testimonials = [
  {
    name: "Rajiv & Priya Sharma",
    location: "Calgary, AB",
    project: "Basement Development",
    rating: 5,
    text: "S&T Builders transformed our unfinished basement into an amazing entertainment space. Tejpal and his team were professional, punctual, and the quality exceeded our expectations.",
  },
  {
    name: "Amandeep Gill",
    location: "Airdrie, AB",
    project: "Complete Home Renovation",
    rating: 5,
    text: "We hired S&T for a full renovation including HVAC, electrical, and plumbing upgrades. Incredibly knowledgeable team that kept us informed every step of the way. Outstanding work!",
  },
  {
    name: "David & Lisa Morrison",
    location: "Chestermere, AB",
    project: "Roofing & Siding",
    rating: 5,
    text: "After the hailstorm damaged our roof and siding, S&T responded quickly and handled everything professionally — from insurance coordination to final inspection. Our home looks better than ever.",
  },
  {
    name: "Harpreet Kaur",
    location: "Calgary, AB",
    project: "HVAC Installation",
    rating: 5,
    text: "Had a new furnace and A/C system installed before winter hit. The team was efficient, clean, and explained everything clearly. Our energy bills have already dropped noticeably. Highly recommend!",
  },
  {
    name: "Robert Glenville",
    location: "Okotoks, AB",
    project: "Electrical Panel Upgrade",
    rating: 5,
    text: "The electricians upgraded our panel and added circuits for an EV charger and hot tub. All permits handled, everything up to code. Couldn't be happier with the professionalism shown.",
  },
  {
    name: "Amanda Kowalski",
    location: "Calgary, AB",
    project: "Flooring & Interior Painting",
    rating: 5,
    text: "S&T installed hardwood floors throughout our main floor and painted the entire interior. The attention to detail was incredible — every corner, every trim piece was perfect. We've already referred them to three neighbours.",
  },
  {
    name: "Gurpreet & Simran Dhaliwal",
    location: "Cochrane, AB",
    project: "Basement Development & Plumbing",
    rating: 5,
    text: "From design consultation to final walkthrough, S&T made the entire basement development seamless. They added a full bathroom, a wet bar, and a bedroom — all to code. Exceptional craftsmanship.",
  },
  {
    name: "Kevin Sharma",
    location: "Strathmore, AB",
    project: "Commercial Renovation",
    rating: 5,
    text: "S&T handled the full renovation of our commercial space — mechanical, electrical, and plumbing all coordinated seamlessly. Their expertise saved us significant cost through smart planning and energy-efficient work. True professionals.",
  },
  {
    name: "Brenda & Clint Foley",
    location: "Airdrie, AB",
    project: "Siding Replacement",
    rating: 5,
    text: "Our old siding was a disaster. S&T came in with fibre cement siding and the transformation is night and day. The crew was respectful of our property and the cleanup was immaculate.",
  },
];

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="w-[340px] shrink-0 bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 mx-3">
      <div className="flex items-center gap-1">
        {[...Array(t.rating)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
        ))}
      </div>
      <p className="text-foreground text-sm leading-relaxed flex-1">
        &ldquo;{t.text}&rdquo;
      </p>
      <div className="flex items-center gap-3 pt-2 border-t border-border">
        <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
          <span className="text-primary font-bold text-sm">{t.name.charAt(0)}</span>
        </div>
        <div>
          <p className="font-semibold text-foreground text-sm">{t.name}</p>
          <p className="text-xs text-muted-foreground">{t.location} · {t.project}</p>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsCarousel() {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 mb-14">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              Client Reviews
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground text-lg">
              Hundreds of happy homeowners and businesses across Calgary trust S&T Builders for quality craftsmanship.
            </p>
          </div>
        </FadeIn>
      </div>

      {/* Marquee track — pause on hover */}
      <div className="relative pause-on-hover">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-secondary to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-secondary to-transparent z-10" />

        <div className="flex animate-marquee w-max py-4">
          {doubled.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
