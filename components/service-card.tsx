import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
    <Link href={`/services/${service.id}`}>
      <Card className="group h-full hover:shadow-xl transition-all duration-300 border-border hover:border-primary/30 overflow-hidden">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
          <div className="absolute bottom-4 left-4 flex items-center justify-center w-12 h-12 bg-primary rounded-lg">
            <IconComponent className="h-6 w-6 text-primary-foreground" />
          </div>
        </div>
        <CardContent className="p-6">
          <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors mb-3">
            {service.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
            {service.shortDescription}
          </p>
          <Button variant="ghost" size="sm" className="p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent group/btn">
            Learn More 
            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
}
