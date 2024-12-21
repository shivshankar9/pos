"use client";

import { navItems } from "@/data";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Notes from "@/components/platformabout";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import Clients from "@/components/Clients";
import Integrations from "@/components/Integrations";
import RecentProjects from "@/components/RecentProjects";
// import FutureUI from "@/components/FutureUI";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
// import FuturisticBusinessSuite from "@/components/futureui";
// Add imported component

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Notes />
        <RecentProjects />
        <Integrations />
        {/* <FuturisticBusinessSuite /> */}
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
