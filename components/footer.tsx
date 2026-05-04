import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/services";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background pb-20 lg:pb-0">
      <div className="container mx-auto px-4 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <div className="flex items-center justify-center w-10 h-10 rounded-md overflow-hidden shrink-0">
                <Image src="/images/snt_logo.png" alt="S&T Builders" width={40} height={40} className="object-contain" />
              </div>
              <span className="font-bold text-lg">S&T Builders</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed mb-5">
              Calgary&apos;s trusted construction partner with over 15 years of experience
              delivering quality residential and commercial projects.
            </p>
            <div className="flex flex-col gap-2.5 text-sm">
              <a href="tel:+15879736792" className="flex items-center gap-2 text-background/70 hover:text-background transition-colors">
                <Phone className="h-4 w-4 shrink-0" />
                (587) 973-6792
              </a>
              <a href="mailto:info@sntbuilder.com" className="flex items-center gap-2 text-background/70 hover:text-background transition-colors">
                <Mail className="h-4 w-4 shrink-0" />
                info@sntbuilder.com
              </a>
              <div className="flex items-start gap-2 text-background/70">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>215 Magnolia Drive SE<br />Calgary, AB</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-base mb-4">Our Services</h3>
            <ul className="flex flex-col gap-2.5">
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
            <h3 className="font-semibold text-base mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-2.5">
              {[
                { href: "/",        label: "Home" },
                { href: "/about",   label: "About Us" },
                { href: "/contact", label: "Contact" },
                { href: "/quote",   label: "Free Quote" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-semibold text-base mb-4">Business Hours</h3>
            <div className="flex items-start gap-2 text-sm text-background/70 mb-5">
              <Clock className="h-4 w-4 mt-0.5 shrink-0" />
              <div className="space-y-1">
                <p>Mon – Fri: 7:00 AM – 6:00 PM</p>
                <p>Sat: 8:00 AM – 4:00 PM</p>
                <p>Sun: Closed</p>
              </div>
            </div>
            <h3 className="font-semibold text-base mb-3">Service Areas</h3>
            <p className="text-sm text-background/70">
              Calgary, Airdrie, Chestermere, Okotoks &amp; surrounding communities
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-10 pt-7">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left">
            <p className="text-sm text-background/60">
              &copy; {new Date().getFullYear()} S&T Builders. All rights reserved.
            </p>
            <p className="text-sm text-background/60">
              Licensed &amp; Insured | Calgary, Alberta
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
