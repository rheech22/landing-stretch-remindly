import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Github, ExternalLink, AlertCircle, Zap } from "lucide-react";
import { DownloadFromStore } from "./download-from-store";

export function DownloadSection() {
  return (
    <section id="download" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 cyberpunk-grid opacity-10"></div>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-4">
          <div className="inline-block rounded-full bg-muted px-3 py-1 text-sm font-medium mb-4">
            <Download className="w-4 h-4 inline mr-1 text-primary" />
            <span>Download</span>
          </div>
          <div className="flex items-center gap-3">
            <h2 className="cyberpunk-gradient-text text-3xl md:text-4xl mb-4">
              GET_STARTED
            </h2>
            <span className="inline-flex items-center rounded-md bg-secondary/20 px-2 py-1 text-xs font-medium text-secondary ring-1 ring-inset ring-secondary/30 animate-pulse">
              BETA
            </span>
          </div>
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            Download Stretching Remindly now and start developing healthy work
            habits.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-10 bg-muted/30 border border-secondary/20 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
          <div className="text-sm text-left">
            <p className="font-medium text-foreground mb-1">
              Beta Version Information
            </p>
            <p className="text-muted-foreground">
              Stretching Remindly is currently in beta testing phase (v0.0.1).
              While the core functionality is stable, you may encounter
              occasional bugs or incomplete features. We're actively improving
              the app based on user feedback. By using this beta version, you're
              helping us create a better final product!
            </p>
          </div>
        </div>

        <Card className="cyberpunk-border bg-card/50 backdrop-blur-sm max-w-sm mx-auto">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="mb-4 p-3 rounded-full bg-muted/50">
              <Image
                src="/images/icon.png"
                alt="Stretching Remindly Icon"
                width={80}
                height={80}
                className="w-20 h-20"
              />
            </div>
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-orbitron text-xl">Download for MacOS</h3>
              <span className="inline-flex items-center rounded-md bg-secondary/20 px-2 py-1 text-xs font-medium text-secondary">
                BETA
              </span>
            </div>
            <p className="text-muted-foreground mb-6">
              Get the latest beta version of Stretching Remindly.
            </p>
            <div className="flex flex-col gap-3 w-full">
              <DownloadFromStore />
              <Button
                asChild
                variant="outline"
                className="cyberpunk-button w-full"
              >
                <a href="#">
                  <Download className="mr-2 h-4 w-4" />
                  Direct Download (.dmg)
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="mx-auto mt-16 bg-muted/30 border border-secondary/20 rounded-lg py-4 px-8 flex items-start gap-3 justify-center w-fit">
          <Zap className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
          <p className="text-muted-foreground text-sm">
            System Requirements: macOS 11.0 or later
          </p>
        </div>
      </div>
    </section>
  );
}
