import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Thermometer, 
  Gauge, 
  Zap, 
  Droplets, 
  Database,
  Brain,
  BarChart3,
  Play,
  Pause,
  RotateCcw,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';

const IoTSimulation = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState(1);
  const [selectedStage, setSelectedStage] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const stages = [
    {
      id: 'sensors',
      title: 'IoT Sensors',
      shortTitle: 'Sensors',
      icon: Thermometer,
      position: { x: isMobile ? 10 : 10, y: 50 },
      color: 'from-blue-500 to-cyan-500',
      description: 'Collecting real-time data',
      metrics: ['6 Sensors Active', '99.9% Uptime']
    },
    {
      id: 'edge',
      title: 'Edge Processing',
      shortTitle: 'Edge',
      icon: Database,
      position: { x: isMobile ? 35 : 35, y: 50 },
      color: 'from-purple-500 to-pink-500',
      description: 'Local data processing',
      metrics: ['Real-time Processing', 'Sub-10ms Latency']
    },
    {
      id: 'ai',
      title: 'AI Engine',
      shortTitle: 'AI',
      icon: Brain,
      position: { x: isMobile ? 65 : 65, y: 50 },
      color: 'from-green-500 to-emerald-500',
      description: 'Machine learning analysis',
      metrics: ['Neural Networks', '95% Accuracy']
    },
    {
      id: 'insights',
      title: 'Insights',
      shortTitle: 'Insights',
      icon: BarChart3,
      position: { x: isMobile ? 90 : 90, y: 50 },
      color: 'from-orange-500 to-red-500',
      description: 'Actionable insights',
      metrics: ['Live Dashboards', 'Automated Alerts']
    }
  ];

  const sensors = [
    { id: 1, type: 'Temperature', icon: Thermometer, value: '72°F' },
    { id: 2, type: 'Pressure', icon: Gauge, value: '145 PSI' },
    { id: 3, type: 'Humidity', icon: Droplets, value: '45%' },
    { id: 4, type: 'Power', icon: Zap, value: '480V' },
  ];

  // Data particle animation
  const DataParticle = ({ delay, isAnomaly = false }) => {
    if (!isPlaying) return null;
    
    return (
      <motion.div
        className={`absolute w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
          isAnomaly 
            ? 'bg-red-500 shadow-lg shadow-red-500/50' 
            : 'bg-blue-500 shadow-lg shadow-blue-500/50'
        }`}
        initial={{ x: '10%', y: '50%', opacity: 0, scale: 0 }}
        animate={{
          x: ['10%', '35%', '65%', '90%'],
          opacity: [0, 1, 1, 0],
          scale: [0, 1, 1, 0],
        }}
        transition={{
          duration: 4 / speed,
          delay: delay,
          repeat: Infinity,
          repeatDelay: 1 / speed,
          ease: "easeInOut"
        }}
      />
    );
  };

  const ProcessingStage = ({ stage, index }) => {
    const Icon = stage.icon;
    const isSelected = selectedStage === stage.id;

    return (
      <div 
        className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
        style={{ 
          left: `${stage.position.x}%`, 
          top: `${stage.position.y}%` 
        }}
        onClick={() => setSelectedStage(isSelected ? null : stage.id)}
      >
        {/* Stage container */}
        <motion.div
          className={`relative bg-white/90 backdrop-blur-md p-2 sm:p-4 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 min-h-[44px] min-w-[44px] ${
            isSelected ? 'ring-2 ring-blue-500 scale-110' : ''
          }`}
          whileHover={{ scale: isMobile ? 1 : 1.05 }}
          animate={isPlaying ? {
            boxShadow: [
              "0 4px 20px rgba(0, 0, 0, 0.1)",
              "0 8px 30px rgba(59, 130, 246, 0.3)",
              "0 4px 20px rgba(0, 0, 0, 0.1)"
            ]
          } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {/* Icon */}
          <motion.div
            className={`w-6 h-6 sm:w-10 sm:h-10 mx-auto mb-1 sm:mb-2 rounded-lg bg-gradient-to-r ${stage.color} p-1 sm:p-2 shadow-md`}
            animate={isPlaying ? { rotate: [0, 360] } : {}}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <Icon className="w-full h-full text-white" />
          </motion.div>

          <h3 className="text-xs font-semibold text-gray-800 text-center mb-1">
            <span className="sm:hidden">{stage.shortTitle}</span>
            <span className="mobile-hidden">{stage.title}</span>
          </h3>

          {/* Processing indicator */}
          {isPlaying && (
            <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className={`h-full bg-gradient-to-r ${stage.color}`}
                animate={{ x: ["-100%", "100%"] }}
                transition={{
                  duration: 2 / speed,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          )}
        </motion.div>

        {/* Detailed popup */}
        <AnimatePresence>
          {isSelected && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: isMobile ? -80 : -60, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-md p-3 rounded-lg shadow-xl border border-gray-200 min-w-32 sm:min-w-48 z-50"
            >
              <h4 className="font-semibold text-gray-800 mb-1 text-sm">{stage.title}</h4>
              <p className="text-xs text-gray-600 mb-2">{stage.description}</p>
              <div className="space-y-1">
                {stage.metrics.map((metric, idx) => (
                  <div key={idx} className="flex items-center gap-1 text-xs text-gray-500">
                    <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                    <span>{metric}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <div className="relative w-full h-64 sm:h-80 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-2xl border border-gray-200 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
            backgroundSize: isMobile ? '15px 15px' : '20px 20px'
          }}
        />
      </div>

      {/* Control panel */}
      <div className="absolute top-2 sm:top-4 left-2 sm:left-4 flex items-center gap-1 sm:gap-2 bg-white/90 backdrop-blur-md p-1.5 sm:p-2 rounded-lg shadow-md border border-gray-200 z-40">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsPlaying(!isPlaying)}
          className="flex items-center gap-1 px-2 py-1 rounded bg-blue-600 text-white font-medium text-xs sm:text-sm hover:bg-blue-700 transition-colors min-h-[32px]"
        >
          {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
          <span className="mobile-hidden">{isPlaying ? 'Pause' : 'Play'}</span>
        </motion.button>

        <select 
          value={speed} 
          onChange={(e) => setSpeed(Number(e.target.value))}
          className="text-xs border border-gray-300 rounded px-1 py-1 bg-white min-h-[32px]"
        >
          <option value={0.5}>0.5x</option>
          <option value={1}>1x</option>
          <option value={2}>2x</option>
          <option value={3}>3x</option>
        </select>

        <motion.button
          whileHover={{ scale: 1.1, rotate: 180 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.location.reload()}
          className="p-1 rounded bg-gray-100 hover:bg-gray-200 transition-colors min-h-[32px] min-w-[32px] flex items-center justify-center"
        >
          <RotateCcw className="w-3 h-3 text-gray-600" />
        </motion.button>
      </div>

      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-5">
        <defs>
          <linearGradient id="connectionGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0.6 }} />
            <stop offset="50%" style={{ stopColor: '#1d4ed8', stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 0.6 }} />
          </linearGradient>
        </defs>
        
        <motion.path
          d="M 20% 50% L 30% 50%"
          stroke="url(#connectionGrad)"
          strokeWidth={isMobile ? "1" : "2"}
          fill="none"
          strokeDasharray="4,4"
          animate={isPlaying ? { strokeDashoffset: [0, -8] } : {}}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M 45% 50% L 55% 50%"
          stroke="url(#connectionGrad)"
          strokeWidth={isMobile ? "1" : "2"}
          fill="none"
          strokeDasharray="4,4"
          animate={isPlaying ? { strokeDashoffset: [0, -8] } : {}}
          transition={{ duration: 1, repeat: Infinity, ease: "linear", delay: 0.3 }}
        />
        <motion.path
          d="M 75% 50% L 85% 50%"
          stroke="url(#connectionGrad)"
          strokeWidth={isMobile ? "1" : "2"}
          fill="none"
          strokeDasharray="4,4"
          animate={isPlaying ? { strokeDashoffset: [0, -8] } : {}}
          transition={{ duration: 1, repeat: Infinity, ease: "linear", delay: 0.6 }}
        />
      </svg>

      {/* Processing stages */}
      {stages.map((stage, index) => (
        <ProcessingStage key={stage.id} stage={stage} index={index} />
      ))}

      {/* Data particles - reduced count on mobile */}
      {isPlaying && (
        <>
          {[...Array(isMobile ? 2 : 3)].map((_, i) => (
            <DataParticle key={i} delay={i * 0.8} />
          ))}
          <DataParticle delay={2.5} isAnomaly={true} />
        </>
      )}

      {/* Status indicator */}
      <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 bg-white/90 backdrop-blur-md p-2 rounded-lg shadow-md border border-gray-200">
        <div className="flex items-center gap-2">
          <motion.div
            className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-green-500' : 'bg-gray-400'}`}
            animate={isPlaying ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 1, repeat: Infinity }}
          />
          <span className="text-xs font-medium text-gray-700">
            <span className="sm:hidden">{isPlaying ? 'Active' : 'Paused'}</span>
            <span className="mobile-hidden">{isPlaying ? 'System Active' : 'System Paused'}</span>
          </span>
        </div>
      </div>

      {/* Sensor list - mobile optimized */}
      <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-white/90 backdrop-blur-md p-2 rounded-lg shadow-md border border-gray-200">
        <div className="text-xs font-medium text-gray-700 mb-1 mobile-hidden">Sensors</div>
        <div className="text-xs font-medium text-gray-700 mb-1 mobile-only">Live</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs">
          {sensors.slice(0, isMobile ? 2 : 4).map((sensor) => {
            const Icon = sensor.icon;
            return (
              <div key={sensor.id} className="flex items-center gap-1">
                <Icon className="w-3 h-3 text-blue-600 flex-shrink-0" />
                <span className="text-gray-600">{sensor.value}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Instructions */}
      <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white/90 backdrop-blur-md p-2 rounded-lg shadow-md border border-gray-200 max-w-32 sm:max-w-48">
        <p className="text-xs text-gray-600">
          <span className="mobile-hidden"><strong>Tip:</strong> Click on any stage to see details</span>
          <span className="mobile-only"><strong>Tap</strong> stages for details</span>
        </p>
      </div>
    </div>
  );
};

export default IoTSimulation;