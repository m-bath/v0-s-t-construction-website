export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  image: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: "basement-development",
    title: "Basement Development",
    shortDescription: "Transform your unfinished basement into a beautiful, functional living space that adds value to your Calgary home.",
    fullDescription: "Our basement development services turn your empty, unfinished basement into a stunning living space tailored to your lifestyle. Whether you envision a home theater, guest suite, home office, or recreational area, our experienced team handles every aspect of the development process from design to final touches.",
    features: [
      "Custom design and layout planning",
      "Proper moisture control and insulation",
      "Electrical and plumbing rough-ins",
      "Permit acquisition and inspections",
      "Quality finishing and trim work",
      "10-year structural warranty"
    ],
    image: "/images/basement-development.jpg",
    icon: "home"
  },
  {
    id: "basement-renovation",
    title: "Basement Renovation",
    shortDescription: "Upgrade your existing basement with modern finishes, improved layouts, and contemporary design elements.",
    fullDescription: "Revitalize your dated basement with our comprehensive renovation services. We specialize in modernizing existing basements with updated layouts, improved lighting, new flooring, and contemporary finishes that match current design trends while maximizing your space's potential.",
    features: [
      "Complete layout redesign",
      "Modern lighting solutions",
      "Updated flooring options",
      "New drywall and ceiling systems",
      "Bathroom and kitchen additions",
      "Energy-efficient upgrades"
    ],
    image: "/images/basement-development.jpg",
    icon: "hammer"
  },
  {
    id: "flooring-framing-painting",
    title: "Flooring, Framing & Painting",
    shortDescription: "Expert flooring installation, structural framing, and professional painting services for residential and commercial projects.",
    fullDescription: "Our comprehensive finishing services cover all your flooring, framing, and painting needs. From hardwood and laminate flooring installation to structural framing for renovations and new builds, plus professional interior and exterior painting services that transform any space.",
    features: [
      "Hardwood and laminate flooring",
      "Tile and vinyl installation",
      "Structural and non-structural framing",
      "Interior and exterior painting",
      "Trim and molding installation",
      "Texture and drywall finishing"
    ],
    image: "/images/flooring.jpg",
    icon: "paintbrush"
  },
  {
    id: "roofing",
    title: "Roofing",
    shortDescription: "Professional roofing installation, repair, and replacement services built to withstand Calgary's harsh weather conditions.",
    fullDescription: "Protect your home with our professional roofing services designed specifically for Calgary's challenging climate. We offer complete roofing solutions including new installations, repairs, and full replacements using premium materials that stand up to Alberta's extreme temperature variations and weather patterns.",
    features: [
      "Asphalt shingle installation",
      "Metal roofing systems",
      "Emergency roof repairs",
      "Ice dam prevention",
      "Proper attic ventilation",
      "25-year manufacturer warranty"
    ],
    image: "/images/roofing.jpg",
    icon: "roof"
  },
  {
    id: "siding",
    title: "Siding",
    shortDescription: "Durable, attractive siding solutions that enhance curb appeal and protect your home from Alberta's elements.",
    fullDescription: "Enhance your home's exterior with our professional siding installation services. We work with a variety of materials including vinyl, fiber cement, and engineered wood to provide durable, low-maintenance solutions that improve energy efficiency and dramatically boost your property's curb appeal.",
    features: [
      "Vinyl siding installation",
      "Fiber cement options",
      "Engineered wood siding",
      "Weather barrier installation",
      "Soffit and fascia work",
      "Color consultation services"
    ],
    image: "/images/siding.jpg",
    icon: "building"
  },
  {
    id: "hvac",
    title: "HVAC Services",
    shortDescription: "Complete heating, ventilation, and air conditioning solutions for optimal home comfort year-round.",
    fullDescription: "Keep your Calgary home comfortable through every season with our comprehensive HVAC services. From new furnace installations to air conditioning systems and complete ventilation solutions, we ensure your home maintains the perfect temperature while maximizing energy efficiency.",
    features: [
      "Furnace installation and repair",
      "Air conditioning systems",
      "Heat pump solutions",
      "Ductwork installation",
      "Indoor air quality systems",
      "24/7 emergency service"
    ],
    image: "/images/hvac.jpg",
    icon: "thermometer"
  },
  {
    id: "electrical",
    title: "Electrical Services",
    shortDescription: "Licensed electrical services for residential and commercial properties, ensuring safety and code compliance.",
    fullDescription: "Our licensed electricians provide comprehensive electrical services for all your residential and commercial needs. From new installations and panel upgrades to troubleshooting and repairs, we ensure your electrical systems are safe, efficient, and fully compliant with current Alberta electrical codes.",
    features: [
      "Panel upgrades and replacements",
      "New circuit installation",
      "Lighting design and installation",
      "EV charger installation",
      "Smart home wiring",
      "Safety inspections"
    ],
    image: "/images/electrical.jpg",
    icon: "zap"
  },
  {
    id: "plumbing",
    title: "Plumbing Services",
    shortDescription: "Reliable plumbing installation, repair, and maintenance services for homes and businesses across Calgary.",
    fullDescription: "From fixture installation to complete plumbing system overhauls, our experienced plumbers handle projects of all sizes. We specialize in both residential and commercial plumbing, offering reliable solutions that ensure your water systems function flawlessly for years to come.",
    features: [
      "Fixture installation",
      "Pipe repair and replacement",
      "Water heater services",
      "Drain cleaning",
      "Bathroom renovations",
      "Backflow prevention"
    ],
    image: "/images/plumbing.jpg",
    icon: "droplet"
  },
  {
    id: "mep-consulting",
    title: "MEP Consulting Services",
    shortDescription: "Expert mechanical, electrical, and plumbing consulting for construction projects of all scales.",
    fullDescription: "Leverage our 15+ years of industry experience with our comprehensive MEP consulting services. We provide expert guidance on mechanical, electrical, and plumbing systems for new construction and renovation projects, ensuring optimal design, efficiency, and code compliance from concept to completion.",
    features: [
      "System design consultation",
      "Energy efficiency analysis",
      "Code compliance review",
      "Project coordination",
      "Cost estimation services",
      "Construction oversight"
    ],
    image: "/images/mep-consulting.jpg",
    icon: "clipboard"
  }
];

export function getServiceById(id: string): Service | undefined {
  return services.find(service => service.id === id);
}
