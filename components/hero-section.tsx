"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-20 pb-16 md:pt-24 md:pb-20 overflow-hidden">
      <div className="absolute inset-0 cyberpunk-grid opacity-20"></div>
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <h1 className="cyberpunk-gradient-text cyberpunk-glow text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                  STRETCH_REMINDLY
                </h1>
                <span className="inline-flex items-center rounded-md bg-secondary/20 px-2 py-1 text-xs font-medium text-secondary ring-1 ring-inset ring-secondary/30 animate-pulse">
                  BETA
                </span>
              </div>
              <p className="text-xl md:text-2xl text-muted-foreground">
                <span className="text-secondary">MacOS</span> stretching
                reminder for healthy work habits
              </p>
            </div>
            <p className="max-w-[600px] text-muted-foreground md:text-lg">
              Prevent health issues caused by prolonged computer work.
              Stretching Remindly provides regular stretching reminders and
              guides to optimize your productivity and health.
            </p>
            <div className="max-w-3xl mx-auto mb-10 bg-muted/30 border border-secondary/20 rounded-lg p-4 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
              <div className="text-sm text-left">
                <p className="font-medium text-foreground mb-1">
                  Beta Version Information
                </p>
                <p className="text-muted-foreground">
                  Stretching Remindly is currently in beta testing phase
                  (v0.0.1). While the core functionality is stable, you may
                  encounter occasional bugs or incomplete features. We're
                  actively improving the app based on user feedback. By using
                  this beta version, you're helping us create a better final
                  product!
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                asChild
                size="lg"
                className="cyberpunk-button bg-primary hover:bg-primary/90"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("download")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <a href="#download">Download Now</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="cyberpunk-button"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("features")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <a href="#features">Explore Features</a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[400px] aspect-[9/16] animate-float">
              <div className="absolute inset-0 rounded-xl overflow-hidden border border-secondary/30 shadow-lg shadow-primary/20">
                <Image
                  src="/images/main-screen.png"
                  alt="Stretching Remindly 메인 화면"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-2/3 aspect-[9/16] rounded-xl overflow-hidden border border-primary/30 shadow-lg shadow-primary/20 rotate-6">
                <Image
                  src="/images/stretching-screen.png"
                  alt="Stretching Remindly 스트레칭 화면"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
