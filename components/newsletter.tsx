"use client";

import { newsletter } from "@/app/domain/newsletter";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const { error, message } = await newsletter.subscribe(email);

    if (error) {
      toast({
        title: "Subscription Failed",
        description: message || "Could not subscribe. Please try again.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Subscribed!",
        description: "Thanks for subscribing to our newsletter.",
      });
    }
    setEmail("");
    setIsLoading(false);
  };
  return (
    <div>
      <h3 className="font-orbitron text-lg mb-4">Newsletter</h3>
      <p className="text-muted-foreground mb-4">
        Get the latest updates and feature news.
      </p>
      <form className="flex gap-2" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email address"
          className="flex-1 px-3 py-2 bg-muted rounded-md border border-border"
          disabled={isLoading}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          type="submit"
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          disabled={isLoading}
        >
          {isLoading ? <Loader2 className="animate-spin mr-2 h-4 w-4" /> : null}
          Subscribe
        </Button>
      </form>
    </div>
  );
};

export default Newsletter;
