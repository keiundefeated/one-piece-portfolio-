import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { personal } from "../data/portfolio";
import profileImg from "../assets/profile.jpg";

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrolled = window.scrollY;
      const items = containerRef.current.querySelectorAll(".parallax-item");
      items.forEach((el, i) => {
        const speed = 0.1 + i * 0.05;
        el.style.transform = `translateY(${scrolled * speed}px)`;
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Ocean background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-dark via-ocean-deep to-ocean-mid" />

      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 60}%`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Moon */}
      <motion.div
        className="absolute top-20 right-[15%] w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-white/90 via-white/50 to-transparent"
        style={{
          boxShadow: "0 0 40px rgba(255,255,255,0.2), 0 0 80px rgba(255,255,255,0.1)",
        }}
        animate={{
          y: [0, -8, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Clouds */}
      <motion.div
        className="absolute top-32 left-[10%] text-4xl md:text-5xl opacity-20 parallax-item"
        animate={{ x: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        ☁️☁️☁️
      </motion.div>
      <motion.div
        className="absolute top-52 right-[20%] text-3xl md:text-4xl opacity-15 parallax-item"
        animate={{ x: [0, -20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      >
        ☁️☁️
      </motion.div>

      {/* Ship */}
      <motion.div
        className="absolute bottom-[25%] left-[5%] text-5xl md:text-7xl parallax-item animate-sail-rock"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 0.6 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
      >
        ⛵
      </motion.div>

      {/* Waves */}
      <div className="absolute bottom-0 left-0 right-0 h-32">
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-ocean-mid/50 to-transparent"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <svg
          className="absolute bottom-0 w-[200%] h-16 opacity-30"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,50 C320,0 640,100 960,50 C1280,0 1440,50 1440,50 L1440,100 L0,100 Z"
            fill="#1a3a5c"
            animate={{ d: [
              "M0,50 C320,0 640,100 960,50 C1280,0 1440,50 1440,50 L1440,100 L0,100 Z",
              "M0,60 C320,100 640,0 960,60 C1280,100 1440,60 1440,60 L1440,100 L0,100 Z",
              "M0,50 C320,0 640,100 960,50 C1280,0 1440,50 1440,50 L1440,100 L0,100 Z",
            ]}}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <motion.p
            className="text-ocean-light font-pirate text-lg md:text-xl tracking-[0.3em] uppercase mb-4"
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            The Great Age of Development
          </motion.p>

          <motion.h1
            className="font-pirate text-5xl md:text-7xl lg:text-8xl text-white mb-4 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Ahoy! I'm{" "}
            <span className="text-gold text-glow-gold">{personal.name}</span>
          </motion.h1>

          <motion.p
            className="font-pirate text-3xl md:text-4xl lg:text-5xl text-gold-light/80 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            {personal.epithet}
          </motion.p>

          <motion.p
            className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            {personal.summary}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.7 }}
          >
            <motion.a
              href="#projects"
              className="group relative px-10 py-4 bg-gradient-to-r from-gold to-sunset text-white font-bold text-lg rounded-full overflow-hidden shadow-glow-gold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                ⚓ Set Sail
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold via-gold-light to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
            </motion.a>

            <motion.a
              href="#contact"
              className="px-8 py-4 glass text-white font-semibold rounded-full border border-white/10 hover:border-gold/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📞 Contact Crew
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Wanted Poster */}
        <motion.div
          className="absolute -right-4 md:right-[10%] top-1/4 w-36 md:w-48 glass-gold rounded-lg p-3 hidden lg:block"
          initial={{ opacity: 0, x: 50, rotate: 5 }}
          animate={{ opacity: 1, x: 0, rotate: 5 }}
          transition={{ duration: 1, delay: 2 }}
          whileHover={{ rotate: 0, scale: 1.05 }}
        >
          <div className="text-center">
            <div className="text-[10px] uppercase tracking-widest text-gold mb-1">WANTED</div>
            <div className="w-full aspect-[3/4] bg-ocean-dark rounded mb-2 overflow-hidden border border-gold/30">
              <img src={profileImg} alt={personal.name} className="w-full h-full object-cover" />
            </div>
            <div className="font-pirate text-gold text-lg leading-tight">{personal.name}</div>
            <div className="text-gold-light/60 text-[10px]">Bounty</div>
            <div className="font-pirate text-gold text-xl text-glow-gold">{personal.bounty}</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-ocean-light/40 text-xs tracking-widest uppercase">Set Sail</span>
        <div className="w-6 h-10 border border-ocean-light/30 rounded-full flex items-start justify-center p-1">
          <motion.div
            className="w-1.5 h-3 bg-gold rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
