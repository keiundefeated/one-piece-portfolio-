import { motion } from "framer-motion";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep via-ocean-dark to-ocean-deep" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-pirate text-4xl md:text-6xl text-gold text-glow-gold mb-4">
            Treasure Islands
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
            Each project is an island I've discovered on my journey across the Grand Line
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-transparent mx-auto mt-4" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <motion.div
                className="glass rounded-2xl p-6 h-full relative overflow-hidden cursor-pointer transition-all duration-500"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Glow effect on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${project.accent}15, transparent 70%)`,
                  }}
                />

                {/* Island Icon */}
                <div className="text-5xl mb-4 relative z-10">{project.image}</div>

                {/* Danger level */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs px-2 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/20">
                    ⚠️ {project.danger}
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full bg-gold/10 text-gold border border-gold/20">
                    🏝️ {project.island}
                  </span>
                </div>

                <h3
                  className="font-pirate text-2xl text-white mb-2 group-hover:text-gold transition-colors duration-300"
                >
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Hover Reveal - hidden treasure */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-ocean-dark via-ocean-dark/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                >
                  <motion.a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-gold font-pirate text-lg hover:text-gold-light transition-colors"
                  >
                    <span>⚓ View Treasure</span>
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Decorative compass */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="glass rounded-full p-4 inline-flex items-center gap-3">
            <span className="animate-spin-slow text-xl">🧭</span>
            <span className="text-gray-400 text-sm">The treasure is out there...</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
