import {
  Clock,
  Bell,
  Timer,
  BookOpen,
  BarChart2,
  Headphones,
  Settings,
  Zap,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function FeaturesSection() {
  const currentFeatures = [
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "MacOS Device Support",
      description: "Start you stretching journey on your MacOS device.",
    },
    {
      icon: <Bell className="h-10 w-10 text-primary" />,
      title: "Customizable Reminders",
      description:
        "Provides stretching reminders based on user-defined intervals to form healthy work habits.",
    },
    {
      icon: <Timer className="h-10 w-10 text-primary" />,
      title: "Stretching Timer",
      description:
        "Offers a visual timer to guide you through your stretching sessions.",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: "Stretching Tips",
      description:
        "Provides step-by-step guides and tips for effective stretching.",
    },
  ];

  const upcomingFeatures = [
    {
      icon: <BarChart2 className="h-10 w-10 text-secondary" />,
      title: "History & Dashboard",
      description:
        "Track and analyze your stretching activities with a comprehensive dashboard.",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-secondary" />,
      title: "Enhanced Stretching Guides",
      description: "More diverse and detailed stretching guides and programs.",
    },
    {
      icon: <Settings className="h-10 w-10 text-secondary" />,
      title: "Custom Programs",
      description: "Create and save your own stretching programs.",
    },
    {
      icon: <Headphones className="h-10 w-10 text-secondary" />,
      title: "Voice Guidance",
      description: "Audio guidance to help you stretch more effectively.",
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 cyberpunk-grid opacity-10"></div>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-block rounded-full bg-muted px-3 py-1 text-sm font-medium mb-4">
            <Zap className="w-4 h-4 inline mr-1 text-primary" />
            <span>Key Features</span>
          </div>
          <h2 className="cyberpunk-gradient-text text-3xl md:text-4xl mb-4">
            SYSTEM_FEATURES
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            Stretching Remindly offers various features to optimize your health
            and productivity.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {currentFeatures.map((feature, index) => (
            <Card
              key={index}
              className="cyberpunk-border bg-card/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-2">{feature.icon}</div>
                <CardTitle className="font-orbitron">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 mb-12 flex flex-col items-center text-center">
          <div className="inline-block rounded-full bg-muted px-3 py-1 text-sm font-medium mb-4">
            <Zap className="w-4 h-4 inline mr-1 text-secondary" />
            <span>Upcoming Features</span>
          </div>
          <h2 className="cyberpunk-gradient-text text-3xl md:text-4xl mb-4">
            UPCOMING_FEATURES
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            Features in development for an even better experience.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {upcomingFeatures.map((feature, index) => (
            <Card
              key={index}
              className="cyberpunk-border bg-card/50 backdrop-blur-sm border-secondary/30"
            >
              <CardHeader>
                <div className="mb-2">{feature.icon}</div>
                <CardTitle className="font-orbitron">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
