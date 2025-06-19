import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#platform', label: 'Platform' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="scroll-progress"
        style={{
          scaleX: typeof window !== 'undefined' ? 
            (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) : 0
        }}
      />
      
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full top-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'glass-card-white shadow-glass' 
            : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Logo className="w-32 h-10 sm:w-40 sm:h-12" />
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative text-gray-700 hover:text-primary transition-colors duration-300 font-medium group text-sm lg:text-base"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              ))}
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(65, 105, 225, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="gradient-bg-animated text-white btn-responsive rounded-full font-semibold magnetic-button shimmer-effect"
              >
                <span className="hidden lg:inline">Get Started</span>
                <span className="lg:hidden">Start</span>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg glass-button transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
              </motion.div>
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: isMobileMenuOpen ? 1 : 0, 
              height: isMobileMenuOpen ? 'auto' : 0 
            }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
            aria-hidden={!isMobileMenuOpen}
          >
            <motion.div
              className="glass-card-white rounded-xl sm:rounded-2xl p-4 sm:p-6 m-2 sm:m-4 shadow-glass"
              initial={{ y: -20 }}
              animate={{ y: isMobileMenuOpen ? 0 : -20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="space-y-3 sm:space-y-4">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: isMobileMenuOpen ? 1 : 0, 
                      x: isMobileMenuOpen ? 0 : -20 
                    }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="block text-gray-700 hover:text-primary transition-colors duration-300 font-medium py-2 text-base sm:text-lg min-h-[44px] flex items-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: isMobileMenuOpen ? 1 : 0, 
                    y: isMobileMenuOpen ? 0 : 20 
                  }}
                  transition={{ delay: 0.4 }}
                  className="w-full gradient-bg-animated text-white btn-responsive rounded-full font-semibold magnetic-button min-h-[44px]"
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;