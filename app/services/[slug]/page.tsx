import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ServiceCard } from "@/components/service-card";
import { QuoteForm } from "@/components/quote-form";
import { services, getServiceById } from "@/lib/services";
import { CheckCircle, ArrowRight, Phone, ArrowLeft, Home, Hammer, PaintBucket, HardHat, Building2, Thermometer, Zap, Droplet, ClipboardList } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  home: Home,
  hammer: Hammer,
  paintbrush: PaintBucket,
  roof: HardHat,
  building: Building2,
  thermometer: Thermometer,
  zap: Zap,
  droplet: Droplet,
  clipboard: ClipboardList,
};

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.id,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceById(slug);
  
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} Services in Calgary, AB`,
    description: `${service.shortDescription} Professional ${service.title.toLowerCase()} services in Calgary, Airdrie, Chestermere & Okotoks. Call for free estimate.`,
    openGraph: {
      title: `${service.title} Services | S&T Builders Calgary`,
      description: service.shortDescription,
      images: [{ url: service.image }],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceById(slug);

  if (!service) {
    notFound();
  }

  const IconComponent = iconMap[service.icon] || Home;
  const relatedServices = services.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-14 md:py-20 bg-foreground">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <Link 
              href="/" 
              className="inline-flex items-center text-background/70 hover:text-background text-sm mb-6 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center w-16 h-16 bg-primary rounded-lg">
                <IconComponent className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <p className="text-primary-foreground text-sm font-medium">Our Services</p>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-background">
                  {service.title}
                </h1>
              </div>
            </div>
            <p className="text-xl text-background/80 mb-8 leading-relaxed">
              {service.shortDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <a href="#quote-form">
                  Get Free Estimate
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-transparent border-background/30 text-background hover:bg-background/10 hover:text-background">
                <a href="tel:+15879736792">
                  <Phone className="mr-2 h-5 w-5" />
                  (587) 973-6792
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Service Details */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Professional {service.title} Services in Calgary
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {service.fullDescription}
              </p>

              {/* Features */}
              <h3 className="text-xl font-semibold text-foreground mb-6">
                What&apos;s Included
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Service Area */}
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">Service Areas</h3>
                  <p className="text-muted-foreground">
                    We provide {service.title.toLowerCase()} services throughout Calgary, 
                    Airdrie, Chestermere, Okotoks, Cochrane, and surrounding communities 
                    in Alberta.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar with Quote Form */}
            <div className="lg:col-span-1" id="quote-form">
              <div className="sticky top-24">
                <QuoteForm preselectedService={service.id} variant="compact" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-14 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12 text-center">
            Why Choose S&T Builders for {service.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <p className="text-muted-foreground">Years of Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Completed Projects</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-14 md:py-20 pb-24 md:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Other Services You May Need
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((relatedService) => (
              <ServiceCard key={relatedService.id} service={relatedService} variant="compact" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
