import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Play, Zap, Activity, Gauge, Brain } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentMetric, setCurrentMetric] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Live metrics that cycle through
  const liveMetrics = [
    { icon: Activity, label: 'Processing', value: '2.3k/sec', color: 'from-blue-500 to-cyan-500' },
    { icon: Zap, label: 'Response Time', value: '12ms', color: 'from-green-500 to-emerald-500' },
    { icon: Gauge, label: 'Accuracy', value: '99.7%', color: 'from-purple-500 to-pink-500' },
    { icon: Brain, label: 'AI Models', value: '24 Active', color: 'from-orange-500 to-red-500' },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e) => {
      if (!isMobile) {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  // Cycle through metrics
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % liveMetrics.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(65,105,225,0.1),transparent_50%)]" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating orbs */}
        <motion.div 
          className="absolute -top-40 -right-40 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl floating-animation"
          animate={!isMobile ? {
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          } : {}}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-3xl floating-animation"
          style={{ animationDelay: '2s' }}
          animate={!isMobile ? {
            x: mousePosition.x * -0.02,
            y: mousePosition.y * -0.02,
          } : {}}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        />
        
        {/* Active data streams - reduced count on mobile */}
        {[...Array(isMobile ? 4 : 8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-16 sm:h-20 bg-gradient-to-b from-primary/60 to-transparent rounded-full"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 800),
              y: (typeof window !== 'undefined' ? window.innerHeight : 600) + 50,
              rotate: Math.random() * 360,
            }}
            animate={{
              y: -100,
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeOut"
            }}
          />
        ))}

        {/* Floating tech particles - reduced count on mobile */}
        {[...Array(isMobile ? 8 : 15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-br from-primary to-secondary rounded-full opacity-60"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 800),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 600),
            }}
            animate={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 800),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 600),
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto container-padding section-padding">
        <div className="text-center content-spacing">
          {/* Live Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 sm:gap-3 px-3 py-2 sm:px-6 sm:py-3 rounded-full glass-card-white shadow-glass mb-6 sm:mb-8 group hover:shadow-elevated transition-all duration-300"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            </motion.div>
            <span className="text-xs sm:text-sm font-semibold text-gray-700 group-hover:text-primary transition-colors">
              <span className="hidden sm:inline">Live AI Platform • Processing Data Now</span>
              <span className="sm:hidden">Live AI • Processing</span>
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-responsive-hero font-bold mb-6 sm:mb-8 text-shadow"
          >
            <motion.span 
              className="gradient-text-animated inline-block"
              whileHover={{ scale: isMobile ? 1 : 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Intelligent AI Services
            </motion.span>
            <br />
            <motion.span 
              className="text-gray-900"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              for Industrial IoT
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-responsive-xl text-gray-600 max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0"
          >
            Transform your operations with cutting-edge AI and IoT integration. 
            <span className="hidden sm:inline"> Predict, detect, and automate for unprecedented efficiency.</span>
            <span className="sm:hidden"> Predict, detect, and automate efficiently.</span>
          </motion.p>

          {/* Live Metrics Strip - Mobile optimized */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center mb-8 sm:mb-12"
          >
            <div className="glass-card-white px-4 py-3 sm:px-8 sm:py-4 rounded-full shadow-glass">
              <div className="flex items-center gap-2 sm:gap-4">
                <span className="text-xs sm:text-sm text-gray-600 font-medium mobile-hidden">Live Metrics:</span>
                <span className="text-xs text-gray-600 font-medium mobile-only">Live:</span>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentMetric}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-2 sm:gap-3"
                  >
                    <motion.div
                      className={`w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-r ${liveMetrics[currentMetric].color} p-1 sm:p-1.5`}
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 2, ease: "linear" }}
                    >
                      {React.createElement(liveMetrics[currentMetric].icon, { className: "w-full h-full text-white" })}
                    </motion.div>
                    <div className="text-left">
                      <div className="text-xs sm:text-sm font-semibold text-gray-800">
                        {liveMetrics[currentMetric].value}
                      </div>
                      <div className="text-xs text-gray-500 mobile-hidden">
                        {liveMetrics[currentMetric].label}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons - Mobile optimized */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col gap-4 sm:flex-row sm:gap-6 justify-center mb-8 sm:mb-12 px-4 sm:px-0"
          >
            <motion.button 
              className="group gradient-bg-animated text-white btn-responsive rounded-full font-semibold magnetic-button shimmer-effect flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto"
              whileHover={!isMobile ? { 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(65, 105, 225, 0.4)"
              } : {}}
              whileTap={{ scale: 0.95 }}
              aria-label="Start free trial of Valcom AI Services"
            >
              Start Free Trial
              <motion.div
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6" />
              </motion.div>
            </motion.button>
            
            <motion.button 
              className="group glass-card-white btn-responsive rounded-full font-semibold shadow-glass hover:shadow-elevated transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 text-gray-700 hover:text-primary w-full sm:w-auto"
              whileHover={!isMobile ? { scale: 1.05 } : {}}
              whileTap={{ scale: 0.95 }}
              aria-label="Watch live demo of Valcom AI platform"
            >
              <motion.div
                whileHover={!isMobile ? { scale: 1.2 } : {}}
                className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center"
              >
                <Play className="w-2 h-2 sm:w-3 sm:h-3 text-white ml-0.5" />
              </motion.div>
              <span className="hidden sm:inline">Watch Live Demo</span>
              <span className="sm:hidden">Demo</span>
            </motion.button>
          </motion.div>

          {/* Quick Feature Highlights - Mobile optimized */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-600 px-4 sm:px-0"
          >
            {[
              { mobile: '⚡ Real-time', desktop: '⚡ Real-time Processing' },
              { mobile: '🧠 AI Insights', desktop: '🧠 AI-Powered Insights' },
              { mobile: '🔒 Secure', desktop: '🔒 Enterprise Security' },
              { mobile: '🚀 Deploy', desktop: '🚀 Instant Deployment' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={!isMobile ? { scale: 1.05, y: -2 } : {}}
                className="glass-card-white px-2 py-2 sm:px-4 sm:py-2 rounded-full shadow-glass hover:shadow-elevated transition-all duration-300 cursor-pointer text-center"
              >
                <span className="sm:hidden">{feature.mobile}</span>
                <span className="mobile-hidden">{feature.desktop}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default Hero;