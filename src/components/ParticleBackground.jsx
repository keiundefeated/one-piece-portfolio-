import { useMemo } from "react";
import { motion } from "framer-motion";

function Particle({ index }) {
  const size = useMemo(() => Math.random() * 4 + 2, []);
  const x = useMemo(() => Math.random() * 100, []);
  const duration = useMemo(() => Math.random() * 20 + 15, []);
  const delay = useMemo(() => Math.random() * 20, []);
  const yStart = useMemo(() => Math.random() * 100, []);
  const opacity = useMemo(() => Math.random() * 0.5 + 0.1, []);
  const isGold = useMemo(() => Math.random() > 0.7, []);

  return (
    <motion.div
      className={`absolute rounded-full ${isGold ? "bg-gold" : "bg-blue-300"}`}
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        top: `${yStart}%`,
        opacity,
      }}
      animate={{
        x: [0, Math.random() * 100 - 50, 0],
        y: [0, Math.random() * -100 - 50, 0],
        opacity: [opacity, opacity * 2, opacity],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: "linear",
      }}
    />
  );
}

export default function ParticleBackground({ count = 40 }) {
  const particles = useMemo(
    () => Array.from({ length: count }, (_, i) => i),
    [count]
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((i) => (
        <Particle key={i} index={i} />
      ))}
    </div>
  );
}
