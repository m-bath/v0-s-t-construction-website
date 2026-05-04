import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CTASection } from "@/components/cta-section";
import { CheckCircle, Award, Users, Clock, Shield, Target, Heart, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about S&T Construction, Calgary's trusted construction contractor with 15+ years of experience. Meet owner Tejpal Singh and our commitment to quality craftsmanship.",
};

const values = [
  { icon: Shield, title: "Integrity",       description: "We stand behind our work with honest communication and transparent pricing." },
  { icon: Target, title: "Excellence",      description: "We strive for perfection in every project, no matter the size or scope." },
  { icon: Heart,  title: "Customer Focus",  description: "Your satisfaction is our priority. We treat every home as if it were our own." },
  { icon: Clock,  title: "Reliability",     description: "We show up on time, every time, and deliver projects on schedule." },
];

const milestones = [
  { year: "2009", event: "S&T Construction founded in Calgary" },
  { year: "2012", event: "Expanded to include MEP consulting services" },
  { year: "2015", event: "Reached 100 completed projects milestone" },
  { year: "2018", event: "Expanded service area to Airdrie, Chestermere & Okotoks" },
  { year: "2021", event: "Completed 400th project" },
  { year: "2024", event: "Celebrating 15 years of service to Calgary" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-14 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">About Us</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-5">
              Building Calgary&apos;s Future Since 2009
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              S&T Construction is a family-owned business dedicated to delivering
              exceptional construction services to Calgary and surrounding communities.
              With over 15 years of experience, we&apos;ve built our reputation on quality
              workmanship and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Owner Section */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden max-w-sm mx-auto lg:max-w-none">
                <Image
                  src="/images/tejpal-singh.jpg"
                  alt="Tejpal Singh - Owner of S&T Construction"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-primary text-primary-foreground p-4 sm:p-6 rounded-xl shadow-lg hidden sm:block">
                <p className="text-3xl sm:text-4xl font-bold">15+</p>
                <p className="text-sm opacity-90">Years Experience</p>
              </div>
            </div>
            <div>
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Meet the Owner</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-5">
                Tejpal Singh
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-5 leading-relaxed">
                Tejpal Singh is a licensed construction contractor with over 15 years
                of hands-on experience in residential and commercial construction.
                Born in India and now a proud Calgarian, Tejpal founded S&T Construction
                with a vision to bring exceptional craftsmanship and honest service to
                the Calgary construction industry.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground mb-7 leading-relaxed">
                With expertise spanning basement development, MEP systems, roofing,
                and complete home renovations, Tejpal personally oversees every project
                to ensure it meets his exacting standards.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["Licensed Contractor", "Fully Insured", "MEP Specialist", "WCB Coverage"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-foreground text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-14 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Our Values</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Stand For
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              These core values guide everything we do at S&T Construction.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-border bg-card">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mx-auto mb-4">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Our Journey</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              15 Years of Excellence
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              From humble beginnings to becoming one of Calgary&apos;s most trusted
              construction companies.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-5 sm:gap-6 pb-7 last:pb-0 relative">
                {index !== milestones.length - 1 && (
                  <div className="absolute left-[23px] sm:left-[27px] top-12 w-0.5 h-[calc(100%-48px)] bg-border" />
                )}
                <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-primary text-primary-foreground rounded-full shrink-0 font-bold text-sm sm:text-base">
                  {milestone.year.slice(2)}
                </div>
                <div className="pt-2 sm:pt-3">
                  <p className="text-sm text-primary font-medium">{milestone.year}</p>
                  <p className="text-foreground font-medium text-sm sm:text-base">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-14 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Our Team</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-5">
                Skilled Professionals You Can Trust
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-5 leading-relaxed">
                Our team consists of licensed tradespeople with years of experience
                in their respective fields. From electricians and plumbers to framers
                and finish carpenters, every member is committed to exceptional results.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground mb-7 leading-relaxed">
                We invest in ongoing training to ensure our team stays current with
                the latest building codes, techniques, and technologies.
              </p>
              <Button asChild>
                <Link href="/quote">
                  Work With Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2 relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src="/images/team.jpg" alt="S&T Construction Team" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-12 sm:py-16 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { icon: Award,  value: "15+",      label: "Years Experience" },
              { icon: Users,  value: "500+",     label: "Happy Clients" },
              { icon: Clock,  value: "100%",     label: "On-Time Delivery" },
              { icon: Shield, value: "Licensed", label: "& Insured" },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="text-center">
                <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-primary-foreground mx-auto mb-3" />
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-1">{value}</p>
                <p className="text-primary-foreground/80 text-xs sm:text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
