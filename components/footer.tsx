import Link from "next/link";
import { services } from "@/lib/services";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-md">
                <span className="text-primary-foreground font-bold text-lg">S&T</span>
              </div>
              <div>
                <span className="font-bold text-lg">S&T Construction</span>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Calgary&apos;s trusted construction partner with over 15 years of experience 
              delivering quality residential and commercial projects.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a href="tel:+14035551234" className="flex items-center gap-2 text-background/70 hover:text-background transition-colors">
                <Phone className="h-4 w-4" />
                (403) 555-1234
              </a>
              <a href="mailto:info@stconstruction.ca" className="flex items-center gap-2 text-background/70 hover:text-background transition-colors">
                <Mail className="h-4 w-4" />
                info@stconstruction.ca
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Our Services</h3>
            <ul className="flex flex-col gap-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link 
                    href={`/services/${service.id}`}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/" className="text-sm text-background/70 hover:text-background transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-background/70 hover:text-background transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-background/70 hover:text-background transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/quote" className="text-sm text-background/70 hover:text-background transition-colors">
                  Free Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas & Hours */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Service Areas</h3>
            <div className="flex items-start gap-2 text-sm text-background/70 mb-4">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              <span>Calgary, Airdrie, Chestermere, Okotoks, and surrounding areas</span>
            </div>
            <h3 className="font-semibold text-lg mb-4 mt-8">Business Hours</h3>
            <div className="flex items-start gap-2 text-sm text-background/70">
              <Clock className="h-4 w-4 mt-0.5 shrink-0" />
              <div>
                <p>Mon - Fri: 7:00 AM - 6:00 PM</p>
                <p>Sat: 8:00 AM - 4:00 PM</p>
                <p>Sun: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60">
              &copy; {new Date().getFullYear()} S&T Construction. All rights reserved.
            </p>
            <p className="text-sm text-background/60">
              Licensed & Insured | Calgary, Alberta
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
