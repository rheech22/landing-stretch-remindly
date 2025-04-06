"use client";

import { useState } from "react";
import { Modal } from "@/components/modal";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

export function DownloadFromStore() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        asChild
        className="cyberpunk-button bg-primary hover:bg-primary/90 w-full"
        onClick={() => setIsOpen(true)}
      >
        <div>
          <Download className="mr-2 h-4 w-4" />
          Download from App Store
        </div>
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Not Available Yet"
      >
        <div className="space-y-4 text-foreground">
          Sorry. Please check back later.
        </div>
      </Modal>
    </>
  );
}
