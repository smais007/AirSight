"use client";

import React from "react";
import { motion } from "framer-motion";
import LiveDataPill from "./live-data-pill";
import GradientText from "./global/gradient-text";
import { Button } from "./ui/button";
import Link from "next/link";

export default function HeroPage() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      {/* Video Author: Video by Zelch Csaba: https://www.pexels.com/video/stunning-4k-aerial-view-of-earth-at-sunrise-30683869/ */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="videos/earth.mp4" type="video/mp4" />
      </video>

      {/* Overlay Blur & Dark Layer */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-4 z-20 text-white">
        <h1 className="text-2xl font-bold">AirSight</h1>
        <ul className="flex gap-6">
          <LiveDataPill />
        </ul>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">
        {/* <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-white"
        >
         
        </motion.h1> */}
        <GradientText
          className="text-[35px] md:text-[40px] lg:text-[55px] xl:text-[70px] 2xl:text-[80px] leading-tight font-semibold"
          element="H1"
        >
          Welcome to AirSight Platform
          <br />
          Forecasting Air You Can Trust
        </GradientText>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-4 text-md md:text-xl text-gray-200 max-w-2xl"
        >
          We combine NASA’s TEMPO satellite data with ground sensors and weather
          models to deliver neighborhood-level air quality forecasts,
          personalized health alerts, and clear insight into what’s driving
          pollution each hour.{" "}
        </motion.p>
        {/* <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 bg-emerald-500 text-white font-medium rounded-2xl shadow-lg hover:bg-emerald-600 transition"
        >
          Get Started
        </motion.button> */}

        <Button
          asChild
          className="w-fit rounded-2xl flex gap-3 bg-themeBlack border-themeGray"
          variant="outline"
        >
          <Link href="/dashboard">Go to Dahboard</Link>
        </Button>

        {/* Cards Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: item * 0.2 }}
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg text-white"
            >
              <h3 className="text-xl font-semibold mb-2">Card {item}</h3>
              <p className="text-sm text-gray-200">
                Short description for card {item}. This is responsive.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-2 right-4 z-20 text-xs text-gray-300">
        <a
          href="https://www.pexels.com/video/stunning-4k-aerial-view-of-earth-at-sunrise-30683869/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white"
        >
          Video by Zelch Csaba
        </a>
      </div>
    </div>
  );
}
