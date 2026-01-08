import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  Truck,
  Shield,
  Headphones,
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      {/* Features Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-3 rounded-lg">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">
                  Free Delivery
                </h4>
                <p className="text-xs text-gray-400">On orders over $50</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-3 rounded-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">
                  Secure Payment
                </h4>
                <p className="text-xs text-gray-400">100% secure payment</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-3 rounded-lg">
                <Headphones className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">
                  24/7 Support
                </h4>
                <p className="text-xs text-gray-400">Dedicated support</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-3 rounded-lg">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">
                  Easy Returns
                </h4>
                <p className="text-xs text-gray-400">30-day return policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">TechStore</h3>
            <p className="text-sm mb-4 leading-relaxed">
              Your trusted destination for the latest electronics and
              technology. Quality products, competitive prices, and exceptional
              service.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="bg-gray-800 hover:bg-blue-600 p-2 rounded-full transition-colors duration-200"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-blue-600 p-2 rounded-full transition-colors duration-200"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-blue-600 p-2 rounded-full transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-blue-600 p-2 rounded-full transition-colors duration-200"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-blue-400 transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-blue-400 transition-colors duration-200"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-blue-400 transition-colors duration-200"
                >
                  Categories
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-blue-400 transition-colors duration-200"
                >
                  Deals
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-blue-400 transition-colors duration-200"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-blue-400 transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-white font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-blue-400 transition-colors duration-200"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-blue-400 transition-colors duration-200"
                >
                  Track Order
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-blue-400 transition-colors duration-200"
                >
                  Shipping Info
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-blue-400 transition-colors duration-200"
                >
                  Returns
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-blue-400 transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-blue-400 transition-colors duration-200"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  123 Tech Street, Silicon Valley, CA 94025
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-sm">support@techstore.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2024 TechStore. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">We accept:</span>
              <div className="flex gap-2">
                <div className="bg-white px-3 py-1 rounded text-xs font-semibold">
                  VISA
                </div>
                <div className="bg-white px-3 py-1 rounded text-xs font-semibold">
                  MASTERCARD
                </div>
                <div className="bg-white px-3 py-1 rounded text-xs font-semibold">
                  PAYPAL
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
