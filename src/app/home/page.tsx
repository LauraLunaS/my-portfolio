'use client';
import Navbar from "@/components/NavBar";
import Banner from "@/components/Banner";
import Services from "@/components/Services";
import Education from "@/components/Education";
import Tecnologies from "@/components/Tecnologies";
import Works from "@/components/Works";
import Profile from "@/components/Profile";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Banner />
      <Services />
      <Education />
      <Tecnologies />
      <Works />
      <Profile />
    </>
  );
}