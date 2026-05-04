import Link from "next/link";
import { Hero } from "@/components/hero";
import { ServiceCard } from "@/components/service-card";
import { StatsSection } from "@/components/stats-section";
import { Testimonials } from "@/components/testimonials";
import { CTASection } from "@/components/cta-section";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/services";
import { ArrowRight, Shield, Clock, Award, Users } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <StatsSection />

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <p className="text-primary font-medium mb-2">Our Services</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
                Complete Construction Solutions
              </h2>
            </div>
            <Button variant="outline" asChild>
              <Link href="/services/basement-development">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-medium mb-2">Why Choose S&T Construction</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Calgary&apos;s Trusted Construction Partner
            </h2>
            <p className="text-muted-foreground text-lg">
              With over 15 years of experience serving Calgary and surrounding areas, 
              we deliver quality craftsmanship on every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-6">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-3">Licensed & Insured</h3>
              <p className="text-muted-foreground text-sm">
                Fully licensed and insured for your peace of mind on every project.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-6">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-3">On-Time Delivery</h3>
              <p className="text-muted-foreground text-sm">
                We respect your time and deliver projects on schedule, every time.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-6">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-3">Quality Workmanship</h3>
              <p className="text-muted-foreground text-sm">
                Premium materials and expert craftsmanship on every project.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-3">Customer First</h3>
              <p className="text-muted-foreground text-sm">
                Clear communication and customer satisfaction are our top priorities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Service Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-primary font-medium mb-2">Service Areas</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Proudly Serving Calgary & Surrounding Communities
            </h2>
            <p className="text-muted-foreground text-lg">
              We provide professional construction services throughout the Calgary 
              metropolitan area and nearby communities.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Calgary', 'Airdrie', 'Chestermere', 'Okotoks', 'Cochrane', 'Strathmore', 'High River', 'Crossfield'].map((area) => (
              <div 
                key={area}
                className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/30 transition-colors"
              >
                <p className="font-semibold text-foreground">{area}</p>
                <p className="text-sm text-muted-foreground">Alberta</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
