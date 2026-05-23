import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("#hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);

      const sections = links.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActive(`#${sections[i]}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-dark py-2"
            : "bg-transparent py-4"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <motion.button
            onClick={() => scrollTo("#hero")}
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-sunset flex items-center justify-center text-lg animate-spin-slow">
              ☠️
            </div>
            <span className="font-pirate text-xl text-gold hidden sm:block">
              Straw Hat Dev
            </span>
          </motion.button>

          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <motion.button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`relative px-4 py-2 text-sm tracking-wider uppercase font-medium transition-colors ${
                  active === link.href
                    ? "text-gold"
                    : "text-gray-400 hover:text-white"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.label}
                {active === link.href && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-gold rounded-full"
                  />
                )}
              </motion.button>
            ))}
          </div>

          <motion.button
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setMobileOpen(!mobileOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <motion.span
              className="block w-6 h-0.5 bg-gold rounded"
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            />
            <motion.span
              className="block w-6 h-0.5 bg-gold rounded"
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.span
              className="block w-6 h-0.5 bg-gold rounded"
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            />
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-ocean-dark/95 backdrop-blur-xl flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="flex flex-col items-center gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
            >
              {links.map((link, i) => (
                <motion.button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`font-pirate text-3xl tracking-wide transition-colors ${
                    active === link.href ? "text-gold text-glow-gold" : "text-white hover:text-gold"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {link.label}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
