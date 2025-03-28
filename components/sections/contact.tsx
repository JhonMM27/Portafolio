"use client"

import { useState, useEffect, useRef, type ChangeEvent, type FormEvent } from "react"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"
import "../../styles/contact.css"

export function Contact() {
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
    alert("Message sent successfully!")
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  const contactInfo = [
    {
      icon: <Mail className="contact-info-icon" />,
      title: t("contact.info.email"),
      value: "Mesonesjhon27@gmail.com",
      link: "mailto:Mesonesjhon27@gmail.com",
    },
    {
      icon: <Phone className="contact-info-icon" />,
      title: t("contact.info.phone"),
      value: "+51 912 986 375",
      link: "tel:+15551234567",
    },
    {
      icon: <MapPin className="contact-info-icon" />,
      title: t("contact.info.location"),
      value: "Lambayeque, Perú",
      link: "https://maps.app.goo.gl/qpSWTNEJ66m4qJXN6",
    },
  ]

  return (
    <section id="contact" ref={sectionRef} className="contact">
      <div className="container">
        <div className={`contact-header ${isVisible ? "animate-fade-in" : ""}`}>
          <h2 className="contact-title">
            {t("contact.title")} <span className="contact-title-highlight">{t("contact.highlight")}</span>
          </h2>
          <div className="contact-title-line"></div>
          <p className="contact-description">{t("contact.description")}</p>
        </div>

        <div className="contact-content">
          <div className={`contact-info ${isVisible ? "animate-fade-left" : ""}`}>
            <h3 className="contact-subtitle">{t("contact.subtitle")}</h3>
            <p className="contact-info-text">{t("contact.text")}</p>

            <div className="contact-info-items">
              {contactInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.link}
                  className="contact-info-item"
                  target={info.title === t("contact.info.location") ? "_blank" : undefined}
                  rel={info.title === t("contact.info.location") ? "noopener noreferrer" : undefined}
                >
                  <div className="contact-info-icon-container">{info.icon}</div>
                  <div>
                    <h4 className="contact-info-title">{info.title}</h4>
                    <p className="contact-info-value">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className={`contact-form-container ${isVisible ? "animate-fade-right" : ""}`}>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label htmlFor="name" className="contact-form-label">
                    {t("contact.form.name")}
                  </label>
                  <input
                    id="name"
                    name="name"
                    className="contact-form-input"
                    placeholder={t("contact.form.placeholders.name")}
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="contact-form-group">
                  <label htmlFor="email" className="contact-form-label">
                    {t("contact.form.email")}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="contact-form-input"
                    placeholder={t("contact.form.placeholders.email")}
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="contact-form-group">
                <label htmlFor="subject" className="contact-form-label">
                  {t("contact.form.subject")}
                </label>
                <input
                  id="subject"
                  name="subject"
                  className="contact-form-input"
                  placeholder={t("contact.form.placeholders.subject")}
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="contact-form-group">
                <label htmlFor="message" className="contact-form-label">
                  {t("contact.form.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="contact-form-textarea"
                  placeholder={t("contact.form.placeholders.message")}
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary btn-lg contact-form-submit">
                <Send className="contact-form-submit-icon" />
                {t("contact.form.submit")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

