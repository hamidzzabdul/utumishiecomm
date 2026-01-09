import React from "react";

function PrivacyPolicy() {
  return (
    <div className="w-full bg-gray-50">
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600">
        <div className="max-w-350 mx-auto px-4 py-16">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg opacity-90">Last updated: January 2026</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-md p-8 md:p-12 space-y-8">
          {/* Introduction */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed">
              At Utumishi Computers Limited, we respect your privacy and are
              committed to protecting your personal information. This Privacy
              Policy explains how we collect, use, and safeguard your data when
              you use our website and services.
            </p>
          </div>

          {/* Information We Collect */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Information We Collect
            </h2>
            <div className="space-y-3 text-gray-700">
              <p className="font-semibold">
                We collect the following information:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>
                  <strong>Personal Information:</strong> Name, email address,
                  phone number, and delivery address
                </li>
                <li>
                  <strong>Payment Information:</strong> M-Pesa phone number or
                  bank details (processed securely)
                </li>
                <li>
                  <strong>Order Information:</strong> Products purchased, order
                  history, and preferences
                </li>
                <li>
                  <strong>Technical Information:</strong> IP address, browser
                  type, device information, and usage data
                </li>
              </ul>
            </div>
          </div>

          {/* How We Use Your Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. How We Use Your Information
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>We use your information to:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Process and deliver your orders</li>
                <li>Communicate with you about your orders and inquiries</li>
                <li>Improve our products and services</li>
                <li>Send promotional offers and updates (with your consent)</li>
                <li>Prevent fraud and ensure security</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>
          </div>

          {/* Information Sharing */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Information Sharing
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                We do not sell your personal information. We may share your data
                with:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>
                  <strong>Delivery Partners:</strong> To fulfill your orders
                </li>
                <li>
                  <strong>Payment Processors:</strong> To process transactions
                  securely
                </li>
                <li>
                  <strong>Service Providers:</strong> Who help us operate our
                  business
                </li>
                <li>
                  <strong>Legal Authorities:</strong> When required by law
                </li>
              </ul>
              <p className="mt-3">
                All third parties are required to protect your information and
                use it only for the intended purposes.
              </p>
            </div>
          </div>

          {/* Data Security */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Data Security
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                We implement appropriate security measures to protect your
                personal information:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Encrypted data transmission (SSL/TLS)</li>
                <li>Secure payment processing</li>
                <li>Regular security audits</li>
                <li>Limited access to personal data</li>
                <li>Password-protected accounts</li>
              </ul>
              <p className="mt-3">
                While we strive to protect your data, no method of transmission
                over the internet is 100% secure.
              </p>
            </div>
          </div>

          {/* Your Rights */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Your Rights
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>You have the right to:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Object to data processing</li>
                <li>Request data portability</li>
              </ul>
              <p className="mt-3">
                To exercise these rights, contact us at
                info@utumishicomputer.co.ke
              </p>
            </div>
          </div>

          {/* Cookies */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Cookies
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                We use cookies to enhance your browsing experience. Cookies are
                small files stored on your device that help us:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Remember your preferences</li>
                <li>Keep you logged in</li>
                <li>Analyze website traffic</li>
                <li>Personalize content</li>
              </ul>
              <p className="mt-3">
                You can disable cookies in your browser settings, but this may
                affect website functionality.
              </p>
            </div>
          </div>

          {/* Data Retention */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Data Retention
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We retain your personal information for as long as necessary to
              fulfill the purposes outlined in this policy, comply with legal
              obligations, resolve disputes, and enforce our agreements.
              Generally, we keep order information for 7 years as required by
              Kenyan law.
            </p>
          </div>

          {/* Children's Privacy */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Children's Privacy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our services are not directed to children under 18. We do not
              knowingly collect personal information from children. If you
              believe we have collected data from a child, please contact us
              immediately.
            </p>
          </div>

          {/* Changes to Privacy Policy */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10. Changes to This Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page with an updated date. We encourage you to
              review this policy periodically.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-700 mb-4">
              If you have questions about this Privacy Policy or how we handle
              your data, please contact us:
            </p>
            <div className="text-gray-700 space-y-1">
              <p>
                <strong>Email:</strong> info@utumishicomputer.co.ke
              </p>
              <p>
                <strong>Phone:</strong> 0706 328 544
              </p>
              <p>
                <strong>Address:</strong> Nairobi CBD, Moi Avenue, Kenya
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
