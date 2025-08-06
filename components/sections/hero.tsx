import { useEffect, useState, useRef } from "react"
import { gsap } from "gsap"
import { TextPlugin } from "gsap/TextPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"
import "../../styles/hero.css"

// Registrar los plugins
gsap.registerPlugin(TextPlugin, ScrollTrigger);

export function Hero() {
  const [mounted, setMounted] = useState(false)
  const { t } = useLanguage()
  
  // Referencias para las animaciones
  const heroRef = useRef<HTMLElement>(null)
  const greetingRef = useRef<HTMLHeadingElement>(null)
  const nameRef = useRef<HTMLHeadingElement>(null)
  const roleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const socialRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted && heroRef.current) {
      // Configurar estado inicial
      gsap.set([greetingRef.current, nameRef.current, roleRef.current, descriptionRef.current, buttonsRef.current, socialRef.current, imageRef.current], {
        opacity: 0,
        y: 50
      });

      const buttons = buttonsRef.current?.querySelectorAll('.btn');
      const socialLinks = socialRef.current?.querySelectorAll('.hero-social-link');

      if (buttons && buttons.length > 0) {
        gsap.set(buttons, {
          scale: 0.8
        });
      }

      if (socialLinks && socialLinks.length > 0) {
        gsap.set(socialLinks, {
          scale: 0.8
        });
      }

      if (imageRef.current) {
        gsap.set(imageRef.current, {
          scale: 0.9
        });
      }

      // Timeline para las animaciones de entrada
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Animación del saludo con efecto de escritura
      if (greetingRef.current) {
        tl.to(greetingRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out"
        })
        .to(greetingRef.current, {
          duration: 1.5,
          text: {
            value: t("hero.greeting"),
            delimiter: ""
          },
          ease: "none"
        }, "-=0.5");
      }

      // Animación del nombre
      if (nameRef.current) {
        tl.to(nameRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out"
        }, "-=0.5")
        .to(nameRef.current, {
          duration: 2,
          text: {
            value: t("hero.name"),
            delimiter: ""
          },
          ease: "none"
        }, "-=0.5");
      }

      // Animación del rol
      if (roleRef.current) {
        tl.to(roleRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out"
        }, "-=1")
        .to(roleRef.current, {
          duration: 1.5,
          text: {
            value: t("hero.role"),
            delimiter: ""
          },
          ease: "none"
        }, "-=0.5");
      }

      // Animación de la descripción
      if (descriptionRef.current) {
        tl.to(descriptionRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out"
        }, "-=1");
      }

      // Animación de los botones
      if (buttonsRef.current) {
        tl.to(buttonsRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out"
        }, "-=0.5");
      }

      if (buttons && buttons.length > 0) {
        tl.to(buttons, {
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)"
        }, "-=0.5");
      }

      // Animación de los enlaces sociales
      if (socialRef.current) {
        tl.to(socialRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out"
        }, "-=0.5");
      }

      if (socialLinks && socialLinks.length > 0) {
        tl.to(socialLinks, {
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)"
        }, "-=0.5");
      }

      // Animación de la imagen
      if (imageRef.current) {
        tl.to(imageRef.current, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out"
        }, "-=1");
      }

      // Efecto de hover en los botones
      buttons?.forEach(button => {
        button.addEventListener('mouseenter', () => {
          gsap.to(button, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        button.addEventListener('mouseleave', () => {
          gsap.to(button, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });

      // Efecto de hover en los enlaces sociales
      socialLinks?.forEach(link => {
        link.addEventListener('mouseenter', () => {
          gsap.to(link, {
            scale: 1.2,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        link.addEventListener('mouseleave', () => {
          gsap.to(link, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });

      // Cleanup function
      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
  }, [mounted, t])

  if (!mounted) return null

  return (
    <section ref={heroRef} id="home" className="hero">
      <div className="hero-gradient"></div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h2 ref={greetingRef} className="hero-subtitle"></h2>
            <h1 ref={nameRef} className="hero-title"></h1>
            <h3 ref={roleRef} className="hero-role"></h3>
          </div>

          <p ref={descriptionRef} className="hero-description">{t("hero.description")}</p>

          <div ref={buttonsRef} className="hero-buttons">
            <a href="#contact" className="btn btn-primary btn-lg">
              {t("hero.cta.contact")}
            </a>
            <a href="#projects" className="btn btn-outline btn-lg">
              {t("hero.cta.projects")}
            </a>
          </div>

          <div ref={socialRef} className="hero-social">
            <a href="https://github.com/JhonMM27" target="_blank" rel="noopener noreferrer" className="hero-social-link">
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hero-social-link">
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hero-social-link">
              <Twitter size={24} />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>

        <div ref={imageRef} className="hero-image">
          <div className="hero-image-container">
            <img src="/Portafolio/Cvs.png" alt="Developer portrait" className="hero-portrait" />
          </div>
        </div>
      </div>

      <a href="#about" className="hero-scroll">
        <ArrowDown className="hero-scroll-icon" size={32} />
        <span className="sr-only">Scroll down</span>
      </a>
    </section>
  )
}

