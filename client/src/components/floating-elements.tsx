import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export function FloatingElements() {
  const elements = [
    { id: 1, color: 'from-purple-500/10 to-pink-500/10', size: 'w-64 h-64', top: '10%', left: '10%', animationDuration: '15s' },
    { id: 2, color: 'from-blue-400/10 to-cyan-400/10', size: 'w-80 h-80', top: '60%', left: '70%', animationDuration: '20s' },
    { id: 3, color: 'from-yellow-400/10 to-orange-400/10', size: 'w-96 h-96', top: '30%', left: '50%', animationDuration: '25s' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className={`absolute rounded-full bg-gradient-to-br ${element.color} ${element.size}`}
          style={{
            top: element.top,
            left: element.left,
            animation: `float ${element.animationDuration} ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: 0.1,
          }}
          animate={{
            y: [0, 20, 0],
            rotate: [0, 180],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
