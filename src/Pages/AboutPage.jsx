import React from "react";
import {
  ShoppingBag,
  Award,
  Users,
  Truck,
  Shield,
  Headphones,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import { NavLink } from "react-router-dom";

function AboutUs() {
  const stats = [
    { icon: Users, label: "Happy Customers", value: "10,000+" },
    { icon: ShoppingBag, label: "Products Sold", value: "50,000+" },
    { icon: Award, label: "Years in Business", value: "10+" },
    { icon: Truck, label: "Deliveries Made", value: "45,000+" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "We source only authentic products from authorized distributors, ensuring every purchase meets the highest standards.",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description:
        "Quick and reliable delivery across Kenya. Same-day delivery available in Nairobi and next-day for major cities.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description:
        "Our dedicated team is always ready to assist you with any questions, technical support, or after-sales service.",
    },
    {
      icon: Award,
      title: "Best Prices",
      description:
        "Competitive pricing on all products with regular promotions and deals to give you the best value for your money.",
    },
  ];

  return (
    <div className="w-full max-w-350 mx-auto bg-gray-50">
      {/* Hero Section */}
      <div className="w-full bg-linear-to-r from-sky-400 via-blue-500 to-indigo-600">
        <div className="max-w-350 mx-auto px-4 py-16 md:py-24">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About Utumishi Computers Limited
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
              Your trusted partner for premium computers, laptops, accessories,
              and technology solutions in Kenya since 2014.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="w-full bg-white py-12">
        <div className="max-w-350 mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="w-full py-16 bg-white">
        <div className="max-w-350 mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-linear-to-br from-blue-50 to-indigo-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To provide Kenyans with access to authentic, high-quality
                technology products at competitive prices, backed by exceptional
                customer service and technical support. We strive to be the
                go-to destination for all technology needs.
              </p>
            </div>
            <div className="bg-linear-to-br from-sky-50 to-blue-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To be East Africa's leading technology retailer, known for
                innovation, reliability, and customer satisfaction. We envision
                a future where everyone has access to the technology they need
                to succeed.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="w-full py-16 bg-gray-50">
        <div className="max-w-350 mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to providing you with the best shopping experience
              and the highest quality products
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-lg mb-4">
                  <value.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="w-full py-16 bg-linear-to-r from-sky-400 via-blue-500 to-indigo-600">
        <div className="max-w-350 mx-auto px-4">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg opacity-90">
              Visit our store or reach out to us online
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-white">
              <MapPin className="w-8 h-8 mb-3" />
              <h3 className="font-bold mb-2">Visit Us</h3>
              <p className="text-sm opacity-90">
                Nairobi CBD, Moi Avenue
                <br />
                Kenya
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-white">
              <Phone className="w-8 h-8 mb-3" />
              <h3 className="font-bold mb-2">Call Us</h3>
              <p className="text-sm opacity-90">
                0706 328 544
                <br />
                0706 328 544
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-white">
              <Mail className="w-8 h-8 mb-3" />
              <h3 className="font-bold mb-2">Email Us</h3>
              <p className="text-sm opacity-90">info@utumishicomputer.co.ke</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-white">
              <Clock className="w-8 h-8 mb-3" />
              <h3 className="font-bold mb-2">Working Hours</h3>
              <p className="text-sm opacity-90">
                Mon - Sat: 8AM - 7PM
                <br />
                Sunday: 10AM - 4PM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full py-16 bg-white">
        <div className="max-w-350 mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Shop?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore our wide range of computers, laptops, smartphones, and
            accessories. Find the perfect tech solution for your needs.
          </p>
          <NavLink
            to="/shop"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 font-semibold transition-colors"
          >
            Browse Products
            <ArrowRight size={20} />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
