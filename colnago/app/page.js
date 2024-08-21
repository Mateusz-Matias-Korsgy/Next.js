import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import FeaturedBikes from "./Components/FeaturedBike";
import Footer from "./Components/Footer";

export default function Home() {
  return(
    <>
      <Navbar/>
      <Hero/>
      <FeaturedBikes/>
      <Footer/>
    </>
  );
}