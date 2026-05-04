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
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center w-14 h-14 bg-primary-foreground/10 rounded-full mx-auto mb-4">
                <stat.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <p className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                {stat.value}
              </p>
              <p className="text-primary-foreground/80 text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
