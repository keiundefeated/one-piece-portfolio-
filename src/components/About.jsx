import { motion } from "framer-motion";
import { personal } from "../data/portfolio";

const stats = [
  { label: "Years at Sea", value: "8+" },
  { label: "Crew Members", value: "15+" },
  { label: "Islands Conquered", value: "50+" },
  { label: "Treasures Found", value: "∞" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
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
            Captain's Log
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-transparent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Captain Profile Card */}
          <motion.div
            className="glass-gold rounded-2xl p-8 relative overflow-hidden group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gold/10 to-transparent rounded-bl-full" />

            <div className="flex items-start gap-6 mb-6">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-gold to-sunset flex items-center justify-center text-5xl flex-shrink-0 border-2 border-gold/50">
                ☠️
              </div>
              <div>
                <h3 className="font-pirate text-2xl md:text-3xl text-gold">{personal.name}</h3>
                <p className="text-gold-light/80 font-pirate text-lg">{personal.epithet}</p>
                <p className="text-gray-400 text-sm mt-1">{personal.title}</p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <span className="text-gold">🏴‍☠️</span>
                <span>Crew: <strong className="text-white">{personal.crew}</strong></span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <span className="text-gold">🌊</span>
                <span>Origin: <strong className="text-white">{personal.origin}</strong></span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <span className="text-gold">💰</span>
                <span>Bounty: <strong className="text-gold font-pirate text-base">{personal.bounty}</strong></span>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              {personal.description}
            </p>

            {/* Decorative corner */}
            <div className="absolute bottom-4 right-4 text-gold/20 text-4xl font-pirate">♪</div>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="glass rounded-2xl p-6 text-center group hover:border-gold/30 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  className="font-pirate text-3xl md:text-4xl text-gold text-glow-gold mb-1"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.5 + i * 0.15 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-400 text-xs uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}

            {/* Crew Quote */}
            <motion.div
              className="col-span-2 glass-gold rounded-2xl p-6 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <p className="font-pirate text-lg md:text-xl text-gold-light italic">
                "A crew isn't just about code — it's about nakama who push each other toward the horizon."
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
