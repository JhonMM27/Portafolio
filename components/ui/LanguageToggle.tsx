"use client";
import { Globe } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import "../../styles/language-toggle.css";

export function LanguageToggle() {
const { language, toggleLanguage, t } = useLanguage();

return (
<button className="language-toggle" onClick={toggleLanguage} aria-label={language === "en" ? t("language.es") :
    t("language.en")} title={language === "en" ? t("language.es") : t("language.en")}>
    <Globe className="language-toggle-icon" />
    <span className="language-toggle-text">{language.toUpperCase()}</span>
</button>
);
}
