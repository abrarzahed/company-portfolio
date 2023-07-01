// import Image from "next/image";

import About from "@/components/About";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Quote from "@/components/Quote";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Navbar />
      <About />
      <Services />
      <Quote />
    </>
  );
}
