"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Download, Loader2 } from "lucide-react";
import { download } from "@/app/domain/download";
import { useToast } from "@/hooks/use-toast";

export function DownloadDirectly() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleDownload = async () => {
    toast({
      title: "[ INFO ]",
      description:
        "Sorry, It's not available yet. You can clone this GitHub project and run it locally",
    });
    //setIsLoading(true);
    //await download.latest(({ error }) => {
    //  if (error) {
    //    toast({
    //      title: "[ ERROR ]",
    //      description:
    //        "Failed to download the latest version of Stretching Remindly.",
    //    });
    //    setIsLoading(false);
    //    return;
    //  }
    //  toast({
    //    title: "[ INFO ]",
    //    description: "Starting the download...",
    //  });
    //  setIsLoading(false);
    //});
  };

  return (
    <Button
      asChild
      className="cyberpunk-button bg-primary hover:bg-primary/90 w-full"
      onClick={handleDownload}
      disabled={isLoading}
    >
      <div>
        {isLoading ? (
          <Loader2 className="animate-spin mr-2 h-4 w-4" />
        ) : (
          <Download className="mr-2 h-4 w-4" />
        )}
        Direct Download (.dmg)
      </div>
    </Button>
  );
}
