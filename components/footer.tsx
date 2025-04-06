"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Twitter, Mail } from "lucide-react";
import { PrivacyPolicy } from "@/components/privacy-policy";
import { TermsOfService } from "@/components/terms-of-service";
import Newsletter from "./newsletter";

export function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/images/icon.png"
                alt="Stretching Remindly Logo"
                width={36}
                height={36}
                className="w-9 h-9"
              />
              <span className="cyberpunk-gradient-text text-xl">
                STRETCH_REMINDLY
              </span>
            </Link>
            <p className="text-muted-foreground mb-4">
              macOS stretching reminder app for healthy work habits
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/rheech22/stretch-remindly"
                className="text-muted-foreground hover:text-primary"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://x.com/rheech22"
                className="text-muted-foreground hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="mailto:stretch.remindly@gmail.com"
                className="text-muted-foreground hover:text-primary"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-orbitron text-lg mb-4">Links</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("features")}
                    className="text-muted-foreground hover:text-primary"
                  >
                    Features
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("screenshots")}
                    className="text-muted-foreground hover:text-primary"
                  >
                    Screenshots
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("faq")}
                    className="text-muted-foreground hover:text-primary"
                  >
                    FAQ
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("download")}
                    className="text-muted-foreground hover:text-primary"
                  >
                    Download
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-orbitron text-lg mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="mailto:stretch.remindly@gmail.com"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <PrivacyPolicy />
                </li>
                <li>
                  <TermsOfService />
                </li>
              </ul>
            </div>
          </div>
          <Newsletter />
        </div>
        <div className="mt-8 pt-8 border-t border-border/40 text-center text-muted-foreground">
          <p>© 2025 STRETCH_REMINDLY // HEALTH_OPTIMIZATION_SYSTEM</p>
        </div>
      </div>
    </footer>
  );
}
