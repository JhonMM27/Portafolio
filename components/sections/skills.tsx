"use client"

import { useEffect, useRef, useState } from "react"
import { Code, Database, Layout, Server, Terminal, Workflow } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"
import "../../styles/skills.css"
import React from "react"

export function Skills() {
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

  const skills = [
    {
      category: t("skills.categories.frontend"),
      icon: <Layout className="skills-card-icon" />,
      items: ["HTML/CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Boostrap"],
    },
    {
      category: t("skills.categories.backend"),
      icon: <Server className="skills-card-icon" />,
      items: ["Node.js", "Express", "NestJS", "Python", "Django", "REST APIs", "GraphQL", "Laravel"],
    },
    {
      category: t("skills.categories.database"),
      icon: <Database className="skills-card-icon" />,
      items: ["MongoDB", "PostgreSQL", "MySQL", "MariaDB", "Prisma", "Supabase", "SQLite"],
    },
    {
      category: t("skills.categories.devops"),
      icon: <Terminal className="skills-card-icon" />,
      items: ["Git", "Docker", "CI/CD", "AWS", "Vercel", "Netlify", "Linux"],
    },
    {
      category: t("skills.categories.tools"),
      icon: <Workflow className="skills-card-icon" />,
      items: ["VS Code", "Figma", "Postman", "Jest", "GitHub", "Jira", "Notion"],
    },
    {
      category: t("skills.categories.languages"),
      icon: <Code className="skills-card-icon" />,
      items: ["JavaScript", "TypeScript", "Python", "SQL", "HTML", "CSS", "Bash", "Php"],
    },
  ]

  return (
    <section id="skills" ref={sectionRef} className="skills">
      <div className="container">
        <div className={`skills-header ${isVisible ? "animate-fade-in" : ""}`}>
          <h2 className="skills-title">
            {t("skills.title")} <span className="skills-title-highlight">{t("skills.highlight")}</span>
          </h2>
          <div className="skills-title-line"></div>
          <p className="skills-description">{t("skills.description")}</p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={skill.category} className={`skills-card ${isVisible ? `animate-fade-in-delay-${index}` : ""}`}>
              <div className="skills-card-header">
                <div className="skills-card-icon-container">{skill.icon}</div>
                <h3 className="skills-card-title">{skill.category}</h3>
              </div>
              <div className="skills-card-items">
                {skill.items.map((item) => (
                  <span key={item} className="skills-card-item">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

