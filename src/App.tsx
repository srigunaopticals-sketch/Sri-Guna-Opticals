/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { StoreShowcaseBanner } from "./components/StoreShowcaseBanner";
import { Services } from "./components/Services";
import { Reviews } from "./components/Reviews";
import { BlogUpdates } from "./components/BlogUpdates";
import { VisitUsBanner } from "./components/VisitUsBanner";
import { Gallery } from "./components/Gallery";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { FloatingActions } from "./components/FloatingActions";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans antialiased selection:bg-sky-100 selection:text-sky-900 pb-16 md:pb-0">
      {/* 1. Header & Navigation */}
      <Header />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. About Us Section */}
        <About />

        {/* 4. Panoramic Store Showcase Banner (No Play Button, Rounded Corners) */}
        <StoreShowcaseBanner />

        {/* 5. Services Section (6 Boxes: 3 in a Row, 2-line Descriptions) */}
        <Services />

        {/* 6. Testimonials Section: "What Our Customers Says About Us." */}
        <Reviews />

        {/* 7. Blog Updates / Vision Health Articles */}
        <BlogUpdates />

        {/* 8. Visit Us & Let's Get Started Banner */}
        <VisitUsBanner />

        {/* 9. Gallery Showcase ("A Glimpse Inside Sri Guna Opticals" with Rounded Corners) */}
        <Gallery />

        {/* 10. Contact & Store Location with Google Map */}
        <ContactSection />
      </main>

      {/* 11. Footer with Centered White Logo */}
      <Footer />

      {/* 12. Persistent Floating Contact Actions (WhatsApp & Call) */}
      <FloatingActions />
    </div>
  );
}
