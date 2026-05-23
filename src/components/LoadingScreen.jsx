import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState("entering");
  const [show, setShow] = useState(true);

  useEffect(() => {
    const phrases = [
      "Entering the Grand Line...",
      "Crossing Reverse Mountain...",
      "Navigating the Calm Belt...",
      "Approaching the Red Line...",
      "Setting sail for Laugh Tale...",
    ];

    let idx = 0;
    const interval = setInterval(() => {
      idx = (idx + 1) % phrases.length;
      setPhase(phrases[idx]);
    }, 800);

    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(timer);
          clearInterval(interval);
          setTimeout(() => {
            setShow(false);
            setTimeout(onComplete, 500);
          }, 500);
          return 100;
        }
        return p + 1;
      });
    }, 30);

    return () => {
      clearInterval(timer);
      clearInterval(interval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9998] flex flex-col items-center justify-center bg-ocean-dark"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center"
          >
            <div className="text-6xl mb-6 animate-sail-rock">⛵</div>
            <h1 className="font-pirate text-4xl md:text-5xl text-gold mb-4 text-glow-gold">
              One Piece Portfolio
            </h1>
            <p className="text-ocean-light font-pirate text-xl md:text-2xl mb-8 tracking-wider">
              {phase}
            </p>
            <div className="w-64 md:w-80 h-2 bg-ocean-deep rounded-full overflow-hidden border border-ocean-light/30 mx-auto">
              <motion.div
                className="h-full bg-gradient-to-r from-gold via-gold-light to-gold rounded-full"
                style={{ width: `${progress}%` }}
                initial={{ width: "0%" }}
              />
            </div>
            <p className="text-ocean-light/60 text-sm mt-4 font-mono">
              {progress}%
            </p>
          </motion.div>

          <motion.div
            className="absolute bottom-10 left-0 right-0 text-center"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <p className="text-ocean-light/40 text-xs tracking-widest uppercase">
              The Great Age of Pirates
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
