import { motion } from "framer-motion";
import { skills } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden">
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
            Devil Fruit Powers
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
            Abilities awakened through countless battles with bugs and frameworks
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-transparent mx-auto mt-4" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="glass rounded-2xl p-6 relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Glow based on skill color */}
              <div
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle, ${skill.color}, transparent)` }}
              />

              <div className="flex items-start gap-4 mb-4">
                <motion.div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ backgroundColor: `${skill.color}15`, border: `1px solid ${skill.color}30` }}
                  whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.3 }}
                >
                  {skill.icon}
                </motion.div>
                <div>
                  <h3 className="font-pirate text-xl text-white group-hover:text-gold transition-colors">
                    {skill.name}
                  </h3>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: `${skill.color}20`, color: skill.color }}
                  >
                    {skill.type}
                  </span>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {skill.description}
              </p>

              {/* Haki/Energy Meter */}
              <div className="relative">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>Power Level</span>
                  <span className="font-pirate text-gold">{skill.level}%</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
                  <motion.div
                    className="h-full rounded-full relative"
                    style={{
                      background: `linear-gradient(90deg, ${skill.color}44, ${skill.color})`,
                      boxShadow: `0 0 8px ${skill.color}44`,
                    }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: i * 0.1, ease: "easeOut" }}
                  >
                    <div
                      className="absolute right-0 top-0 bottom-0 w-2 rounded-full"
                      style={{ backgroundColor: skill.color, boxShadow: `0 0 6px ${skill.color}` }}
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
