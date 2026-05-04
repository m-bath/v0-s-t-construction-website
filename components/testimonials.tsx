import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Michael Thompson",
    location: "Calgary, AB",
    project: "Basement Development",
    rating: 5,
    text: "S&T Construction transformed our unfinished basement into an amazing entertainment space. Tejpal and his team were professional, punctual, and the quality of work exceeded our expectations. Highly recommend!",
  },
  {
    name: "Sarah Chen",
    location: "Airdrie, AB",
    project: "Complete Home Renovation",
    rating: 5,
    text: "We hired S&T for a complete renovation including HVAC, electrical, and plumbing upgrades. The team was incredibly knowledgeable and kept us informed throughout the entire process. Outstanding work!",
  },
  {
    name: "David & Lisa Morrison",
    location: "Chestermere, AB",
    project: "Roofing & Siding",
    rating: 5,
    text: "After the hailstorm damaged our roof and siding, S&T was quick to respond. They handled everything professionally, from insurance coordination to final inspection. Our home looks better than ever.",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Don&apos;t just take our word for it. Here&apos;s what Calgary homeowners 
            have to say about working with S&T Construction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border bg-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <p className="text-foreground mb-6 leading-relaxed">
                  {testimonial.text}
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  <p className="text-sm text-primary mt-1">{testimonial.project}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
