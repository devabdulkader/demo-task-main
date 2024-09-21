import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import Footer from "../shared/footer/Footer";
import { useAppContext } from "@/context";
import HandyFreeTools from "@/Pages/Tools/HandyFreeTools";
import {
  Barcode,
  Camera,
  Code,
  FileText,
  Instagram,
  Monitor,
  PanelsTopLeft,
  QrCode,
  Star,
  Twitter,
  Video,
  Youtube,
} from "lucide-react";
import { FaReddit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Hero from "./Hero";

const TemplateSelector = () => {
  const context = useAppContext();
  const { planType } = context.sharedState;

  const templates = [
    {
      title: "Design Canvas",
      thumbnail: "/FeatureGraphic.webp",
      link: "/design",
      description: "Design from scratch",
    },
    {
      title: "Screenshot Mockups",
      thumbnail: "/shot.webp",
      link: "/screenshot-mockup",
      description: "Amazing screenshot mockups",
    },
    {
      title: "Code Image Generator",
      thumbnail: "/code.webp",
      link: "/code",
      description: "Eye catchy code snippets",
    },
    {
      title: "Device Mockups",
      thumbnail: "/dv.webp",
      link: "/device-mockups",
      description: "Create Professional Device Mockups",
    },
    {
      title: "Video templates (new)",
      thumbnail: "/vidtemplates.webp",
      link: "/videos",
      description: "Create beautiful tweet images",
    },
    {
      title: "Tweet screenshot",
      thumbnail: "/tweetshot.webp",
      link: "/tweet-to-screenshot",
      description: "Create beautiful tweet images",
    },
    {
      title: "Reddit screenshot",
      thumbnail: "/redditshot.webp",
      link: "/reddit-screenshot",
      description: "Create beautiful reddit images",
    },
    {
      title: "Testimonial",
      thumbnail: "/testimonial.webp",
      link: "/testimonial",
      description: "Appealing testimonials",
    },
    {
      title: "Youtube screenshot",
      thumbnail: "/ytshot.webp",
      link: "/youtube-screenshot",
      description: "Create beautiful youtube thumbnail images",
    },
    {
      title: "Fake Tweet",
      thumbnail: "/ft.webp",
      link: "/twitter",
      description: "Quirky fake tweets",
    },
    {
      title: "QR Code",
      thumbnail: "/qr.webp",
      link: "/qr-code",
      description: "Custom QR Codes",
    },
    {
      title: "Short Blog",
      thumbnail: "/sb.webp",
      link: "/short-blog",
      description: "Express yourself",
    },
    {
      title: "Instagram",
      thumbnail: "/insta.webp",
      link: "/instagram",
      description: "Post previews generator",
    },
    {
      title: "Bar Code",
      thumbnail: "/barcode.webp",
      link: "/bar-code",
      description: "Custom Bar Codes",
    },
  ];
  // Calculate the midpoint of the templates array
  const midpoint = Math.ceil(templates.length / 2);
  const firstHalf = templates.slice(0, midpoint);
  const secondHalf = templates.slice(midpoint);

  return (
    <>
      {/* <div className="flex-1 overflow-y-auto py-10 bg-[linear-gradient(90deg,_rgb(19,_14,_16)_25%,_rgb(52,_24,_27)_50%,_rgb(19,_14,_16)_75%)]"> */}
      <div className="flex-1 overflow-y-auto py-10 gradient-template">
        <main className="px-5">
          <div className="flex justify-center md:justify-between items-center my-4 md:my-8">
            <h1 className="text-xl md:text-2xl text-center md:text-left font-bold  dark:text-gray-100 text-[#171717]">
              Templates to get you started
            </h1>
            {planType === "free" && (
              <Link to="/pricing">
                <button className="hidden md:flex items-center text-sm border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white px-3 py-1 rounded-full transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <img
                    src="/crown.webp"
                    alt="upgrade"
                    className="w-4 h-4 mr-2.5 rounded-sm"
                  />
                  <span>Upgrade</span>
                </button>
              </Link>
            )}
          </div>
          <div className="relative space-y-10">
            {" "}
            {/* Increased the height for better visibility */}
            <Swiper
              slidesPerView={4} // Number of slides visible at a time
              spaceBetween={30} // Space between each slide
              pagination={{
                clickable: true,
              }}
              // modules={[Pagination]}
              className="mySwiper"
            >
              {firstHalf.map((template, index) => (
                <SwiperSlide key={index} className="overflow-hidden rounded-xl">
                  {" "}
                  {/* Wrap each TemplateCard in a SwiperSlide */}
                  <TemplateCard key={index} {...template} />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Increased the height for better visibility */}
            <Swiper
              slidesPerView={4} // Number of slides visible at a time
              spaceBetween={30} // Space between each slide
              pagination={{
                clickable: true,
              }}
              // modules={[Pagination]}
              className="mySwiper"
            >
              {secondHalf.map((template, index) => (
                <SwiperSlide key={index} className="overflow-hidden rounded-xl">
                  {" "}
                  {/* Wrap each TemplateCard in a SwiperSlide */}
                  <TemplateCard key={index} {...template} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </main>
      </div>
    </>
  );
};

export default TemplateSelector;

const iconMap = {
  "Design Canvas": PanelsTopLeft,
  "Screenshot Mockups": Camera,
  "Code Image Generator": Code,
  "Device Mockups": Monitor,
  "Video templates (new)": Video,
  "Tweet screenshot": Twitter,
  "Reddit screenshot": FaReddit,
  Testimonial: Star,
  "Youtube screenshot": Youtube,
  "Fake Tweet": Twitter,
  "QR Code": QrCode,
  "Short Blog": FileText,
  Instagram: Instagram,
  "Bar Code": Barcode,
};

export const TemplateCard = ({ title, thumbnail, link, description }) => {
  const Icon = iconMap[title] || FileText;

  return (
    <Link
      to={link}
      onClick={() => {
        sessionStorage.setItem("homeScroll", window.scrollY);
      }}
      className="group  bg-gradient-to-br overflow-hidden from-gray-50 to-gray-100 md:from-white md:to-white dark:from-gray-800 dark:to-gray-900 md:rounded-xl hover:shadow-lg transition-all duration-300 flex flex-col"
    >
      <div className="relative overflow-hidden">
        <img
          src={thumbnail}
          className="aspect-video overflow-hidden rounded-none border-blue-700 object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
          alt={title}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Icon className="text-white w-12 h-12" />
        </div>
      </div>
    </Link>
  );
};
