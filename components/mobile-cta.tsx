"use client";

import Link from "next/link";
import { Phone, FileText } from "lucide-react";

export function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-background/95 backdrop-blur border-t border-border shadow-lg px-4 py-3">
      <div className="flex gap-3">
        <a
          href="tel:+13683385559"
          className="flex-1 flex items-center justify-center gap-2 bg-foreground text-background rounded-xl py-3 font-semibold text-sm active:opacity-80 transition-opacity"
        >
          <Phone className="h-4 w-4" />
          Call Now
        </a>
        <Link
          href="/quote"
          className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-xl py-3 font-semibold text-sm active:opacity-80 transition-opacity"
        >
          <FileText className="h-4 w-4" />
          Free Quote
        </Link>
      </div>
    </div>
  );
}
