"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function AnimationModule() {
  const pathname = usePathname(); // Detects route changes

  useEffect(() => {
    if (typeof window === "undefined") return;

    const elements = document.querySelectorAll<HTMLElement>(".is_animate");
    elements.forEach((el) => {
      el.style.opacity = "0";
    });

    const observer = new IntersectionObserver((entries, observerInstance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const animationName = el.dataset.animation || "";
          const delay = parseFloat(el.dataset.delay || "0");

          if (!el.classList.contains(animationName)) {
            el.style.animationDelay = `${delay}s`;
            el.classList.add(animationName);
            el.style.opacity = "1";
          }

          observerInstance.unobserve(el);
        }
      });
    }, { threshold: 0.1 });

    elements.forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]); // 🔁 Rerun when path changes

  return null;
}
