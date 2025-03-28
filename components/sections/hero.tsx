"use client"

import { useEffect, useState } from "react"
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"
import imgPri from "../../public/Foto-principal-prueba.png"
import "../../styles/hero.css"

export function Hero() {
  const [mounted, setMounted] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="home" className="hero">
      <div className="hero-gradient"></div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h2 className="hero-subtitle">{t("hero.greeting")}</h2>
            <h1 className="hero-title">{t("hero.name")}</h1>
            <h3 className="hero-role">{t("hero.role")}</h3>
          </div>

          <p className="hero-description">{t("hero.description")}</p>

          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary btn-lg">
              {t("hero.cta.contact")}
            </a>
            <a href="#projects" className="btn btn-outline btn-lg">
              {t("hero.cta.projects")}
            </a>
          </div>

          <div className="hero-social">
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

        <div className="hero-image">
          <div className="hero-image-container">
            <img src={imgPri} alt="Developer portrait" className="hero-portrait" />
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

