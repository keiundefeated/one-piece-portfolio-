import { motion } from "framer-motion";
import { personal } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="relative py-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark to-ocean-deep" />

      {/* Wave divider */}
      <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden">
        <svg
          className="w-[200%] h-full opacity-20"
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,30 C360,0 720,60 1080,30 C1260,15 1350,30 1440,30 L1440,60 L0,60 Z"
            fill="#1a3a5c"
            animate={{
              d: [
                "M0,30 C360,0 720,60 1080,30 C1260,15 1350,30 1440,30 L1440,60 L0,60 Z",
                "M0,35 C360,55 720,5 1080,35 C1260,45 1350,35 1440,35 L1440,60 L0,60 Z",
                "M0,30 C360,0 720,60 1080,30 C1260,15 1350,30 1440,30 L1440,60 L0,60 Z",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        {/* Jolly Roger */}
        <motion.div
          className="text-4xl mb-4"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          ☠️
        </motion.div>

        <h3 className="font-pirate text-2xl text-gold mb-2">
          {personal.crew}
        </h3>

        <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
          "The treasure of great code is out there — and we're going to build it!"
        </p>

        {/* Navigation links */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {["Home", "About", "Projects", "Skills", "Journey", "Contact"].map((link, i) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase() === "home" ? "hero" : link.toLowerCase() === "journey" ? "experience" : link.toLowerCase()}`}
              className="text-xs uppercase tracking-wider text-gray-500 hover:text-gold transition-colors"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              {link}
            </motion.a>
          ))}
        </div>

        <div className="border-t border-white/5 pt-6">
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} {personal.name} — All Rights Reserved.
            <br />
            Made with{" "}
            <span className="text-red-400">❤️</span> by the{" "}
            <span className="text-gold font-pirate">Straw Hat Devs</span>
          </p>
          <p className="text-gray-700 text-[10px] mt-2">
            One Piece is property of Eiichiro Oda, Shueisha, and Toei Animation.
            This is a fan-made portfolio tribute.
          </p>
        </div>

        {/* Scroll to top */}
        <motion.button
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full glass-gold flex items-center justify-center text-lg z-40 shadow-glow-gold"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
        >
          ⚓
        </motion.button>
      </div>
    </footer>
  );
}
