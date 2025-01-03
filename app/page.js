import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Features from "./components/features";
import Cta from "./components/cta";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Vision from "./components/vision";
import Logo from "./components/logo";
import Research from "./components/research";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <section id="vision">
        <Vision />
          </section>
      <Cta />
      <section id="features">
        <Features />
        </section>
      <section id="research">
          <Research />
        </section>
      <section id="logo">
        <Logo />
        </section>
      <section id="contact">
        <Contact />
          </section>
      <Footer />
    </div>
  );
}
