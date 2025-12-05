'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type TypingTextProps = {
  text: string;
  className?: string;
  delay?: number;
  typingSpeed?: number;
};

export function TypingText({ 
  text, 
  className = '',
  delay = 0.5,
  typingSpeed = 100 
}: TypingTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  
  // Reset animation when text changes
  useEffect(() => {
    setDisplayText('');
    setCurrentIndex(0);
  }, [text]);
  
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.substring(0, currentIndex + 1));
        setCurrentIndex(prev => prev + 1);
      }, typingSpeed);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, typingSpeed]);

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <motion.span 
      className={`inline-flex items-center ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      {displayText}
      <motion.span 
        className="inline-block w-[2px] h-6 bg-primary ml-1"
        animate={{ opacity: showCursor ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.span>
  );
}
