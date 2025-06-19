import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Platform from './components/Platform';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-primary text-white px-4 py-2 rounded-md z-50">
        Skip to main content
      </a>
      
      {/* Header with navigation */}
      <header role="banner">
        <Navbar />
      </header>
      
      {/* Main content area */}
      <main id="main-content" role="main">
        {/* Hero section with main heading */}
        <section aria-labelledby="hero-heading">
          <Hero />
        </section>
        
        {/* Features section */}
        <section aria-labelledby="features-heading">
          <Features />
        </section>
        
        {/* Platform section */}
        <section aria-labelledby="platform-heading">
          <Platform />
        </section>
        
        {/* Call to action section */}
        <section aria-labelledby="cta-heading">
          <CTA />
        </section>
      </main>
      
      {/* Footer */}
      <footer role="contentinfo">
        <Footer />
      </footer>
    </div>
  );
}

export default App;