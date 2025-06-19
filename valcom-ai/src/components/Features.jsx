import React from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  AlertCircle, 
  Workflow, 
  Eye, 
  Cpu,
  Zap,
  Shield,
  BarChart
} from 'lucide-react';

const features = [
  {
    icon: Activity,
    title: 'Predictive Maintenance',
    description: 'AI models trained on equipment sensor data to predict failures before they occur, minimizing downtime and costs.',
    color: 'from-blue-500 to-cyan-500',
    delay: 0,
  },
  {
    icon: AlertCircle,
    title: 'Anomaly Detection',
    description: 'Real-time detection of irregularities across industrial operations using advanced machine learning algorithms.',
    color: 'from-purple-500 to-pink-500',
    delay: 0.1,
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description: 'Rule-based and AI-triggered workflows for alerts, maintenance scheduling, and comprehensive reporting.',
    color: 'from-green-500 to-emerald-500',
    delay: 0.2,
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    description: 'Advanced image recognition for monitoring, surveillance, and quality inspection in agriculture and oil sectors.',
    color: 'from-orange-500 to-red-500',
    delay: 0.3,
  },
  {
    icon: Cpu,
    title: 'Edge AI & Federated Learning',
    description: 'Model training across distributed edge devices without moving raw data to the cloud for privacy-sensitive environments.',
    color: 'from-indigo-500 to-purple-500',
    delay: 0.4,
  },
];

const FeatureCard = ({ feature, index }) => {
  const Icon = feature.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: feature.delay }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative h-full"
    >
      {/* Background glow effect */}
      <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-all duration-500`} />
      
      {/* Card */}
      <div className="relative glass-card-white card-responsive rounded-xl sm:rounded-2xl shadow-glass hover:shadow-elevated transition-all duration-500 border border-gray-100 hover:border-gray-200 h-full flex flex-col">
        {/* Icon with animated background */}
        <motion.div 
          className="relative mb-4 sm:mb-6"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-r ${feature.color} p-3 sm:p-4 shadow-xl group-hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}>
            <Icon className="w-full h-full text-white relative z-10" />
            {/* Shimmer effect */}
            <div className="absolute inset-0 shimmer-effect" />
          </div>
          {/* Floating particles around icon */}
          <motion.div
            className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full opacity-0 group-hover:opacity-100"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              delay: index * 0.2
            }}
          />
        </motion.div>
        
        {/* Content */}
        <div className="flex-1 flex flex-col">
          <motion.h3 
            className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300"
            whileHover={{ scale: 1.02 }}
          >
            {feature.title}
          </motion.h3>
          <motion.p 
            className="text-sm sm:text-base text-gray-600 leading-relaxed flex-1 group-hover:text-gray-700 transition-colors duration-300"
            initial={{ opacity: 0.8 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: feature.delay + 0.2 }}
          >
            {feature.description}
          </motion.p>
          
          {/* Learn more link */}
          <motion.div
            className="mt-4 sm:mt-6 flex items-center text-primary font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer text-sm sm:text-base"
            whileHover={{ x: 5 }}
          >
            <span>Learn more</span>
            <motion.svg 
              className="w-4 h-4 ml-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </motion.svg>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const Features = () => {
  const stats = [
    { icon: Zap, value: '10x', label: 'Faster Processing' },
    { icon: Shield, value: '99.9%', label: 'Security Rate' },
    { icon: BarChart, value: '45%', label: 'Cost Reduction' },
    { icon: Activity, value: '24/7', label: 'Monitoring' },
  ];

  return (
    <section id="features" className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-secondary/5 to-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto container-padding relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.h2 
            id="features-heading"
            className="text-responsive-3xl font-bold mb-4 sm:mb-6 text-shadow"
            whileHover={{ scale: 1.02 }}
          >
            <span className="gradient-text-animated">AI-Powered Solutions</span>
          </motion.h2>
          <motion.p 
            className="text-responsive-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="hidden sm:inline">Leverage cutting-edge artificial intelligence to transform your industrial operations with unprecedented precision and efficiency.</span>
            <span className="sm:hidden">AI solutions to transform industrial operations with precision and efficiency.</span>
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="glass-card-white card-responsive rounded-2xl sm:rounded-3xl shadow-glass relative overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)`,
              backgroundSize: '32px 32px',
            }} />
          </div>
          
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center group cursor-pointer"
              >
                <motion.div
                  className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-primary to-secondary p-2 sm:p-3 group-hover:shadow-xl transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="w-full h-full text-white" />
                </motion.div>
                <motion.div 
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold gradient-text-animated mb-1 sm:mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-600 text-xs sm:text-sm font-medium group-hover:text-gray-800 transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;