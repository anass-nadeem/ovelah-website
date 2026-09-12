import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import IdealClient from "@/components/sections/IdealClient";
import ActiveClients from "@/components/sections/ActiveClients";
import Product from "@/components/sections/Product";
import Workflow from "@/components/sections/Workflow";
import Industries from "@/components/sections/Industries";
import Features from "@/components/sections/Features";
import WhyOvelah from "@/components/sections/WhyOvelah";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <ActiveClients />
        <IdealClient />
        <Product />
        <Workflow />
        <Industries />
        <Features />
        <WhyOvelah />
        <CTA />
      </main>

      <Footer />
    </>
  );
}