import { Award, Users, Home, Clock } from "lucide-react";

const stats = [
  { icon: Clock,  value: "15+",      label: "Years of Experience" },
  { icon: Home,   value: "Calgary",   label: "Based & Trusted" },
  { icon: Users,  value: "100%",     label: "Client Satisfaction" },
  { icon: Award,  value: "Licensed", label: "& Fully Insured" },
];

export function StatsSection() {
  return (
    <section className="py-12 sm:py-16 bg-primary relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.15) 20px, rgba(255,255,255,0.15) 21px)",
        }}
      />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-primary-foreground/15 rounded-2xl overflow-hidden">
          {stats.map((stat, index) => (
            <div key={index} className="text-center px-4 py-6 sm:px-6 bg-primary">
              <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-primary-foreground/15 rounded-xl mx-auto mb-3 sm:mb-4 border border-primary-foreground/20">
                <stat.icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary-foreground" />
              </div>
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-1 tracking-tight">
                {stat.value}
              </p>
              <p className="text-primary-foreground/75 text-xs sm:text-sm font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
