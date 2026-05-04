import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 bg-foreground">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-background mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="text-background/70 text-lg max-w-2xl mx-auto mb-8">
          Contact us today for a free consultation and estimate. We serve Calgary, 
          Airdrie, Chestermere, Okotoks, and surrounding areas.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild className="text-base">
            <Link href="/quote">
              Get Your Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="text-base bg-transparent border-background/30 text-background hover:bg-background/10 hover:text-background">
            <a href="tel:+14035551234">
              <Phone className="mr-2 h-5 w-5" />
              Call (403) 555-1234
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
