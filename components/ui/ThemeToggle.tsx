"use client"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "../contexts/ThemeContext"
import { useLanguage } from "../contexts/LanguageContext"
import "../../styles/theme-toggle.css"

export function ThemeToggle() {
const { theme, toggleTheme } = useTheme()
const { t } = useLanguage()

return (
<button className="theme-toggle" onClick={toggleTheme} aria-label={theme === "light" ? t("theme.dark") :
    t("theme.light")} title={theme === "light" ? t("theme.dark") : t("theme.light")}>
    {theme === "light" ?
    <Moon className="theme-toggle-icon" /> :
    <Sun className="theme-toggle-icon" />}
</button>
)
}
