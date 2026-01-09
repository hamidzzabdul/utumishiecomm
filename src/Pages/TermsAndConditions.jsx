import React from "react";

function TermsAndConditions() {
  return (
    <div className="w-full bg-gray-50">
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600">
        <div className="max-w-350 mx-auto px-4 py-16">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Terms & Conditions
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
              Welcome to Utumishi Computers Limited. By accessing and using our
              website, you agree to comply with these Terms and Conditions.
              Please read them carefully before making any purchase.
            </p>
          </div>

          {/* Products and Pricing */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Products and Pricing
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                All products are subject to availability. We reserve the right
                to limit quantities and discontinue products at any time.
              </p>
              <p>
                Prices are displayed in Kenyan Shillings (KSh) and may change
                without notice. The price at the time of purchase will be
                honored.
              </p>
              <p>
                Product images are for illustration purposes. Actual products
                may vary slightly in appearance.
              </p>
            </div>
          </div>

          {/* Orders and Payment */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Orders and Payment
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                By placing an order, you are making an offer to purchase
                products. We reserve the right to accept or decline your order.
              </p>
              <p>
                Payment can be made via M-Pesa, bank transfer, or cash on
                delivery (where available).
              </p>
              <p>
                Orders are processed once payment is confirmed. You will receive
                an order confirmation via email or SMS.
              </p>
            </div>
          </div>

          {/* Delivery */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Delivery
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                We deliver within Kenya. Delivery times vary based on location:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Nairobi: Same day or next day delivery</li>
                <li>Major cities: 1-3 business days</li>
                <li>Other areas: 3-7 business days</li>
              </ul>
              <p>
                Delivery charges are calculated at checkout based on your
                location.
              </p>
            </div>
          </div>

          {/* Returns and Refunds */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Returns and Refunds
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                You may return unused products within 7 days of delivery for a
                full refund or exchange.
              </p>
              <p>
                Products must be in original packaging with all accessories and
                documentation.
              </p>
              <p>
                Refunds will be processed within 7-14 business days after we
                receive the returned item.
              </p>
              <p>
                Some products (software, opened accessories) may not be eligible
                for return due to hygiene or licensing reasons.
              </p>
            </div>
          </div>

          {/* Warranty */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Warranty
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                All products come with manufacturer's warranty as specified in
                the product description.
              </p>
              <p>
                Warranty claims should be reported within the warranty period
                with proof of purchase.
              </p>
              <p>
                We will repair, replace, or refund defective products according
                to the warranty terms.
              </p>
            </div>
          </div>

          {/* User Accounts */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. User Accounts
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                You are responsible for maintaining the confidentiality of your
                account information.
              </p>
              <p>
                Notify us immediately of any unauthorized use of your account.
              </p>
              <p>
                We reserve the right to suspend or terminate accounts that
                violate these terms.
              </p>
            </div>
          </div>

          {/* Limitation of Liability */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Limitation of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Utumishi Computers Limited shall not be liable for any indirect,
              incidental, or consequential damages arising from the use of our
              products or services. Our liability is limited to the purchase
              price of the product.
            </p>
          </div>

          {/* Changes to Terms */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Changes to Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms and Conditions at any
              time. Changes will be effective immediately upon posting on our
              website. Your continued use constitutes acceptance of the updated
              terms.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Questions?
            </h2>
            <p className="text-gray-700 mb-2">
              If you have any questions about these Terms and Conditions, please
              contact us:
            </p>
            <p className="text-gray-700">
              Email: info@utumishicomputer.co.ke
              <br />
              Phone: 0706 328 544
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsAndConditions;
