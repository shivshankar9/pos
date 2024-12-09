"use client";

import { navItems } from "@/data";
import Head from "next/head";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import Clients from "@/components/Clients";
import Intergration from "@/components/Integrations";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Finverge",
    url: "https://Finverge.tech",
    logo: "../public/logo.png",
    sameAs: [
      "https://www.linkedin.com/in/shivshankarkumar281",
      "https://twitter.com/your-profile",
      "https://www.facebook.com/your-profile",
      "https://www.instagram.com/your-profile",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-800-555-1234",
      contactType: "Customer Service",
      areaServed: "IND",
      availableLanguage: "English",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Business Rd",
      addressLocality: "City",
      addressRegion: "State",
      postalCode: "12345",
      addressCountry: "US",
    },
    description:
      "We specialize in CRM development, employee management systems, and custom billing apps to help businesses grow and streamline operations.",
  };

  return (
    <>
      <Head>
        <title>
          CRM & Software Development | Employee Management Systems & Billing
          Apps
        </title>
        <meta
          name="description"
          content="We specialize in CRM development, employee management systems, and custom billing apps to streamline your business processes."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="CRM & Software Development | Employee Management Systems & Billing Apps"
        />
        <meta
          property="og:description"
          content="We develop custom CRM solutions, employee management systems, and billing apps to improve your business efficiency and growth."
        />
        <meta property="og:image" content="path-to-your-image.jpg" />
        <meta property="og:url" content="https://Finverge.tech" />
        <link rel="canonical" href="https://Finverge.tech" />
        <meta
          name="keywords"
          content="CRM development, employee management, billing apps, software developer, custom software solutions, business automation"
        />

        {/* Structured Data for SEO */}
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Head>

      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
          <Hero />
          <Grid />
          <RecentProjects />
          <Intergration />
          <Clients />
          <Experience />
          <Approach />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Home;
