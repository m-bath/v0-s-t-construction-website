import Link from "next/link";
import { Hero } from "@/components/hero";
import { ServiceCard } from "@/components/service-card";
import { StatsSection } from "@/components/stats-section";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";
import { CTASection } from "@/components/cta-section";
import { FadeIn } from "@/components/fade-in";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/services";
import { ArrowRight, Shield, Clock, Award, Users, MapPin } from "lucide-react";

const whyUs = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    desc: "Fully licensed and insured for your peace of mind on every project.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    desc: "We respect your time and deliver projects on schedule, every time.",
  },
  {
    icon: Award,
    title: "Quality Workmanship",
    desc: "Premium materials and expert craftsmanship on every project.",
  },
  {
    icon: Users,
    title: "Customer First",
    desc: "Clear communication and customer satisfaction are our top priorities.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <StatsSection />

      {/* Services Overview */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
              <div>
                <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">What We Do</p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Complete Construction Solutions
                </h2>
              </div>
              <Button variant="outline" asChild className="shrink-0">
                <Link href="/services/basement-development">
                  View All Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <FadeIn key={service.id} delay={i * 80}>
                <ServiceCard service={service} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Why Choose Us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Calgary&apos;s Trusted Construction Partner
              </h2>
              <p className="text-muted-foreground text-lg">
                With over 15 years of experience serving Calgary and surrounding areas,
                we deliver quality craftsmanship on every project.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map(({ icon: Icon, title, desc }, i) => (
              <FadeIn key={title} delay={i * 100}>
                <div className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/40 hover:shadow-md transition-all duration-300 group h-full">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mx-auto mb-6 group-hover:bg-primary/15 transition-colors">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-3">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <TestimonialsCarousel />

      {/* Service Areas */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Where We Work</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Proudly Serving Calgary &amp; Surrounding Communities
              </h2>
              <p className="text-muted-foreground text-lg">
                We provide professional construction services throughout the Calgary
                metropolitan area and nearby communities.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Calgary', 'Airdrie', 'Chestermere', 'Okotoks', 'Cochrane', 'Strathmore', 'High River', 'Crossfield'].map((area, i) => (
              <FadeIn key={area} delay={i * 60}>
                <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 group">
                  <MapPin className="h-5 w-5 text-primary mx-auto mb-2 opacity-60 group-hover:opacity-100 transition-opacity" />
                  <p className="font-semibold text-foreground">{area}</p>
                  <p className="text-sm text-muted-foreground">Alberta</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
