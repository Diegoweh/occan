import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Properties from "./components/Properties";
import Features from "./components/Features";
import FloorPlan from "./components/FloorPlan";
import Amenities from "./components/Amenities";
import Owners from "./components/Owners";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Gallery />
        <Properties />
        <Features />
        <FloorPlan />
        <Amenities />
        <Owners />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
