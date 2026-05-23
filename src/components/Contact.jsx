import { useState } from "react";
import { motion } from "framer-motion";
import { socials, easterEggs } from "../data/portfolio";

export default function Contact() {
  const [egg, setEgg] = useState(null);

  const randomEgg = () => {
    const e = easterEggs[Math.floor(Math.random() * easterEggs.length)];
    setEgg(e);
    setTimeout(() => setEgg(null), 3000);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-dark via-ocean-deep to-ocean-dark" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-pirate text-4xl md:text-6xl text-gold text-glow-gold mb-4">
            Den Den Mushi
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
            Send a transponder snail signal across the Grand Line
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-transparent mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact Form */}
          <motion.div
            className="glass rounded-2xl p-6 md:p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl animate-sail-rock">🐌</span>
              <div>
                <p className="font-pirate text-lg text-gold">Transponder Snail</p>
                <p className="text-xs text-gray-500">Secure Line - Den Den Mushi</p>
              </div>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input
                  type="text"
                  placeholder="Your Pirate Name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold/50 focus:bg-white/10 transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Den Den Mushi ID (Email)"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold/50 focus:bg-white/10 transition-all"
                />
              </div>
              <div>
                <textarea
                  rows="4"
                  placeholder="Your message to the crew..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold/50 focus:bg-white/10 transition-all resize-none"
                />
              </div>
              <motion.button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-gold to-sunset text-white font-semibold rounded-xl text-sm tracking-wide flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>🐌</span>
                Send Vivre Card
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.button>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="glass rounded-2xl p-6 md:p-8">
              <h3 className="font-pirate text-xl text-gold mb-4">Pirate Emblems</h3>
              <div className="grid grid-cols-2 gap-3">
                {socials.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    className="glass rounded-xl p-4 flex items-center gap-3 hover:border-gold/30 transition-all duration-300 group"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span className="text-2xl">{social.icon}</span>
                    <div>
                      <p className="text-white text-sm font-medium group-hover:text-gold transition-colors">
                        {social.name}
                      </p>
                      <p className="text-gray-500 text-xs">{social.handle}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Easter Egg */}
            <motion.div
              className="glass rounded-2xl p-4 text-center cursor-pointer"
              onClick={randomEgg}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {egg ? (
                <motion.p
                  className="font-pirate text-gold text-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {egg.emoji} {egg.phrase} {egg.emoji}
                </motion.p>
              ) : (
                <p className="text-gray-500 text-sm">
                  🎬 Click for a Straw Hat secret!
                </p>
              )}
            </motion.div>

            {/* Location */}
            <div className="glass rounded-2xl p-4 text-center">
              <p className="text-gray-400 text-sm">
                <span className="text-gold">📍</span> Currently sailing the{" "}
                <span className="text-gold font-pirate">New World</span>
              </p>
              <p className="text-gray-500 text-xs mt-1">
                *Available for remote voyages anywhere in the world
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
