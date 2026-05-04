import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { QuoteForm } from "@/components/quote-form";
import { CheckCircle, Phone, Clock, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Get a Free Quote",
  description: "Request a free quote for your construction project in Calgary, AB. Basement development, roofing, HVAC, electrical, plumbing & more. No obligation estimate.",
};

const benefits = [
  {
    icon: CheckCircle,
    title: "Free Consultation",
    description: "No-obligation consultation to discuss your project needs.",
  },
  {
    icon: Clock,
    title: "Quick Response",
    description: "We respond to all inquiries within 24 business hours.",
  },
  {
    icon: Shield,
    title: "Transparent Pricing",
    description: "Detailed quotes with no hidden fees or surprises.",
  },
];

export default function QuotePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium mb-2">Free Estimate</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get Your Free Quote Today
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Fill out the form below and we&apos;ll provide you with a detailed, 
              no-obligation estimate for your construction project. Serving Calgary, 
              Airdrie, Chestermere, and Okotoks.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Benefits */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-foreground mb-8">
                Why Request a Quote?
              </h2>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="border-border">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg shrink-0">
                          <benefit.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            {benefit.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Call Us */}
              <Card className="mt-6 border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">
                    Prefer to Call?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Speak directly with our team for immediate assistance.
                  </p>
                  <a 
                    href="tel:+14035551234" 
                    className="flex items-center gap-2 text-primary font-semibold hover:underline"
                  >
                    <Phone className="h-5 w-5" />
                    (403) 555-1234
                  </a>
                </CardContent>
              </Card>

              {/* Service Areas */}
              <div className="mt-6 p-6 border border-border rounded-lg">
                <h3 className="font-semibold text-foreground mb-3">
                  Service Areas
                </h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Calgary, AB</li>
                  <li>Airdrie, AB</li>
                  <li>Chestermere, AB</li>
                  <li>Okotoks, AB</li>
                  <li>Cochrane, AB</li>
                  <li>And surrounding communities</li>
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

      {/* Trust Section */}
      <section className="py-16 bg-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-background mb-2">15+</p>
              <p className="text-background/70 text-sm">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-background mb-2">500+</p>
              <p className="text-background/70 text-sm">Projects Completed</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-background mb-2">100%</p>
              <p className="text-background/70 text-sm">Satisfaction</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-background mb-2">Licensed</p>
              <p className="text-background/70 text-sm">& Insured</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
