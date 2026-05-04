import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-construction.jpg"
          alt="S&T Construction - Professional Construction Services in Calgary"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Serving Calgary & Surrounding Areas
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight mb-6 text-balance">
            Building Excellence in Calgary Since 2009
          </h1>
          
          <p className="text-lg md:text-xl text-background/80 mb-8 leading-relaxed">
            Professional construction services for residential and commercial projects. 
            From basement development to MEP consulting, we deliver quality craftsmanship 
            with 15+ years of trusted experience.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-4 mb-8">
            {["Licensed & Insured", "15+ Years Experience", "Free Estimates"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-background/90 text-sm">
                <CheckCircle className="h-4 w-4 text-primary" />
                {item}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="text-base">
              <Link href="/quote">
                Get Your Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base bg-transparent border-background/30 text-background hover:bg-background/10 hover:text-background">
              <a href="tel:+14035551234">
                <Phone className="mr-2 h-5 w-5" />
                (403) 555-1234
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Service Areas Badge */}
      <div className="absolute bottom-8 right-8 hidden lg:block">
        <div className="bg-background/10 backdrop-blur-sm border border-background/20 rounded-lg px-6 py-4">
          <p className="text-background/60 text-xs uppercase tracking-wider mb-1">Service Areas</p>
          <p className="text-background font-medium">Calgary | Airdrie | Chestermere | Okotoks</p>
        </div>
      </div>
    </section>
  );
}
