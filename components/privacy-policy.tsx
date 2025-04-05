"use client"

import { useState } from "react"
import { Modal } from "@/components/modal"

export function PrivacyPolicy() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="text-muted-foreground hover:text-primary">
        Privacy Policy
      </button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Privacy Policy"
        subtitle="Last updated: April 6, 2025"
      >
        <div className="space-y-4 text-foreground">
          <h3 className="text-lg font-semibold">1. Introduction</h3>
          <p>
            Welcome to Stretching Remindly. We respect your privacy and are committed to protecting your personal data.
            This privacy policy will inform you about how we look after your personal data when you use our application
            and tell you about your privacy rights.
          </p>

          <h3 className="text-lg font-semibold">2. Data We Collect</h3>
          <p>
            Stretching Remindly is designed with privacy in mind. We collect minimal data necessary for the functioning
            of the application:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>User preferences and settings</li>
            <li>Usage statistics (anonymized)</li>
            <li>Stretching history (stored locally on your device)</li>
          </ul>

          <h3 className="text-lg font-semibold">3. How We Use Your Data</h3>
          <p>We use the collected data solely for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide and maintain our service</li>
            <li>To improve the application based on how it's being used</li>
            <li>To personalize your experience</li>
          </ul>

          <h3 className="text-lg font-semibold">4. Data Storage</h3>
          <p>
            Most data is stored locally on your device. We do not store personal information on our servers unless
            explicitly provided by you for support purposes.
          </p>

          <h3 className="text-lg font-semibold">5. Third-Party Services</h3>
          <p>Stretching Remindly does not share your data with third parties except in the following cases:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>When required by law</li>
            <li>With your explicit consent</li>
          </ul>

          <h3 className="text-lg font-semibold">6. Your Rights</h3>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of your personal data</li>
            <li>Request deletion of your data</li>
            <li>Object to processing of your personal data</li>
            <li>Request restriction of processing your personal data</li>
          </ul>

          <h3 className="text-lg font-semibold">7. Changes to This Policy</h3>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page and updating the "Last updated" date.
          </p>

          <h3 className="text-lg font-semibold">8. Contact Us</h3>
          <p>If you have any questions about this Privacy Policy, please contact us at privacy@stretchremindly.com.</p>
        </div>
      </Modal>
    </>
  )
}

