import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton'; // Import the button component

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <Hero id="home" /> {/* Add an id to match the scroll */}
      <About id="about" />
      <Services id="services" />
      <Portfolio id="portfolio" />
      <Contact id="contact" />
      <Footer />
      <FloatingWhatsAppButton /> {/* Add the floating button here */}
    </div>
  );
}

export default App;
