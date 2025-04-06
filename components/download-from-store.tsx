"use client";

import { useState } from "react";
import { Modal } from "@/components/modal";
import { Button } from "./ui/button";
import { Construction } from "lucide-react";

export function DownloadFromStore() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        asChild
        className="cyberpunk-button bg-primary w-full opacity-60 hovver:bg-primary"
        onClick={() => setIsOpen(true)}
      >
        <div>
          <Construction className="mr-2 h-4 w-4" />
          <span className="">Download from App Store</span>
          <span className="text-cyberpunk">(Coming Soon)</span>
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
