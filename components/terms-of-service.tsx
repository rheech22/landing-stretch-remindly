"use client"

import { useState } from "react"
import { Modal } from "@/components/modal"

export function TermsOfService() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="text-muted-foreground hover:text-primary">
        Terms of Service
      </button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Terms of Service"
        subtitle="Last updated: April 6, 2025"
      >
        <div className="space-y-4 text-foreground">
          <h3 className="text-lg font-semibold">1. Acceptance of Terms</h3>
          <p>
            By downloading, installing, or using Stretching Remindly, you agree to be bound by these Terms of Service.
            If you do not agree to these terms, please do not use the application.
          </p>

          <h3 className="text-lg font-semibold">2. Description of Service</h3>
          <p>
            Stretching Remindly is a MacOS application designed to remind users to take stretching breaks during
            computer work sessions. The application provides timers, stretching guides, and customizable settings to
            promote healthy work habits.
          </p>

          <h3 className="text-lg font-semibold">3. User Accounts</h3>
          <p>
            Stretching Remindly does not require user accounts for basic functionality. Any optional account features
            that may be added in the future will be subject to additional terms.
          </p>

          <h3 className="text-lg font-semibold">4. License and Restrictions</h3>
          <p>
            Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, non-sublicensable license
            to download and use the Application for your personal, non-commercial purposes. You may not:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Copy, modify, or create derivative works of the Application</li>
            <li>Reverse engineer, decompile, or disassemble the Application</li>
            <li>Remove any copyright or other proprietary notices</li>
            <li>Transfer, sublicense, lease, lend, rent or otherwise distribute the Application to any third party</li>
          </ul>

          <h3 className="text-lg font-semibold">5. Open Source Components</h3>
          <p>
            The Application may include open source components. Any use of open source components is governed by the
            applicable open source licenses.
          </p>

          <h3 className="text-lg font-semibold">6. Disclaimer of Warranties</h3>
          <p>
            THE APPLICATION IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. WE DISCLAIM ALL WARRANTIES, WHETHER
            EXPRESS, IMPLIED, OR STATUTORY, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
            PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </p>

          <h3 className="text-lg font-semibold">7. Limitation of Liability</h3>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL WE BE LIABLE FOR ANY SPECIAL, INCIDENTAL,
            INDIRECT, OR CONSEQUENTIAL DAMAGES WHATSOEVER ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE
            THE APPLICATION.
          </p>

          <h3 className="text-lg font-semibold">8. Changes to Terms</h3>
          <p>
            We reserve the right to modify these Terms at any time. We will notify users of any material changes by
            posting the new Terms on our website or through the Application.
          </p>

          <h3 className="text-lg font-semibold">9. Governing Law</h3>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard
            to its conflict of law principles.
          </p>

          <h3 className="text-lg font-semibold">10. Contact Information</h3>
          <p>For questions about these Terms, please contact us at legal@stretchremindly.com.</p>
        </div>
      </Modal>
    </>
  )
}

