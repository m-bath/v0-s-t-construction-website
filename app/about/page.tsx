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

      {/* Partners Section */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Leadership</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet the Founders
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              S&T Construction is built on the combined expertise and vision of two dedicated industry professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            {/* Tejpal Singh */}
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="relative shrink-0 w-full sm:w-48">
                <div className="relative aspect-[4/5] sm:aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/tejpal-singh.jpg"
                    alt="Tejpal Singh - Co-Founder of S&T Construction"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-primary text-primary-foreground px-3 py-2 rounded-lg shadow-lg hidden sm:block">
                  <p className="text-xl font-bold leading-none">15+</p>
                  <p className="text-xs opacity-90">Yrs Exp.</p>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-1">Co-Founder & Director</p>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Tejpal Singh</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                  A licensed construction contractor with over 15 years of hands-on experience in residential and commercial construction. Tejpal oversees project execution, quality control, and client relations across all S&T projects.
                </p>
                <div className="grid grid-cols-1 gap-2">
                  {["Licensed Contractor", "MEP Specialist", "Fully Insured", "WCB Coverage"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-foreground text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Shey Pahwa */}
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="relative shrink-0 w-full sm:w-48">
                <div className="relative aspect-[4/5] sm:aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/shey-pahwa.jpg"
                    alt="Shey Pahwa - Co-Founder of S&T Construction"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-1">Co-Founder & Director</p>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Shey Pahwa</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                  Shey Pahwa brings extensive expertise in construction management, business operations, and client development. With a strong background in project planning and team leadership, Shey drives the strategic growth and operational excellence of S&T Construction.
                </p>
                <div className="grid grid-cols-1 gap-2">
                  {["Construction Management", "Business Development", "Project Planning", "Team Leadership"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-foreground text-sm">{item}</span>
                    </div>
                  ))}
                </div>
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
              { icon: Users,  value: "Calgary",  label: "Based & Trusted" },
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
