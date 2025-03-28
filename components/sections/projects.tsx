"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"
import "../../styles/projects.css"

export function Projects() {
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

  const projects = [
    {
      title: t("project.title1"),
      description:
      t("project.description1"),
      image: "../../public/sistema-ventas.png?height=400&width=600",
      tags: ["React", "Laravel", "MySql", "Filament"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/JhonMM27/SistemaVentas",
    },
    {
      title: t("project.title2"),
      description: t("project.description2"),
      image: "../../public/pizzeria.png?height=400&width=600",
      tags: ["Html", "Css", "JavaScript"],
      liveUrl: "https://jhonmm27.github.io/Proyecto__web/",
      githubUrl: "https://github.com/JhonMM27/Proyecto__web",
    },
    {
      title: t("project.title3"),
      description:
      t("project.description3"),
      image: "../../public/login-react.png?height=400&width=600",
      tags: ["React", "D3.js", "Express"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/JhonMM27/login_reak",
    },
    // {
    //   title: "Social Media Platform",
    //   description: "A social networking platform with user profiles, posts, comments, and real-time messaging.",
    //   image: "/placeholder.svg?height=400&width=600",
    //   tags: ["React", "GraphQL", "Node.js", "MongoDB"],
    //   liveUrl: "https://example.com",
    //   githubUrl: "https://github.com",
    // },
    // {
    //   title: "Weather Application",
    //   description: "A weather forecast application with location detection and interactive maps.",
    //   image: "/placeholder.svg?height=400&width=600",
    //   tags: ["JavaScript", "OpenWeather API", "Mapbox", "HTML/CSS"],
    //   liveUrl: "https://example.com",
    //   githubUrl: "https://github.com",
    // },
    // {
    //   title: "Recipe Finder",
    //   description: "A recipe search application with filtering options, favorites, and meal planning features.",
    //   image: "/placeholder.svg?height=400&width=600",
    //   tags: ["React", "Redux", "Spoonacular API", "Tailwind CSS"],
    //   liveUrl: "https://example.com",
    //   githubUrl: "https://github.com",
    // },
  ]

  return (
    <section id="projects" ref={sectionRef} className="projects">
      <div className="container">
        <div className={`projects-header ${isVisible ? "animate-fade-in" : ""}`}>
          <h2 className="projects-title">
            {t("projects.title")} <span className="projects-title-highlight">{t("projects.highlight")}</span>
          </h2>
          <div className="projects-title-line"></div>
          <p className="projects-description">{t("projects.description")}</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`project-card ${isVisible ? `animate-fade-in-delay-${index % 6}` : ""}`}
            >
              <div className="project-image-container">
                <img src={project.image || "/placeholder.svg"} alt={project.title} className="project-image" />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="project-footer">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                >
                  <Github className="project-btn-icon" />
                  {t("projects.cta.code")}
                </a>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                  <ExternalLink className="project-btn-icon" />
                  {t("projects.cta.demo")}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

