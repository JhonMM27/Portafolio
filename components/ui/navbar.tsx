"use client"

import { useState, useEffect } from "react"
import { FileText, Menu, X } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"
import "../../styles/navbar.css"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navLinks = [
    { name: t("nav.home"), href: "#home" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.skills"), href: "#skills" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.contact"), href: "#contact" },
  ]

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          Dev<span className="navbar-logo-highlight">Portfolio</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar-nav">
          <div className="navbar-links">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="navbar-link">
                {link.name}
              </a>
            ))}
          </div>
          <div className="navbar-actions">
            {/* <button className="btn btn-primary">{t("nav.resume")}</button> */}
            <a href="../../public/curriculum.pdf" download className="btn btn-primary about-resume-btn">
              <FileText className="about-resume-icon" />
              {t("about.resume")}
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="navbar-mobile-actions">
          <button className="navbar-toggle" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="navbar-mobile">
          <nav className="navbar-mobile-nav">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="navbar-mobile-link" onClick={toggleMenu}>
                {link.name}
              </a>
            ))}
            <button className="btn btn-primary btn-mobile-full">{t("nav.resume")}</button>
          </nav>
        </div>
      )}
    </header>
  )
}

