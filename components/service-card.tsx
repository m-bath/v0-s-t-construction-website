import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Home, Hammer, PaintBucket, Building2, Thermometer, Zap, Droplet, ClipboardList, HardHat } from "lucide-react";
import type { Service } from "@/lib/services";

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

interface ServiceCardProps {
  service: Service;
  variant?: "default" | "compact";
}

export function ServiceCard({ service, variant = "default" }: ServiceCardProps) {
  const IconComponent = iconMap[service.icon] || Home;

  if (variant === "compact") {
    return (
      <Link href={`/services/${service.id}`}>
        <Card className="group h-full hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30 overflow-hidden">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg shrink-0 group-hover:bg-primary/20 transition-colors">
                <IconComponent className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {service.shortDescription}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    );
  }

  return (
    <Link href={`/services/${service.id}`} className="block group">
      <div className="relative rounded-2xl overflow-hidden border border-border bg-card transition-all duration-400 hover:shadow-2xl hover:-translate-y-1 hover:border-primary/30 h-full flex flex-col">

        {/* Image area */}
        <div className="relative h-52 overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-108"
          />
          {/* Multi-stop gradient for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

          {/* Icon badge */}
          <div className="absolute bottom-4 left-4 flex items-center justify-center w-11 h-11 bg-primary rounded-xl shadow-lg shadow-primary/40 transition-transform duration-300 group-hover:scale-110">
            <IconComponent className="h-5 w-5 text-primary-foreground" />
          </div>

          {/* Arrow hint — slides in on hover */}
          <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            <ArrowRight className="h-4 w-4 text-white" />
          </div>
        </div>

        {/* Content area */}
        <div className="p-6 flex flex-col flex-1">
          <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-200 mb-2">
            {service.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
            {service.shortDescription}
          </p>

          {/* Learn More link */}
          <div className="mt-5 flex items-center gap-2 text-primary text-sm font-semibold">
            Learn More
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </div>
        </div>

        {/* Bottom accent line that grows on hover */}
        <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-400 group-hover:w-full" />
      </div>
    </Link>
  );
}
