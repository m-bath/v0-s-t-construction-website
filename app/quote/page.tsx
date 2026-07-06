import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { QuoteForm } from "@/components/quote-form";
import { CheckCircle, Phone, Clock, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Get a Free Quote",
  description: "Request a free quote for your construction project in Calgary, AB. Basement development, roofing, HVAC, electrical, plumbing & more. No obligation estimate.",
};

const benefits = [
  { icon: Clock,       title: "24-Hour Quote Guarantee", description: "We know timing matters. You'll get a detailed quote back within 24 hours — often much sooner." },
  { icon: CheckCircle, title: "Free Consultation",       description: "No-obligation consultation to discuss your project needs." },
  { icon: Shield,      title: "Transparent Pricing",     description: "Detailed quotes with no hidden fees or surprises." },
];

export default function QuotePage() {
  return (
    <>
      {/* Hero */}
      <section className="py-14 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
              <Clock className="h-4 w-4" />
              Quotes back within 24 hours
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-5">
              Get Your Free Quote Today
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Fill out the form below and we&apos;ll get you a detailed,
              no-obligation estimate for your project — fast. We respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-14 md:py-20 pb-24 md:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Benefits sidebar */}
            <div className="lg:col-span-1">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
                Why Request a Quote?
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card">
                    <div className="flex items-center justify-center w-11 h-11 bg-primary/10 rounded-lg shrink-0">
                      <benefit.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1 text-sm">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Call Us */}
              <Card className="mt-5 border-primary/20 bg-primary/5">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-foreground mb-2">Prefer to Call?</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Speak directly with our team for immediate assistance.
                  </p>
                  <a href="tel:+13683385559" className="flex items-center gap-2 text-primary font-semibold hover:underline">
                    <Phone className="h-5 w-5" />
                    (368) 338-5559
                  </a>
                </CardContent>
              </Card>

              {/* Service Areas */}
              <div className="mt-5 p-5 border border-border rounded-xl">
                <h3 className="font-semibold text-foreground mb-3">Service Areas</h3>
                <ul className="text-sm text-muted-foreground grid grid-cols-2 gap-1.5">
                  {["Calgary, AB", "Airdrie, AB", "Chestermere, AB", "Okotoks, AB", "Cochrane, AB", "Surrounding areas"].map((area) => (
                    <li key={area}>{area}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quote Form */}
            <div className="lg:col-span-2">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-12 sm:py-16 bg-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {[
              { value: "15+",      label: "Years Experience" },
              { value: "Calgary",  label: "Based & Trusted" },
              { value: "100%",     label: "Satisfaction" },
              { value: "Licensed", label: "& Insured" },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-2xl sm:text-3xl font-bold text-background mb-1">{value}</p>
                <p className="text-background/70 text-xs sm:text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
