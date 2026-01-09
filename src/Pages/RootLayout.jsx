import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "../Components/ScrollToTop";

function RootLayout() {
  return (
    <>
      <main className="relative bg-gray-200">
        <ScrollToTop />
        <Navbar />
        <div className="w-full md:w-[95%] mx-auto ">
          <Toaster />
          <Outlet />
        </div>
        <Footer />
      </main>
    </>
  );
}

export default RootLayout;
