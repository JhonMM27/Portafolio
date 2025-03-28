"use client"

import { useEffect, useRef, useState } from "react"
import { FileText } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"
import "../../styles/about.css"

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { t } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section id="about" ref={sectionRef} className="about">
      <div className="container">
        <div className={`about-header ${isVisible ? "animate-fade-in" : ""}`}>
          <h2 className="about-title">
            {t("about.title")} <span className="about-title-highlight">{t("about.highlight")}</span>
          </h2>
          <div className="about-title-line"></div>
        </div>

        <div className="about-content">
          <div className={`about-image-container ${isVisible ? "animate-fade-left" : ""}`}>
            <div className="about-image-border"></div>
            <img src="../../public/Foto-principal-prueba.png" alt="About me" className="about-image" />
          </div>

          <div className={`about-text ${isVisible ? "animate-fade-right" : ""}`}>
            <h3 className="about-subtitle">{t("about.subtitle")}</h3>

            <p className="about-description">{t("about.description1")}</p>

            <p className="about-description">{t("about.description2")}</p>

            <div className="about-details">
              <div className="about-detail">
                <p className="about-detail-label">{t("about.details.name")}</p>
                <p className="about-detail-value">{t("about.details.nameValue")}</p>
              </div>
              <div className="about-detail">
                <p className="about-detail-label">{t("about.details.email")}</p>
                <p className="about-detail-value">{t("about.details.emailValue")}</p>
              </div>
              <div className="about-detail">
                <p className="about-detail-label">{t("about.details.location")}</p>
                <p className="about-detail-value">{t("about.details.locationValue")}</p>
              </div>
              <div className="about-detail">
                <p className="about-detail-label">{t("about.details.availability")}</p>
                <p className="about-detail-value">{t("about.details.availabilityValue")}</p>
              </div>
            </div>

            <a href="../../public/curriculum.pdf" download className="btn btn-primary about-resume-btn">
              <FileText className="about-resume-icon" />
              {t("about.resume")}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

