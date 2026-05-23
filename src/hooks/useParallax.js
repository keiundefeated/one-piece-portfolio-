import { useEffect, useRef } from "react";

export function useParallax(speed = 0.5) {
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const scrolled = window.scrollY;
      const offset = rect.top + scrolled;
      const diff = scrolled - offset;
      ref.current.style.transform = `translateY(${diff * speed}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return ref;
}
