import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Features from "./components/features";
import Cta from "./components/cta";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cta />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}
