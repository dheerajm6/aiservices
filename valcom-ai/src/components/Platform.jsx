import React from 'react';
import { motion } from 'framer-motion';
import { Check, Database, Cloud, Brain, Gauge, ArrowRight } from 'lucide-react';
import IoTSimulation from './IoTSimulation';

const Platform = () => {
  const platformFeatures = [
    'Real-time data processing and analytics',
    'Scalable cloud and edge deployment',
    'Secure, privacy-first architecture',
    'Industry-specific AI models',
  ];

  const flowNodes = [
    { id: 1, label: 'Sensors', icon: Gauge, color: 'from-blue-500 to-cyan-500' },
    { id: 2, label: 'Edge Processing', icon: Database, color: 'from-purple-500 to-pink-500' },
    { id: 3, label: 'AI Engine', icon: Cloud, color: 'from-green-500 to-emerald-500' },
    { id: 4, label: 'Insights', icon: Brain, color: 'from-orange-500 to-red-500' },
  ];

  return (
    <section id="platform" className="section-padding bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-secondary/5 to-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto container-padding relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-16"
        >
          <motion.h2 
            id="platform-heading"
            className="text-responsive-3xl font-bold mb-4 sm:mb-6 text-shadow"
            whileHover={{ scale: 1.02 }}
          >
            Core <span className="gradient-text-animated">AI & IoT Platform</span>
          </motion.h2>
          <motion.p 
            className="text-responsive-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="hidden sm:inline">Experience our complete IoT-to-insights pipeline in action. Watch real-time data flow from sensors through AI processing to actionable insights.</span>
            <span className="sm:hidden">Complete IoT-to-insights pipeline. Real-time data flow from sensors to AI insights.</span>
          </motion.p>
        </motion.div>

        {/* Live IoT Simulation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 sm:mb-20"
        >
          <div className="glass-card-white card-responsive rounded-2xl sm:rounded-3xl shadow-glass mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-4">
              <div>
                <h3 className="text-responsive-2xl font-bold text-gray-900 mb-2">
                  <span className="hidden sm:inline">Live IoT Pipeline Simulation</span>
                  <span className="sm:hidden">Live IoT Pipeline</span>
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  <span className="hidden sm:inline">Interactive demonstration of our complete AI & IoT platform in action</span>
                  <span className="sm:hidden">Interactive AI & IoT demo</span>
                </p>
              </div>
              <div className="hidden lg:flex items-center gap-2 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span>Data Flow</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <span>Anomaly</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span>Normal</span>
                </div>
              </div>
            </div>
            
            <IoTSimulation />
            
            <div className="mt-4 sm:mt-6 text-center">
              <p className="text-xs sm:text-sm text-gray-500">
                <span className="hidden sm:inline">💡 <strong>Tip:</strong> Click on any stage to see detailed metrics • Use controls to adjust simulation speed</span>
                <span className="sm:hidden">💡 <strong>Tap</strong> stages for details</span>
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="content-spacing"
          >
            <motion.h3 
              className="text-responsive-3xl font-bold mb-4 sm:mb-6 text-gray-900"
              whileHover={{ scale: 1.02 }}
            >
              IoT + AI Fabric
            </motion.h3>
            <motion.p 
              className="text-responsive-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="hidden sm:inline">Our integrated platform seamlessly combines IoT connectivity with advanced AI capabilities 
              to deliver unprecedented insights and automation for your industrial operations. Watch the simulation above to see how data flows through our entire pipeline.</span>
              <span className="sm:hidden">Integrated platform combining IoT connectivity with AI capabilities for industrial insights and automation.</span>
            </motion.p>

            <div className="space-y-4">
              {platformFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <motion.div 
                    className="w-7 h-7 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Check className="w-4 h-4 text-white" />
                  </motion.div>
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors font-medium">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(65, 105, 225, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 sm:mt-8 gradient-bg-animated text-white btn-responsive rounded-full font-semibold magnetic-button shimmer-effect flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto"
            >
              <span className="hidden sm:inline">Learn More About Our Platform</span>
              <span className="sm:hidden">Learn More</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.div>
            </motion.button>
          </motion.div>

          {/* Right Visual - Simplified Flow for Mobile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="glass-card-white card-responsive rounded-2xl sm:rounded-3xl shadow-glass">
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
                <span className="hidden sm:inline">Pipeline Architecture</span>
                <span className="sm:hidden">Pipeline Flow</span>
              </h4>
              
              {/* Simplified flow for secondary view */}
              <div className="space-y-4 sm:space-y-6">
                {flowNodes.map((node, index) => {
                  const Icon = node.icon;
                  return (
                    <motion.div
                      key={node.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.15 }}
                      whileHover={{ scale: 1.05, x: 10 }}
                      className="flex items-center gap-3 sm:gap-4 group cursor-pointer"
                    >
                      <motion.div
                        className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-r ${node.color} p-2 sm:p-3 shadow-xl group-hover:shadow-2xl transition-all duration-300`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.8 }}
                      >
                        <Icon className="w-full h-full text-white" />
                      </motion.div>
                      
                      <div className="flex-1">
                        <h5 className="text-sm sm:text-base font-semibold text-gray-800 group-hover:text-primary transition-colors">
                          {node.label}
                        </h5>
                        <div className="w-full h-1 bg-gray-200 rounded-full mt-1 sm:mt-2 overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${node.color}`}
                            initial={{ width: "0%" }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                          />
                        </div>
                      </div>
                      
                      {index < flowNodes.length - 1 && (
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-primary transition-colors" />
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Technical Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 sm:mt-20 grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {[
            { title: 'Processing Power', value: '10TB/day', desc: 'Data processing capacity' },
            { title: 'Response Time', value: '< 50ms', desc: 'Real-time processing latency' },
            { title: 'AI Accuracy', value: '99.7%', desc: 'Machine learning precision' },
          ].map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card-white card-responsive rounded-xl sm:rounded-2xl shadow-glass hover:shadow-elevated transition-all duration-300 text-center group"
            >
              <motion.div 
                className="text-2xl sm:text-3xl font-bold gradient-text-animated mb-1 sm:mb-2"
                whileHover={{ scale: 1.1 }}
              >
                {spec.value}
              </motion.div>
              <h4 className="text-sm sm:text-base font-semibold text-gray-800 mb-1 group-hover:text-primary transition-colors">
                {spec.title}
              </h4>
              <p className="text-gray-600 text-xs sm:text-sm">{spec.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Platform;