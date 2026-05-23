import { motion } from "framer-motion";
import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep via-ocean-dark to-ocean-deep" />

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-pirate text-4xl md:text-6xl text-gold text-glow-gold mb-4">
            Grand Line Route
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
            The journey from East Blue to the New World
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-transparent mx-auto mt-4" />
        </motion.div>

        <div className="relative">
          {/* Map Route Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-ocean-light to-gold/20 md:-translate-x-0.5" />

          {/* Ship on the route */}
          <motion.div
            className="absolute left-3 md:left-1/2 z-10 text-xl md:-translate-x-1/2"
            style={{ top: "0%" }}
            animate={{ top: ["0%", "100%"] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          >
            ⛵
          </motion.div>

          {experience.map((exp, i) => {
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={exp.id}
                className={`relative flex items-start gap-8 mb-12 md:mb-16 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                {/* Timeline node */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full glass-gold flex items-center justify-center text-xl border border-gold/30 shadow-glow-gold">
                    {exp.icon}
                  </div>
                </div>

                {/* Content */}
                <div className={`flex-1 min-w-0 ${!isLeft ? "md:text-right" : ""}`}>
                  <div className="glass rounded-2xl p-5 md:p-6 hover:border-gold/30 transition-all duration-300 group">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-gold/10 text-gold border border-gold/20">
                        {exp.location}
                      </span>
                      <span className="text-xs text-gray-500">{exp.period}</span>
                    </div>

                    <h3 className="font-pirate text-xl md:text-2xl text-white group-hover:text-gold transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-gold-light/70 font-pirate text-sm md:text-base mb-2">
                      {exp.company}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-3.5rem)]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
