import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export function InteractiveAvatar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      // Calculate mouse position relative to the center of the avatar
      const x = (e.clientX - rect.left - rect.width / 2) / 30; // Division slows down the movement
      const y = (e.clientY - rect.top - rect.height / 2) / 30;
      
      // Clamp values so pupils don't go outside eyes
      setMousePosition({ 
        x: Math.max(-8, Math.min(8, x)), 
        y: Math.max(-8, Math.min(8, y)) 
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="relative w-48 h-48 mx-auto md:mx-0 group cursor-pointer [perspective:1000px] flex items-center justify-center">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/20 to-neon-purple/20 rounded-full blur-2xl animate-pulse -z-10" />
      
      <motion.div 
        className="w-40 h-40 bg-slate-900 border-2 border-neon-blue rounded-[2rem] p-4 shadow-[0_0_30px_rgba(6,182,212,0.3)] flex flex-col justify-center items-center relative overflow-hidden"
        whileHover={{ scale: 1.05, rotateY: mousePosition.x * 2, rotateX: -mousePosition.y * 2 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Antenna */}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-6 bg-neon-purple rounded-b-xl flex items-end justify-center">
          <div className="w-3 h-3 mb-1 bg-white rounded-full animate-pulse shadow-[0_0_10px_white]" />
        </div>

        {/* Eyes Container */}
        <div className="flex gap-6 mt-4">
          {/* Left Eye */}
          <div className="w-12 h-14 bg-slate-950 rounded-2xl border-2 border-slate-700 relative overflow-hidden flex items-center justify-center shadow-inner">
            <motion.div 
              className="w-5 h-8 bg-neon-blue rounded-full shadow-[0_0_15px_#06b6d4]"
              animate={{ x: mousePosition.x, y: mousePosition.y }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            />
          </div>
          
          {/* Right Eye */}
          <div className="w-12 h-14 bg-slate-950 rounded-2xl border-2 border-slate-700 relative overflow-hidden flex items-center justify-center shadow-inner">
            <motion.div 
              className="w-5 h-8 bg-neon-blue rounded-full shadow-[0_0_15px_#06b6d4]"
              animate={{ x: mousePosition.x, y: mousePosition.y }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            />
          </div>
        </div>

        {/* Mouth (Changes shape based on cursor Y position) */}
        <motion.div 
          className="w-12 h-2 border-b-4 border-neon-purple rounded-b-xl mt-4"
          animate={{ 
            width: mousePosition.y > 3 ? 24 : 48, 
            height: mousePosition.y > 3 ? 10 : 2,
            borderRadius: mousePosition.y > 3 ? "50%" : "0 0 12px 12px"
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
        
        {/* Decorative Tech Lines */}
        <div className="absolute bottom-4 left-4 flex gap-1.5">
          <div className="w-1.5 h-4 bg-slate-700 rounded-full" />
          <div className="w-1.5 h-6 bg-neon-purple/50 rounded-full" />
          <div className="w-1.5 h-3 bg-slate-700 rounded-full" />
        </div>
        <div className="absolute bottom-4 right-4 flex gap-1.5">
          <div className="w-1.5 h-3 bg-slate-700 rounded-full" />
          <div className="w-1.5 h-5 bg-neon-blue/50 rounded-full" />
          <div className="w-1.5 h-4 bg-slate-700 rounded-full" />
        </div>
      </motion.div>
    </div>
  );
}
