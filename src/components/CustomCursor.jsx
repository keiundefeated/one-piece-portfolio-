import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [clicking, setClicking] = useState(false);
  const [visible, setVisible] = useState(false);

  const springX = useSpring(0, { stiffness: 200, damping: 30 });
  const springY = useSpring(0, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };
    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [visible]);

  useEffect(() => {
    springX.set(pos.x);
    springY.set(pos.y);
  }, [pos, springX, springY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-[9999]"
        style={{ x: springX.get() - 12, y: springY.get() - 12 }}
        animate={{
          scale: clicking ? 0.8 : 1,
          opacity: visible ? 1 : 0,
        }}
      >
        <svg viewBox="0 0 50 50" className="w-full h-full">
          <circle
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke="#d4a843"
            strokeWidth="2"
            opacity="0.8"
          />
          <circle cx="25" cy="10" r="3" fill="#d4a843" opacity="0.6" />
          <circle cx="25" cy="40" r="3" fill="#d4a843" opacity="0.6" />
          <circle cx="10" cy="25" r="3" fill="#d4a843" opacity="0.6" />
          <circle cx="40" cy="25" r="3" fill="#d4a843" opacity="0.6" />
          <circle cx="25" cy="25" r="4" fill="#d4a843" opacity="0.9" />
          <line x1="10" y1="25" x2="40" y2="25" stroke="#d4a843" strokeWidth="0.5" opacity="0.3" />
          <line x1="25" y1="10" x2="25" y2="40" stroke="#d4a843" strokeWidth="0.5" opacity="0.3" />
        </svg>
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-gold rounded-full pointer-events-none z-[9999]"
        style={{ x: pos.x - 3, y: pos.y - 3 }}
        animate={{ opacity: visible ? 1 : 0 }}
      />
    </>
  );
}
