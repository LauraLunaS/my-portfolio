'use client';
import Navbar from "@/components/NavBar";
import Banner from "@/components/Banner";
import Services from "@/components/Services";
import Education from "@/components/Education";
import Tecnologies from "@/components/Tecnologies";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Banner />
      <Services />
      <Education />
      <Tecnologies />
    </>
  );
}