import Navbar from "@/components/Navbar";
import CursorGlow from "@/components/CursorGlow";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import StatsMarquee from "@/components/StatsMarquee";
import Analytics from "@/components/Analytics";
import Privacy from "@/components/Privacy";
import DownloadCTA from "@/components/DownloadCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <StatsMarquee />
        <Features />
        <Analytics />
        <Privacy />
        <DownloadCTA />
      </main>
      <Footer />
    </>
  );
}
