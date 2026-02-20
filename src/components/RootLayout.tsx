import { useEffect, useState } from 'react';
import { motion, useSpring, useScroll } from 'framer-motion';
import { Outlet } from 'react-router';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

export function RootLayout() {
  const [darkMode, setDarkMode] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-[#F7F4EE] dark:bg-[#0a0a0a] transition-colors duration-500">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4C7B7B] via-[#6E9A9A] to-[#4C7B7B] origin-left z-[100]"
        style={{ scaleX }}
      />
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}