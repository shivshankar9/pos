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
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { ClerkProvider } from "@clerk/nextjs";

const Home = () => {
  return (
    <ClerkProvider>
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
          <Hero />
          <Grid />
          <Notes />
          <RecentProjects />
          <Integrations />
          <Clients />
          <Experience />
          <Approach />
          <Footer />
        </div>
      </main>
    </ClerkProvider>
  );
};

export default Home;
