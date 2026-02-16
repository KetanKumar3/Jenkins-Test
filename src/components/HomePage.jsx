import React from 'react'; // React imported correctly
import Navbar from "./Navbar"
import Home from './Home'
import About from "./About"
import Card from "./Card"
import Technology from "./Technology"
import Step from "./Step"
import Footer from "./Footer"
import { useRef } from "react" // useRef imported

function HomePage() {

    const aboutRef = useRef(null)
    const servicesRef = useRef(null)
    const technologyRef = useRef(null)
    const howtoRef = useRef(null)

    const scrollToSection = (ref) => {
    if (ref.current) { // Check if ref.current exists
      ref.current.scrollIntoView({
        behavior: 'smooth', // This is the key!
        block: 'start',
      });
    }
  };

    return (
        <>
            <Navbar scrollToSection={scrollToSection} refs={{about:aboutRef, services:servicesRef,technology:technologyRef,howto:howtoRef}} />
            <Home />
            <section ref={aboutRef} id="about">
                <About />
            </section>
            <section ref={servicesRef} id="services">
                <Card />
            </section>
            <section ref={technologyRef} id="technology">
                <Technology />
            </section>
            <section ref={howtoRef} id="howto">
                <Step />
            </section>
            <Footer />

        </>
    )
}

export default HomePage