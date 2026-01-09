import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert("Thank you for contacting us! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="w-full bg-gray-50">
      {/* Hero Section */}
      <div className="w-full bg-linear-to-r from-sky-400 via-blue-500 to-indigo-600">
        <div className="max-w-350 mx-auto px-4 py-16">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg opacity-90">
              Have a question? We'd love to hear from you
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="max-w-350 mx-auto px-4 -mt-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-4">
              <MapPin className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Visit Us</h3>
            <p className="text-sm text-gray-600">
              Nairobi CBD, Moi Avenue
              <br />
              Kenya
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-4">
              <Phone className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Call Us</h3>
            <p className="text-sm text-gray-600">
              0706 328 544
              <br />
              0706 328 544
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-4">
              <Mail className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Email Us</h3>
            <p className="text-sm text-gray-600">info@utumishicomputer.co.ke</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-4">
              <Clock className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Working Hours</h3>
            <p className="text-sm text-gray-600">
              Mon - Sat: 8AM - 7PM
              <br />
              Sunday: 10AM - 4PM
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="grid lg:grid-cols-2 gap-12 pb-16">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="0712 345 678"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Customer Support
              </h3>
              <p className="text-gray-600 mb-4">
                Our customer support team is available to help you with any
                questions about products, orders, or technical issues.
              </p>
              <p className="text-gray-600">
                We typically respond within 24 hours during business days.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Visit Our Store
              </h3>
              <p className="text-gray-600 mb-4">
                Come see our products in person at our Nairobi location. Our
                friendly staff will be happy to assist you.
              </p>
              <p className="text-sm text-blue-600 font-medium">
                Free parking available
              </p>
            </div>

            <div className="bg-linear-to-br from-blue-50 to-indigo-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Need Immediate Help?
              </h3>
              <p className="text-gray-700 mb-4">
                For urgent matters, please call us directly at:
              </p>
              <p className="text-2xl font-bold text-blue-600">0706 328 544</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
