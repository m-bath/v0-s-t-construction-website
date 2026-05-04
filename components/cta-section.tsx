import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-foreground">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff, #fff 2px, transparent 2px, transparent 24px)",
        }}
      />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">Get Started Today</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
          Ready to Start Your Project?
        </h2>
        <p className="text-white/65 text-base sm:text-lg max-w-2xl mx-auto mb-8 sm:mb-10">
          Contact us today for a free consultation and estimate. We serve Calgary,
          Airdrie, Chestermere, Okotoks, and surrounding areas.
        </p>
        {/* Hidden on mobile — floating CTA bar is used instead */}
        <div className="hidden sm:flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild className="text-base shadow-lg shadow-primary/40">
            <Link href="/quote">
              Get Your Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="text-base bg-transparent border-white/25 text-white hover:bg-white/10 hover:text-white"
          >
            <a href="tel:+15879736792">
              <Phone className="mr-2 h-5 w-5" />
              Call (587) 973-6792
            </a>
          </Button>
        </div>
        {/* Mobile: simple text nudge since floating bar handles CTAs */}
        <p className="sm:hidden text-white/50 text-sm">Use the buttons below to call or request a quote.</p>
      </div>
    </section>
  );
}
