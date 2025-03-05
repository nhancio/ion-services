import React from 'react';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Clients from './Clients';
import Contact from './Contact';
import Footer from './Footer';
import TawkToChat from './TawkToChat';

const MainContent: React.FC = () => {
  return (
    <>
      <main className="bg-beige">
        <section id="home">
          <Hero />
        </section>
        <section id="about" className="py-16">
          <About />
        </section>
        <section id="services" className="py-16">
          <Services />
        </section>
        <section id="clients" className="py-16">
          <Clients />
        </section>
        <section id="contact" className="py-16">
          <Contact />
        </section>
      </main>
      <Footer />
      <TawkToChat />
    </>
  );
};

export default MainContent;
