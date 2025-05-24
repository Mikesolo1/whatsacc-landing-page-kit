
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Plans from '../components/Plans';
import Terms from '../components/Terms';
import Recommendations from '../components/Recommendations';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Services />
      <Plans />
      <Terms />
      <Recommendations />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
