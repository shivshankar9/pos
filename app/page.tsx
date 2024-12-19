"use client";

import { navItems } from "@/data";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Notes from "@/components/platformabout";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import Clients from "@/components/Clients";
import Intergration from "@/components/Integrations";
import RecentProjects from "@/components/RecentProjects";
import MakePaymentsSlider from "@/components/MakePaymentsSlider"; // Import the slider component

import { FloatingNav } from "@/components/ui/FloatingNavbar";

const paymentMethods = [
  {
    id: 1,
    title: "Credit Card",
    description: "Pay securely with your credit card.",
    icon: "https://via.placeholder.com/60?text=Credit+Card", // Replace with actual credit card icon
  },
  {
    id: 2,
    title: "PayPal",
    description: "Make a quick payment via PayPal.",
    icon: "https://via.placeholder.com/60?text=PayPal", // Replace with actual PayPal icon
  },
  {
    id: 3,
    title: "Bank Transfer",
    description: "Transfer directly from your bank account.",
    icon: "https://via.placeholder.com/60?text=Bank+Transfer", // Replace with actual Bank Transfer icon
  },
  {
    id: 4,
    title: "Crypto Payment",
    description: "Pay using cryptocurrency.",
    icon: "https://via.placeholder.com/60?text=Crypto", // Replace with actual Crypto Payment icon
  },
];

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        {/* <MakePaymentsSlider methods={paymentMethods} />{" "} */}
        {/* Add the slider here */}
        <Notes />
        <RecentProjects />
        <Intergration />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
