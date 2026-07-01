import Image from "next/image";
import Navbar from "@/components/Navbar";
import CitiesSection from "@/features/cities/sections/CitiesSection";
import { Fresca } from "next/font/google";
import FreshSpaceSection from "@/features/offices/sections/FreshSpaceSection";
import BenefitSections from "@/components/BenefitSections";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <CitiesSection />
      <BenefitSections />
      <FreshSpaceSection />
    </>
  );
}
