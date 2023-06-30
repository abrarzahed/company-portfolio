// import Image from "next/image";

import About from "@/components/About";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Navbar />
      <About />
    </>
  );
}
