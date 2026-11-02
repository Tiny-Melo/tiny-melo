import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initHomeAnimations() {
  const motion = gsap.matchMedia();

  motion.add("(prefers-reduced-motion: no-preference)", () => {
    gsap.from(".hero .eyebrow, .hero h1, .hero-description, .hero-actions", {
      y: 25,
      opacity: 0,
      duration: 0.9,
      stagger: 0.1,
      ease: "power3.out",
      clearProps: "transform",
    });

    gsap.from(".app-tile", {
      y: 35,
      opacity: 0,
      duration: 1.0,
      stagger: 0.1,
      delay: 0.2,
      ease: "power3.out",
      clearProps: "transform",
    });

    gsap.utils
      .toArray<HTMLElement>(".project-art")
      .forEach((art) => {
        gsap.fromTo(
          art,
          { scale: 0.88 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: art,
              start: "top 95%",
              end: "top 35%",
              scrub: 1,
            },
          },
        );
        gsap.to(art, {
          opacity: 0.25,
          ease: "none",
          scrollTrigger: {
            trigger: art,
            start: "bottom 15%",
            end: "bottom -25%",
            scrub: 1,
          },
        });
      });

    const paragraph = document.querySelector(".reveal-words");
    if (paragraph && paragraph.textContent) {
      const words = paragraph.textContent.trim().split(/\s+/);
      paragraph.replaceChildren(
        ...words.map((word) => {
          const span = document.createElement("span");
          span.textContent = word + " ";
          return span;
        }),
      );
      gsap.fromTo(
        ".reveal-words span",
        { opacity: 0.18 },
        {
          opacity: 1,
          stagger: 0.1,
          ease: "none",
          scrollTrigger: {
            trigger: paragraph,
            start: "top 85%",
            end: "bottom 45%",
            scrub: 1,
          },
        },
      );
    }
  });
}
