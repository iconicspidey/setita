import React, { useState } from "react";

import { FaArrowRight ,FaCheckCircle} from "react-icons/fa";
import Nav from "../components/Nav";
import slider from "../assets/hero/slider1.png"
import card1 from "../assets/cards/card1.png";
import card2 from "../assets/cards/card2.png";

import Footer from './../components/Footer';
export default function Home() {

  return (
    <div className="min-h-screen font-sans">
      {/* Hero Section */}
      <section
        className="h-[100vh] bg-gray-100"
        style={{
          backgroundImage: `url(${slider})`,
          backgroundSize: "cover", // Ensures the image fully covers the section
          backgroundPosition: "center center", // Centers the image
          backgroundRepeat: "no-repeat", // Prevents the image from repeating
        }}
      >
        <Nav />

        <div className="flex px-10px md:px-20 items-center h-96">
          <div className="max-w-xl lg:max-w-1/2 w-full text-w-50">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
              Fundraising With Accountability
            </h1>
            <p className="text-sm sm:text-base lg:text-lg mb-4">
              Web3 Milestone Crowdfunding: Empowering Fundraisers and Building
              Trust
            </p>
            <button className="btn bg-br-50 text-w-50 mt-4">Learn More</button>
          </div>
        </div>
      </section>

      {/* Explore Campaigns Section */}
      <section className="bg-p-100 py-10 text-center">
        <h2 className="text-xl font-semibold mb-4 text-br-50">
          Explore Campaigns on Setita
        </h2>
        <div className="flex flex-wrap justify-center m-auto w-full sm:w-[75%] md:w-[60%] lg:w-[70%] ">
          <button className="bg-p-500 text-w-50 flex-1 rounded-tl-lg rounded-bl-lg border-l-4 border-l-p-500 px-3 py-2">
            Apply
          </button>

          <button className="bg-br-100 text-w-50 flex-1 px-3 py-2">
            Trending
          </button>

          <button className="bg-br-100 text-w-50 flex-1 border-l-2 border-r-2 border-b-400 px-3 py-2">
            Recently Funded
          </button>

          <input
            type="text"
            placeholder="Search by campaign name"
            className="w-full sm:w-60 text-br-100 bg-w-50 border-2 border-br-100 rounded-tr-lg rounded-br-lg px-4 py-2 mt-2 sm:mt-0"
          />
        </div>
      </section>

      {/* Campaign Cards */}
      <section className="flex justify-center flex-wrap gap-6 p-10 bg-br-50">
        <div className="w-80 bg-white ">
          <img src={card1} alt="" />
          <div className="p-4">
            <h3 className="font-bold text-b-900">
              Rebuild Hope: Shelter home for Displaced Families
            </h3>
            <p className="text-w-900">
              Providing safe shelter and support for families in need
            </p>
          </div>
        </div>
        <div className="w-80 bg-white">
          <img src={card2} alt="" />
          <div className="p-4">
            <h3 className="font-bold text-b-900">SOS School Fees Donation</h3>
            <p className="text-w-900">
              Support urgent tuition needs for students in crisis
            </p>
          </div>
        </div>
      </section>

      {/* Control Section */}
      <div className="bg-p-50 pt-[40px]">
        <section className="bg-w-50 py-10 text-center">
          <h2 className="text-2xl text-b-900 font-semibold mb-4">
            Take Control of Your Campaign
          </h2>
          <button className="btn bg-p-400 text-w-50">Connect Wallet</button>
        </section>
        {/*  */}
        <section className="py-10 w-[100%] md:w-[70%] mx-auto text-center grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold text-b-900">
              What is Setita?
            </h3>
            <p className="text-b-300">
              A decentralized crowdfunding platform that specializes in
              milestone-based fundraising.
            </p>
            <a
              href="#"
              className="text-br-50 flex justify-center items-center gap-2"
            >
              Discover how Setita works{" "}
              <span className="text-br-50">
                <FaArrowRight />
              </span>
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-b-900">
              Why choose Setita?
            </h3>
            <p className="text-b-300">
              Join us in our mission to empower projects with a transparent,
              milestone-based fundraising approach.
            </p>
            <a
              href="#"
              className="text-br-50 flex justify-center items-center gap-2"
            >
              Learn more about us{" "}
              <span className="text-br-50">
                <FaArrowRight />
              </span>
            </a>
          </div>
        </section>
      </div>

      {/* FAQ Section */}
      <div className="bg-white w-full px-5">
        <section className="bg-w-50 py-10 w-full lg:w-1/2 mx-auto">
          <h2 className="text-2xl text-center text-b-900 font-bold mb-7">
            Frequently Asked Questions
          </h2>
          <div className="bg-w-600 py-5 px-10 rounded-md">
            <div className="collapse collapse-arrow border-b-2 border-b-200 rounded-none">
              <input type="checkbox" />
              <div className="collapse-title font-semibold text-b-900">
                How does milestone-based crowdfunding work?
              </div>
              <div className="collapse-content">
                Milestone-based crowdfunding releases funds in stages...
              </div>
            </div>

            <div className="collapse collapse-arrow border-b-2 border-b-200 mt-4 rounded-none">
              <input type="checkbox" />
              <div className="collapse-title font-semibold text-black">
                Who can start a campaign?
              </div>
              <div className="collapse-content text-b-400">
                Anyone with a valid project and a plan...
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* s */}
      <div className="flex justify-center items-center py-12 bg-p-100">
        <div className="flex flex-col items-center text-center w-full gap-5 lg:w-1/2">
          <h2 className="text-2xl font-semibold  text-b-900">
            Ready to fund your vision?
          </h2>
          <div className="text-b-400">
            Setita connects your ideas with supporters through milestone-based
            crowdfunding, helping bring your project to life with trust and
            transparency.
          </div>
          <div className="flex   w-full gap-4 ">
            <button className="w-full  bg-br-50 text-white py-2  rounded-md">
              Start Donating
            </button>
            <button className="w-full  bg-p-500 text-white py-2  rounded-md">
              Explore Campaigns
            </button>
          </div>
        </div>
      </div>
      {/*  */}
      <section className="flex justify-center items-center  bg-gray-100 py-40">
        <div className="flex flex-col items-center text-center max-w-xl w-full">
          <h2 className="text-2xl font-bold text-b-900 mb-4">Stay Updated!</h2>
          <p className="text-lg text-b-400 mb-6">
            Subscribe to Setita for the latest updates on campaigns, features,
            and platform news. Let’s build something impactful together.
          </p>
          <div className="flex gap-4 w-full">
            <input
              type="text"
              placeholder="Enter your email address"
              className="w-[70%] px-4 py-3 border-2 border-gray-300 bg-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button className="w-[30%] py-3 text-b-900 border-[0.5px] border-gray-300 outline-none">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
