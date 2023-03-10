// import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Testimonials from "./components/Testimonials";
import mail from "./images/Contact.svg";

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <section className="hero">
          <Hero />
        </section>
        <section className="about">
          <About />
        </section>
        <section className="gallery">
          <Gallery />
        </section>
        <section>
          <Testimonials />
        </section>
        <section>
          <Contact />
        </section>
        <section>
          <Faq />
        </section>
      </main>
      <Footer />
      <a className="contact_button" href="#contact">
        <img
          className="contact_icon"
          src={mail}
          alt="Contact via e-mail icon"
        />
      </a>
    </div>
  );
}

export default App;
