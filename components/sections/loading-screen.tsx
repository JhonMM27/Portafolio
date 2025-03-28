"use client";

import { useState, useEffect } from "react";
import { Hero } from "./hero";
import { About } from "./about";
import { Skills } from "./skills";
import { Projects } from "./projects";
import { Contact } from "./contact";
import { Navbar } from "../ui/navbar";
import { Footer } from "../ui/footer";
import { ThemeProvider } from "../contexts/ThemeContext";
import { LanguageProvider } from "../contexts/LanguageContext";
import { FloatingButtons } from "../ui/FloatingButtons";

import "../../styles/loading-screen.css";

export function LoadingScreen() {
const [loading, setLoading] = useState(true);

useEffect(() => {
// Create particles
if (loading && typeof window !== "undefined") {
const particlesContainer = document.querySelector(".particles");
if (particlesContainer) {
for (let i = 0; i < 20; i++) { createParticle(particlesContainer); } } } // Set timer to hide loading screen const
    const timer=setTimeout(()=> {
    setLoading(false);
    }, 2500); // 2s animation + 0.3s buffer

    return () => clearTimeout(timer);
    }, [loading]);

    // Function to create a single particle with random position and movement
    const createParticle = (container: Element) => {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    // Random starting position
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;

    // Random ending position (movement direction)
    const endX = (Math.random() - 0.5) * 200;
    const endY = (Math.random() - 0.5) * 200;

    // Random size
    const size = Math.random() * 3 + 1;

    // Random delay
    const delay = Math.random() * 1;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${startX}px`;
    particle.style.top = `${startY}px`;
    particle.style.setProperty("--end-x", `${endX}px`);
    particle.style.setProperty("--end-y", `${endY}px`);
    particle.style.animationDelay = `${delay}s`;

    container.appendChild(particle);

    // Remove particle after animation completes
    setTimeout(() => {
    if (particle.parentNode === container) {
    container.removeChild(particle);
    }
    }, 1500 + delay * 1000);
    };

    if (loading) {
    return (
    <div className="loading-screen fade-out">
        <div className="grid-background"></div>
        <div className="particles"></div>

        <div className="logo-container">
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            <div className="circle circle-3"></div>

            <div className="code-symbol">
                <div className="code-bracket bracket-left"></div>
                <div className="code-bracket bracket-right"></div>
                <div className="slash"></div>
            </div>
        </div>

        <div className="text-container">
            <h1 className="loading-title">
                Dev<span>Portfolio</span>
            </h1>
            <p className="loading-subtitle">Creating digital experiences</p>
        </div>
    </div>
    );
    }

    return (
    <div className="min-h-screen bg-background">
        <ThemeProvider>
            <LanguageProvider>
                <div className="app">
                    <Navbar />
                    <main>
                        <Hero />
                        <About />
                        <Skills />
                        <Projects />
                        <Contact />
                    </main>
                    <Footer />
                    <FloatingButtons />
                </div>
            </LanguageProvider>
        </ThemeProvider>
    </div>
    );
    }
