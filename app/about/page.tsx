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
  {
    icon: Shield,
    title: "Integrity",
    description: "We stand behind our work with honest communication and transparent pricing.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for perfection in every project, no matter the size or scope.",
  },
  {
    icon: Heart,
    title: "Customer Focus",
    description: "Your satisfaction is our priority. We treat every home as if it were our own.",
  },
  {
    icon: Clock,
    title: "Reliability",
    description: "We show up on time, every time, and deliver projects on schedule.",
  },
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
      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium mb-2">About Us</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Building Calgary&apos;s Future Since 2009
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              S&T Construction is a family-owned business dedicated to delivering 
              exceptional construction services to Calgary and surrounding communities. 
              With over 15 years of experience, we&apos;ve built our reputation on quality 
              workmanship and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Owner Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="/images/tejpal-singh.jpg"
                  alt="Tejpal Singh - Owner of S&T Construction"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg hidden md:block">
                <p className="text-4xl font-bold">15+</p>
                <p className="text-sm opacity-90">Years Experience</p>
              </div>
            </div>
            <div>
              <p className="text-primary font-medium mb-2">Meet the Owner</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Tejpal Singh
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Tejpal Singh is a licensed construction contractor with over 15 years 
                of hands-on experience in residential and commercial construction. 
                Born in India and now a proud Calgarian, Tejpal founded S&T Construction 
                with a vision to bring exceptional craftsmanship and honest service to 
                the Calgary construction industry.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                With expertise spanning basement development, MEP systems, roofing, 
                and complete home renovations, Tejpal personally oversees every project 
                to ensure it meets his exacting standards. His commitment to quality 
                and customer satisfaction has made S&T Construction one of Calgary&apos;s 
                most trusted contractors.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Licensed Contractor</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Fully Insured</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground">MEP Specialist</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground">WCB Coverage</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-medium mb-2">Our Values</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Stand For
            </h2>
            <p className="text-muted-foreground text-lg">
              These core values guide everything we do at S&T Construction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-border bg-card">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mx-auto mb-4">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-medium mb-2">Our Journey</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              15 Years of Excellence
            </h2>
            <p className="text-muted-foreground text-lg">
              From humble beginnings to becoming one of Calgary&apos;s most trusted 
              construction companies.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className="flex gap-6 pb-8 last:pb-0 relative"
              >
                {index !== milestones.length - 1 && (
                  <div className="absolute left-[27px] top-12 w-0.5 h-[calc(100%-48px)] bg-border" />
                )}
                <div className="flex items-center justify-center w-14 h-14 bg-primary text-primary-foreground rounded-full shrink-0 font-bold">
                  {milestone.year.slice(2)}
                </div>
                <div className="pt-3">
                  <p className="text-sm text-primary font-medium">{milestone.year}</p>
                  <p className="text-foreground font-medium">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-medium mb-2">Our Team</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Skilled Professionals You Can Trust
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our team consists of licensed tradespeople with years of experience 
                in their respective fields. From electricians and plumbers to framers 
                and finish carpenters, every member of the S&T Construction team is 
                committed to delivering exceptional results.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We invest in ongoing training to ensure our team stays current with 
                the latest building codes, techniques, and technologies. This commitment 
                to excellence is what sets us apart from other Calgary contractors.
              </p>
              <Button asChild>
                <Link href="/quote">
                  Work With Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/team.jpg"
                alt="S&T Construction Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Award className="h-8 w-8 text-primary-foreground mx-auto mb-4" />
              <p className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">15+</p>
              <p className="text-primary-foreground/80 text-sm">Years Experience</p>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 text-primary-foreground mx-auto mb-4" />
              <p className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">500+</p>
              <p className="text-primary-foreground/80 text-sm">Happy Clients</p>
            </div>
            <div className="text-center">
              <Clock className="h-8 w-8 text-primary-foreground mx-auto mb-4" />
              <p className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">100%</p>
              <p className="text-primary-foreground/80 text-sm">On-Time Delivery</p>
            </div>
            <div className="text-center">
              <Shield className="h-8 w-8 text-primary-foreground mx-auto mb-4" />
              <p className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">Licensed</p>
              <p className="text-primary-foreground/80 text-sm">& Insured</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
