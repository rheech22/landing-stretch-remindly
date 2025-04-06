"use client";

import React from "react";
import { HelpCircle } from "lucide-react";
import { CustomAccordion } from "./custom-accordion";

export function FaqSection() {
  const faqs = [
    {
      question: "What is Stretching Remindly?",
      answer:
        "Stretching Remindly is an application designed to promote healthy work habits. It sends timely reminders for stretching breaks during extended computer sessions, helping prevent musculoskeletal issues like neck strain, back pain, and carpal tunnel syndrome. The app features a cyberpunk-inspired interface with customizable timers and detailed stretching guides.",
    },
    {
      question: "How do I set reminder times?",
      answer:
        "Setting reminder times in Stretching Remindly is simple and intuitive. Navigate to the Settings screen by clicking the gear icon. You'll find two sliders: one for Work Duration (1-120 minutes) and another for Stretch Duration (1-20 minutes). Adjust these sliders to your preferred intervals, then click 'Save Configuration'. The app will now remind you to stretch based on your custom schedule. You can create different configurations for various work scenarios.",
    },
    {
      question: "What kind of stretching guides are provided?",
      answer:
        "Stretching Remindly offers comprehensive stretching guides targeting areas most affected by prolonged computer use. These include: 1) Neck stretches to relieve tension and prevent stiffness, 2) Shoulder and upper back exercises to improve posture, 3) Wrist and hand stretches to prevent carpal tunnel syndrome, 4) Lower back movements to reduce spinal pressure, and 5) Eye exercises to reduce digital eye strain. Each guide includes step-by-step instructions, visual cues, and optimization tips for maximum effectiveness.",
    },
    {
      question: "Can I customize the stretching routines?",
      answer:
        "Currently, Stretching Remindly offers a curated selection of effective stretching routines. However, we're actively developing a custom routine builder that will allow you to create and save personalized stretching programs. This feature will be available in an upcoming update. The custom routine builder will let you select specific stretches, set durations for each movement, and create themed routines (like 'Morning Energizer' or 'End-of-Day Relaxation'). You'll also be able to share your custom routines with other users.",
    },
    {
      question: "Does the app work offline?",
      answer:
        "Yes, Stretching Remindly is designed to work completely offline. Once installed, all features—including timers, stretching guides, and settings—function without an internet connection. This makes it perfect for use during travel, in areas with limited connectivity, or when you want to minimize distractions. The app stores all necessary resources locally on your device, ensuring smooth performance regardless of your connection status.",
    },
    {
      question: "How does Stretching Remindly handle notifications?",
      answer:
        "Stretching Remindly uses macOS's native notification system to deliver timely, non-intrusive reminders. When your work session timer completes, you'll receive a notification with sound and visual alerts (customizable in settings). The notification includes a direct action button to start your stretching session immediately. You can also configure the notification style—from subtle reminders to more prominent alerts—depending on your preference. The app respects your system's Do Not Disturb settings while ensuring you don't miss important stretching breaks.",
    },
    //{
    //  question: "Where can I download the app?",
    //  answer:
    //    "Stretching Remindly is available through multiple channels: 1) macOS App Store - Search for 'Stretching Remindly' and download directly to your device, 2) Our official website - Visit the download section for the latest version, 3) GitHub releases page - For those who prefer direct downloads. All versions are digitally signed and verified for security. We recommend downloading from official sources to ensure you receive authentic, malware-free software with all the latest features and security updates.",
    //},
    {
      question: "What should I do if I encounter issues while using the app?",
      answer:
        "If you experience any issues with Stretching Remindly, we're here to help! First, check our troubleshooting guide in the app's help section. For persistent problems, you can: 1) Email our support team at stretch.remindly@gmail.com with details about your issue, 2) Visit our GitHub repository to report bugs or request features, 3) Check our community forum for solutions from other users. Our support team typically responds ASAP. For critical issues, include your system information and any error messages to help us resolve your problem faster.",
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 cyberpunk-grid opacity-10 pointer-events-none"></div>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-block rounded-full bg-muted px-3 py-1 text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4 inline mr-1 text-primary" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="cyberpunk-gradient-text text-3xl md:text-4xl mb-4">
            FAQ_SECTION
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            Common questions about Stretching Remindly.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="divide-y divide-border/40">
            <CustomAccordion items={faqs} />
          </div>
        </div>
      </div>
    </section>
  );
}
