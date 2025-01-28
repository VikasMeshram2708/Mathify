import React from "react";

export default function PrivacyCard() {
  return (
      <div className="min-h-screen  w-full flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-4xl rounded-xl shadow-xl p-5">
          <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-base leading-relaxed mb-6">
            Effective Date: January 28, 2025
          </p>
          <p className="text-base leading-relaxed mb-4">
            At Mathify, your privacy is our priority. This Privacy Policy
            outlines how we collect, use, and protect your personal information
            when you use our platform. By accessing Mathify, you agree to the
            terms described herein.
          </p>
          <h2 className="text-xl font-semibold mb-3">Information We Collect</h2>
          <ul className="list-disc list-inside mb-6">
            <li>
              <span className="font-semibold">Personal Information:</span> Name,
              email address, and other details provided during registration or
              inquiry.
            </li>
            <li>
              <span className="font-semibold">Usage Data:</span> Device
              information, IP address, browser type, and activity logs to
              improve our services.
            </li>
            <li>
              <span className="font-semibold">
                Cookies and Tracking Technologies:
              </span>{" "}
              We use cookies to enhance user experience and analyze usage
              patterns.
            </li>
          </ul>
          <h2 className="text-xl font-semibold mb-3">
            How We Use Your Information
          </h2>
          <p className="text-base leading-relaxed mb-4">
            - To provide and improve our services.
            <br />
            - To respond to inquiries and offer customer support.
            <br />
            - To send updates, newsletters, or promotional content (you can opt
            out at any time).
            <br />- To analyze user behavior and improve platform functionality.
          </p>
          <h2 className="text-xl font-semibold mb-3">
            Sharing Your Information
          </h2>
          <p className="text-base leading-relaxed mb-6">
            We do not sell or rent your personal data. However, we may share
            information with trusted third-party service providers who assist in
            delivering our services, or to comply with legal obligations or
            protect against fraudulent activities.
          </p>
          <h2 className="text-xl font-semibold mb-3">Data Security</h2>
          <p className="text-base leading-relaxed mb-4">
            We employ robust security measures to safeguard your information.
            Despite our efforts, no system is completely secure, and we cannot
            guarantee absolute data security.
          </p>
          <h2 className="text-xl font-semibold mb-3">Your Rights</h2>
          <p className="text-base leading-relaxed mb-6">
            Access, update, or delete your personal information by contacting
            us. You can also opt out of marketing communications at any time.
          </p>
          <h2 className="text-xl font-semibold mb-3">Changes to This Policy</h2>
          <p className="text-base leading-relaxed mb-6">
            We may update this Privacy Policy periodically. Changes will be
            communicated through our website with the updated effective date.
          </p>
          <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
          <p className="text-base leading-relaxed">
            If you have questions or concerns about this Privacy Policy, please
            reach out to us at{" "}
            <span className="font-semibold">support@mathify.com</span>.
          </p>
        </div>
      </div>
  );
}
