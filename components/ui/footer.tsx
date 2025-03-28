"use client"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"
import "../../styles/footer.css"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <a href="#home" className="footer-logo">
            Dev<span className="footer-logo-highlight">Portfolio</span>
          </a>

          <div className="footer-social">
            <a href="https://github.com/JhonMM27" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="mailto:Mesonesjhon27@gmail.com" className="footer-social-link">
              <Mail size={20} />
              <span className="sr-only">Email</span>
            </a>
          </div>

          <div className="footer-links">
            <a href="#home" className="footer-link">
              {t("nav.home")}
            </a>
            <a href="#about" className="footer-link">
              {t("nav.about")}
            </a>
            <a href="#skills" className="footer-link">
              {t("nav.skills")}
            </a>
            <a href="#projects" className="footer-link">
              {t("nav.projects")}
            </a>
            <a href="#contact" className="footer-link">
              {t("nav.contact")}
            </a>
          </div>

          <p className="footer-copyright">
            &copy; {currentYear} DevPortfolio. {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  )
}

