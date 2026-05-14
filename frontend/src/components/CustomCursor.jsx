import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-neon-blue pointer-events-none z-50 mix-blend-screen"
      variants={variants}
      animate="default"
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
    >
      <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-neon-purple rounded-full -translate-x-1/2 -translate-y-1/2 glow-effect"></div>
    </motion.div>
  );
};

export default CustomCursor;
