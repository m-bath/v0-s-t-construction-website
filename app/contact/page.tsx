import { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { FadeIn } from "@/components/fade-in";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Phone, Mail, MapPin, Clock, Building } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact S&T Construction for your construction needs in Calgary, AB. Call (403) 555-1234 or fill out our contact form. Serving Calgary, Airdrie, Chestermere & Okotoks.",
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
    icon: Building,
    title: "Office Address",
    details: ["215 Magnolia Drive SE", "Calgary, AB"],
  },
  {
    icon: MapPin,
    title: "Service Area",
    details: ["Calgary, Airdrie, Chestermere", "Okotoks & Surrounding Areas"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: [
      "Mon – Fri: 7:00 AM – 6:00 PM",
      "Sat: 8:00 AM – 4:00 PM",
      "Sun: Closed",
    ],
  },
];

const faqs = [
  {
    q: "What areas do you serve?",
    a: "We serve Calgary and surrounding communities including Airdrie, Chestermere, Okotoks, Cochrane, Strathmore, High River, and Crossfield.",
  },
  {
    q: "Do you offer free estimates?",
    a: "Yes! We offer free, no-obligation estimates for all our services. Contact us to schedule a consultation and we'll provide a detailed quote for your project.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Absolutely. S&T Construction is fully licensed and insured, with comprehensive liability coverage and WCB coverage for all our workers.",
  },
  {
    q: "How long does a typical basement development take?",
    a: "A typical basement development takes 6–10 weeks depending on scope. We'll provide a detailed timeline during your consultation.",
  },
  {
    q: "Do you handle permits?",
    a: "Yes, we manage the entire permit process on your behalf. We are experienced with City of Calgary permit requirements and ensure all work passes inspection.",
  },
  {
    q: "What types of roofing materials do you install?",
    a: "We install asphalt shingles, metal roofing, and flat roofing systems. We work with top manufacturers to ensure your roof withstands Alberta's climate — including hail, heavy snow, and extreme temperature swings.",
  },
  {
    q: "Can you help with insurance claims for storm damage?",
    a: "Yes. We regularly work with homeowners and their insurance adjusters for storm damage (hail, wind, etc.) on roofing and siding projects. We help document the damage and coordinate with your insurer to streamline the claims process.",
  },
  {
    q: "Do you offer financing options?",
    a: "We work with financing partners to help make large projects more accessible. Ask us about payment plans during your free consultation.",
  },
  {
    q: "How do I get started?",
    a: "Simply fill out the contact form, call us at (403) 555-1234, or request a free quote online. We'll schedule a site visit and provide a detailed estimate within a few business days.",
  },
  {
    q: "Do you provide a warranty on your work?",
    a: "Yes. We stand behind our craftsmanship with a workmanship warranty on all projects, plus manufacturer warranties on materials. Specific terms are outlined in your project contract.",
  },
  {
    q: "What is MEP consulting and do I need it?",
    a: "MEP (Mechanical, Electrical, Plumbing) consulting helps ensure your systems are designed efficiently, safely, and to code — especially on new builds or large renovations. It's particularly valuable for commercial projects or complex residential builds.",
  },
  {
    q: "Can you handle both residential and commercial projects?",
    a: "Yes. We serve both residential homeowners and commercial clients. Our team has experience on projects of all scales, from basement developments to full commercial MEP installations.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-14 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              Contact Us
            </p>
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
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Contact Info */}
            <FadeIn className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-foreground mb-8">
                Contact Information
              </h2>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors"
                  >
                    <div className="flex items-center justify-center w-11 h-11 bg-primary/10 rounded-lg shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1 text-sm">
                        {item.title}
                      </h3>
                      {item.details.map((detail, i) =>
                        item.action ? (
                          <a
                            key={i}
                            href={item.action}
                            className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {detail}
                          </a>
                        ) : (
                          <p key={i} className="text-sm text-muted-foreground">
                            {detail}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Google Maps Embed */}
              <div className="mt-6 rounded-2xl overflow-hidden border border-border shadow-sm">
                <iframe
                  title="S&T Construction Location"
                  src="https://maps.google.com/maps?q=215+Magnolia+Drive+SE+Calgary+AB&output=embed&z=15"
                  width="100%"
                  height="280"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </FadeIn>

            {/* Contact Form */}
            <FadeIn className="lg:col-span-2" delay={150}>
              <ContactForm />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-14 md:py-20 pb-24 md:pb-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="text-center mb-12">
                <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
                  FAQ
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-muted-foreground">
                  Can&apos;t find what you&apos;re looking for? Call us at{" "}
                  <a href="tel:+14035551234" className="text-primary font-medium hover:underline">
                    (403) 555-1234
                  </a>{" "}
                  and we&apos;ll be happy to help.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30 transition-colors"
                  >
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5 text-sm">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
