"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Menu, X, ChevronDown, Phone, Mail, MapPin,
  Home, Hammer, PaintBucket, Building2, Thermometer,
  Zap, Droplet, ClipboardList, HardHat, ArrowRight,
} from "lucide-react";
import { services } from "@/lib/services";

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

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const closeMenu = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120);
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-foreground text-background hidden lg:block">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-10 text-xs text-background/70">
            <div className="flex items-center gap-6">
              <a href="tel:+13683385559" className="flex items-center gap-1.5 hover:text-background transition-colors">
                <Phone className="h-3 w-3" />
                (368) 338-5559
              </a>
              <a href="mailto:info@sntbuilder.com" className="flex items-center gap-1.5 hover:text-background transition-colors">
                <Mail className="h-3 w-3" />
                info@sntbuilder.com
              </a>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="h-3 w-3" />
              215 Magnolia Drive SE, Calgary, AB · Mon–Fri 7am–6pm
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-background/97 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border shadow-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex h-16 items-center justify-between">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg overflow-hidden shadow-sm">
                <Image src="/images/snt_logo.png" alt="S&T Builders" width={40} height={40} className="object-contain" />
              </div>
              <div className="hidden sm:block">
                <span className="font-bold text-lg text-foreground leading-tight">S&T Builders</span>
                <span className="block text-xs text-muted-foreground">Calgary, AB</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Home
              </Link>

              {/* Services mega-menu trigger */}
              <div className="relative" onMouseEnter={openMenu} onMouseLeave={closeMenu}>
                <button className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors py-6 outline-none">
                  Services
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Mega-menu panel */}
                {servicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[720px] bg-background border border-border rounded-2xl shadow-2xl shadow-foreground/10 overflow-hidden">
                    {/* Panel header */}
                    <div className="px-6 py-4 border-b border-border bg-secondary/60 flex items-center justify-between">
                      <div>
                        <p className="font-bold text-foreground text-sm">Our Services</p>
                        <p className="text-xs text-muted-foreground mt-0.5">Professional construction across Calgary &amp; area</p>
                      </div>
                      <Link
                        href="/services/basement-development"
                        className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
                        onClick={() => setServicesOpen(false)}
                      >
                        View all <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>

                    {/* Service grid */}
                    <div className="grid grid-cols-3 gap-px bg-border p-px">
                      {services.map((service) => {
                        const Icon = iconMap[service.icon] || Home;
                        return (
                          <Link
                            key={service.id}
                            href={`/services/${service.id}`}
                            onClick={() => setServicesOpen(false)}
                            className="group flex items-start gap-3 p-4 bg-background hover:bg-primary/5 transition-colors duration-150"
                          >
                            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors shrink-0 mt-0.5">
                              <Icon className="h-4 w-4 text-primary" />
                            </div>
                            <div className="min-w-0">
                              <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                                {service.title}
                              </p>
                              <p className="text-xs text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
                                {service.shortDescription}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    {/* Panel footer */}
                    <div className="px-6 py-3 bg-secondary/60 border-t border-border flex items-center justify-between">
                      <p className="text-xs text-muted-foreground">
                        15+ years · Licensed &amp; insured · Free estimates
                      </p>
                      <Link
                        href="/quote"
                        onClick={() => setServicesOpen(false)}
                        className="text-xs font-semibold text-primary-foreground bg-primary hover:bg-primary/90 transition-colors px-3 py-1.5 rounded-lg"
                      >
                        Get Free Quote
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Button asChild className="shadow-sm">
                <Link href="/quote">Get Free Quote</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md hover:bg-secondary transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-border">
              <div className="flex flex-col gap-4">
                <Link
                  href="/"
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                {/* Collapsible Services */}
                <div>
                  <button
                    className="flex items-center justify-between w-full text-sm font-semibold text-foreground py-1"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  >
                    Services
                    <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {mobileServicesOpen && (
                    <div className="grid grid-cols-2 gap-x-2 gap-y-1 pt-3 pl-1">
                      {services.map((service) => {
                        const Icon = iconMap[service.icon] || Home;
                        return (
                          <Link
                            key={service.id}
                            href={`/services/${service.id}`}
                            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-1.5"
                            onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); }}
                          >
                            <Icon className="h-3.5 w-3.5 text-primary shrink-0" />
                            {service.title}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
                <Link
                  href="/about"
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <div className="pt-4 border-t border-border flex flex-col gap-3">
                  <a href="tel:+13683385559" className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <Phone className="h-4 w-4" />
                    (368) 338-5559
                  </a>
                  <Button asChild className="w-full">
                    <Link href="/quote" onClick={() => setMobileMenuOpen(false)}>Get Free Quote</Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
