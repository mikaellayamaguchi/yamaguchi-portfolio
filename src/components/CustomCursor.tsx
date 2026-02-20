import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CustomCursor() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const dotX = useMotionValue(0);
  const dotY = useMotionValue(0);
  
  const smoothX = useSpring(x, { damping: 25, stiffness: 200 });
  const smoothY = useSpring(y, { damping: 25, stiffness: 200 });
  const smoothDotX = useSpring(dotX, { damping: 15, stiffness: 300 });
  const smoothDotY = useSpring(dotY, { damping: 15, stiffness: 300 });
  
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button') || target.classList.contains('cursor-pointer')) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button') || target.classList.contains('cursor-pointer')) {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [x, y, dotX, dotY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block mix-blend-difference"
        style={{ x: smoothX, y: smoothY, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.div
          animate={{
            width: isClicking ? 30 : isHovering ? 60 : 40,
            height: isClicking ? 30 : isHovering ? 60 : 40,
            opacity: isHovering ? 0.3 : 0.5,
          }}
          transition={{ duration: 0.2 }}
          className="rounded-full border-2 border-white"
        />
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
        style={{ x: smoothDotX, y: smoothDotY, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.div
          animate={{ scale: isClicking ? 0.5 : isHovering ? 0 : 1 }}
          transition={{ duration: 0.15 }}
          className="w-2 h-2 rounded-full bg-[#4C7B7B]"
        />
      </motion.div>
    </>
  );
}