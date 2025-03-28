"use client";
import { ThemeToggle } from "../ui/ThemeToggle";
import { LanguageToggle } from "../ui/LanguageToggle";
import "../../styles/floating-buttons.css";

export function FloatingButtons() {
return (
<div className="floating-buttons">
    <ThemeToggle />
    <LanguageToggle />
</div>
);
}
