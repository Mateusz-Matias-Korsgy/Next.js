import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import HowItWorks from "../Components/HowItWorks";
import MenuSection from "../Components/MenuSection";
import JoinUs from '../Components/JoinUs';
import Reviews from '../Components/Reviews';
import Loyalty from "../Components/Loyalty";
import Footer from "../Components/Footer";

export default function Home() {
    return (
      <div>
        <Navbar />
        <Hero />
        <HowItWorks />
        <MenuSection />
        <JoinUs />
        <Reviews />
        <Loyalty />
        <Footer />
      </div>
    );
  }