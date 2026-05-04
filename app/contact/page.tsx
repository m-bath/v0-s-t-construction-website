import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact S&T Construction for your construction needs in Calgary, AB. Call (403) 555-1234 or fill out our contact form. Serving Calgary, Airdrie, Chestermere & Okotoks.",
};

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["(403) 555-1234"],
    action: "tel:+14035551234",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@stconstruction.ca"],
    action: "mailto:info@stconstruction.ca",
  },
  {
    icon: MapPin,
    title: "Service Area",
    details: ["Calgary, Airdrie, Chestermere", "Okotoks & Surrounding Areas"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Fri: 7:00 AM - 6:00 PM", "Sat: 8:00 AM - 4:00 PM", "Sun: Closed"],
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium mb-2">Contact Us</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to start your project? Have questions about our services? 
              We&apos;re here to help. Reach out today and let&apos;s discuss how we can 
              bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-foreground mb-8">
                Contact Information
              </h2>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <Card key={index} className="border-border">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg shrink-0">
                          <item.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">
                            {item.title}
                          </h3>
                          {item.details.map((detail, i) => (
                            item.action ? (
                              <a 
                                key={i}
                                href={item.action}
                                className="block text-muted-foreground hover:text-primary transition-colors"
                              >
                                {detail}
                              </a>
                            ) : (
                              <p key={i} className="text-muted-foreground">
                                {detail}
                              </p>
                            )
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Map Placeholder */}
              <Card className="mt-6 border-border overflow-hidden">
                <div className="aspect-square bg-muted flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground text-sm">
                      Serving Calgary & Surrounding Areas
                    </p>
                    <p className="text-muted-foreground text-xs mt-2">
                      Airdrie | Chestermere | Okotoks | Cochrane
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">
                    What areas do you serve?
                  </h3>
                  <p className="text-muted-foreground">
                    We serve Calgary and surrounding communities including Airdrie, 
                    Chestermere, Okotoks, Cochrane, Strathmore, High River, and 
                    Crossfield.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">
                    Do you offer free estimates?
                  </h3>
                  <p className="text-muted-foreground">
                    Yes! We offer free, no-obligation estimates for all our services. 
                    Contact us to schedule a consultation and we&apos;ll provide a detailed 
                    quote for your project.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">
                    Are you licensed and insured?
                  </h3>
                  <p className="text-muted-foreground">
                    Absolutely. S&T Construction is fully licensed and insured, 
                    with comprehensive liability coverage and WCB coverage for all 
                    our workers.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">
                    How long does a typical basement development take?
                  </h3>
                  <p className="text-muted-foreground">
                    A typical basement development takes 6-10 weeks depending on the 
                    scope of work. We&apos;ll provide a detailed timeline during your 
                    consultation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
