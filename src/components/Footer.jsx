import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import logo2 from "../assets/logo/logo2.png";
import footer from "../assets/frame/footer.png"

const Footer = () => {
  return (
    <footer className="bg-br-50 text-white">
      <div className="relative px-6 py-8">
        <div className="absolute top-[-70%] left-[50%] transform -translate-x-1/2 w-[100%] md:w-[50%] bg-gradient-to-r from-[#E4D9C8] to-[#3E0566] p-6 rounded-lg flex justify-between items-center flex-wrap gap-3">
          <div className="flex flex-col gap-2">
            <div className="font-semibold">
              Bring Your Vision to Life with Setita
            </div>
            <div className="flex gap-1 text-[10px]">
              <div className="flex items-center gap-1 font-medium text-gray-700">
                <FaCheckCircle className="text-dark-800" /> Transparent
              </div>
              <div className="flex items-center gap-2 font-medium text-gray-700">
                <FaCheckCircle className="text-dark-800" /> Secure
              </div>
              <div className="flex items-center gap-2 font-medium text-gray-700">
                <FaCheckCircle className="text-dark-800" /> Empowering
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-6">
            <button className="bg-b-900 text-w-50 py-2 px-6 rounded-lg hover:bg-blue-600 transition-all">
              Get Started
            </button>
            <button className="bg-gray-300 text-gray-800 py-2 px-6 rounded-lg hover:bg-gray-400 transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <section className="text-white py-10">
        <div className="container mx-auto px-5">
          <img src={logo2} className="py-2 h-[35px]" alt="Logo" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <div>
              <h2 className="font-semibold text-xl mb-4">Get Started</h2>
              <div>
                <h4 className="text-sm mb-2">Join us</h4>
                <h4 className="text-sm mb-2">Start a Campaign</h4>
                <h4 className="text-sm mb-2">Donate</h4>
              </div>
            </div>

            <div>
              <h2 className="font-semibold text-xl mb-4">About Us</h2>
              <div>
                <h4 className="text-sm mb-2">Who We Are</h4>
                <h4 className="text-sm mb-2">Our Story</h4>
                <h4 className="text-sm mb-2">Team</h4>
              </div>
            </div>

            <div>
              <h2 className="font-semibold text-xl mb-4">Support</h2>
              <div>
                <h4 className="text-sm mb-2">FAQ</h4>
                <h4 className="text-sm mb-2">Contact Us</h4>
                <h4 className="text-sm mb-2">Help Center</h4>
              </div>
            </div>

            <div>
              <h2 className="font-semibold text-xl mb-4">Legal</h2>
              <div>
                <h4 className="text-sm mb-2">Privacy Policy</h4>
                <h4 className="text-sm mb-2">Terms & Conditions</h4>
                <h4 className="text-sm mb-2">Cookie Policy</h4>
              </div>
            </div>

            <div>
              <h2 className="font-semibold text-xl mb-4">Follow Us</h2>
              <div>
                <h4 className="text-lg mb-2">Facebook</h4>
                <h4 className="text-lg mb-2">Twitter</h4>
                <h4 className="text-lg mb-2">Instagram</h4>
              </div>
            </div>

            <div>
              <h2 className="font-semibold text-xl mb-4">Newsletter</h2>
              <div>
                <h4 className="text-sm mb-2">Subscribe for Updates</h4>
                <h4 className="text-sm mb-2">Latest News</h4>
                <h4 className="text-sm mb-2">Special Offers</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <img className="h-[30px] w-full" src={footer} alt="Footer decoration" />
    </footer>
  );
};

export default Footer;
