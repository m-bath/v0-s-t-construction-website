import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] sm:min-h-[92vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-construction.jpg"
          alt="S&T Construction - Professional Construction Services in Calgary"
          fill
          className="object-cover"
          priority
        />
        {/* Mobile: strong full overlay so text is always readable */}
        <div className="absolute inset-0 bg-foreground/80 sm:hidden" />
        {/* Desktop: directional gradient */}
        <div className="absolute inset-0 hidden sm:block bg-gradient-to-r from-foreground/95 via-foreground/75 to-foreground/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-20 sm:py-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-6 sm:mb-8 shadow-lg">
            <span className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse shrink-0" />
            Serving Calgary &amp; Surrounding Areas Since 2009
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-5 sm:mb-6">
            Building<br />
            <span className="text-primary">Excellence</span><br />
            in Calgary
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-7 sm:mb-8 leading-relaxed max-w-lg">
            Professional construction services for residential and commercial projects.
            Quality craftsmanship backed by 15+ years of trusted experience.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-3 sm:gap-5 mb-8 sm:mb-10">
            {["Licensed & Insured", "15+ Years Experience", "Free Estimates"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-white/90 text-sm font-medium">
                <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                {item}
              </div>
            ))}
          </div>

          {/* CTAs — hidden on mobile (use floating bar instead) */}
          <div className="hidden sm:flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="text-base shadow-lg shadow-primary/30">
              <Link href="/quote">
                Get Your Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm">
              <a href="tel:+15879736792">
                <Phone className="mr-2 h-5 w-5" />
                (587) 973-6792
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Stats Card — desktop only */}
      <div className="absolute bottom-8 right-8 hidden lg:block">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 py-5 shadow-xl">
          <p className="text-white/60 text-xs uppercase tracking-widest mb-2 font-medium">Service Areas</p>
          <p className="text-white font-semibold text-sm">Calgary · Airdrie · Chestermere · Okotoks</p>
        </div>
      </div>
    </section>
  );
}
