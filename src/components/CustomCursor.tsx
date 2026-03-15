import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

export function CustomCursor() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // A slightly heavier spring gives it a very smooth, buttery movement
  const smoothX = useSpring(x, { damping: 25, stiffness: 250, mass: 0.5 });
  const smoothY = useSpring(y, { damping: 25, stiffness: 250, mass: 0.5 });
  
  const [hoverState, setHoverState] = useState<'default' | 'click' | 'drag'>('default');

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if hovering over draggable carousel cards
      if (target.closest('.cursor-grab') || target.closest('.active\\:cursor-grabbing')) {
        setHoverState('drag');
      } 
      // Check if hovering over links, buttons, or anything clickable
      else if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button')
      ) {
        setHoverState('click');
      } 
      // Default state
      else {
        setHoverState('default');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [x, y]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:flex items-center justify-center overflow-hidden shadow-sm"
      style={{ 
        x: smoothX, 
        y: smoothY, 
        translateX: '-50%', 
        translateY: '-50%' 
      }}
      animate={{
        // Stretches into a pill shape when active, shrinks to a dot when default
        width: hoverState === 'default' ? 12 : 72,
        height: hoverState === 'default' ? 12 : 32,
        backgroundColor: hoverState === 'default' ? '#4C7B7B' : '#F7F4EE',
        borderColor: hoverState === 'default' ? 'transparent' : '#4C7B7B',
        borderWidth: hoverState === 'default' ? 0 : 2,
        borderRadius: 9999, // Always perfectly rounded
      }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {/* The Text that appears inside the cursor */}
      <AnimatePresence mode="wait">
        {hoverState === 'click' && (
          <motion.span
            key="click"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.1 } }}
            className="text-[10px] font-black tracking-widest text-[#4C7B7B] uppercase"
          >
            CLICK
          </motion.span>
        )}
        {hoverState === 'drag' && (
          <motion.span
            key="drag"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.1 } }}
            className="text-[10px] font-black tracking-widest text-[#4C7B7B] uppercase"
          >
            DRAG
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}