import { Award, Users, Home, Clock } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: "15+",
    label: "Years of Experience",
  },
  {
    icon: Home,
    value: "500+",
    label: "Projects Completed",
  },
  {
    icon: Users,
    value: "100%",
    label: "Client Satisfaction",
  },
  {
    icon: Award,
    value: "Licensed",
    label: "& Fully Insured",
  },
];

export function StatsSection() {
  return (
    <section className="py-16 bg-primary relative overflow-hidden">
      {/* Subtle diagonal pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.15) 20px, rgba(255,255,255,0.15) 21px)",
        }}
      />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-primary-foreground/20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center px-6 py-2 first:pl-0 last:pr-0">
              <div className="flex items-center justify-center w-14 h-14 bg-primary-foreground/15 rounded-xl mx-auto mb-4 border border-primary-foreground/20">
                <stat.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <p className="text-4xl md:text-5xl font-bold text-primary-foreground mb-1 tracking-tight">
                {stat.value}
              </p>
              <p className="text-primary-foreground/75 text-sm font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
