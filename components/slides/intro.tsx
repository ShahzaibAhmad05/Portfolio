// components/slides/intro.tsx
"use client";

import { useState, useEffect } from "react";
import ScrollIndicator from "@/components/scroll-indicator";
import Particles from "@/components/particles";

export default function IntroSlide({ 
  onNext, 
  showScrollIndicator = false 
}: { 
  onNext: () => void;
  showScrollIndicator?: boolean;
}) {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Hello Visitor!";
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    // Profile picture animation
    setTimeout(() => setShowProfile(true), 100);
    
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
        // Staggered animations after typing completes
        setTimeout(() => setShowSubtitle(true), 200);
        setTimeout(() => setShowWelcome(true), 500);
        setTimeout(() => setShowScroll(true), 700);
        setTimeout(() => setShowButtons(true), 900);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="relative h-full w-full flex-none snap-start overflow-hidden">
      <div className="mx-auto flex h-full w-full max-w-7xl items-center px-6 py-12 sm:px-10">
        {/* Left Side - Profile Picture */}
        <div className="flex-1 flex items-center justify-center">
          <div className={`h-80 w-80 sm:h-96 sm:w-96 rounded-full bg-zinc-800/50 border-2 border-zinc-700/60 overflow-hidden shadow-2xl transition-all duration-1000 ${
            showProfile 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-20'
          }`}>
            <img 
              src="/profile-placeholder.jpg" 
              alt="Profile" 
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="flex-1 flex flex-col justify-center pr-12 -ml-5">
          <div className="space-y-2">
            <h1 className="mt-10 text-6xl sm:text-7xl font-bold tracking-tight text-zinc-50">
              {displayedText.split("Shahzaib").map((part, index) => (
                <span key={index}>
                  {part}
                  {index === 0 && displayedText.includes("Shahzaib") && (
                    <span className="underline decoration-zinc-500">
                      {displayedText.includes("Shahzaib") ? "Shahzaib" : ""}
                    </span>
                  )}
                </span>
              ))}
              {!isTypingComplete && (
                <span className="animate-pulse">|</span>
              )}
            </h1>

            <p 
              className={`text-lg sm:text-md text-zinc-500 transition-all duration-700 ${
                showSubtitle 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 -translate-y-4'
              }`}
            >
              I'm a Software Engineer
            </p>

            <p className={`mt-6 text-lg leading-8 text-zinc-300 transition-all duration-700 ${
              showWelcome 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 -translate-y-4'
            }`}>
              Welcome to my portfolio.
            </p>

            <p className={`-mt-3 text-md leading-8 text-zinc-400 transition-all duration-700 ${
              showScroll 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 -translate-y-4'
            }`}>
              Scroll this page horizontally to look around
            </p>

            <div className={`mt-5 flex flex-col gap-3 sm:flex-row transition-all duration-700 ${
              showButtons 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 -translate-y-4'
            }`}>
              <a
                href="#"
                className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-700 px-6 text-sm font-medium tracking-wide text-zinc-300 transition hover:bg-zinc-800/50 hover:border-zinc-600"
                onClick={(e) => {
                  e.preventDefault();
                  alert("OK ;)");
                }}
              >
                I'm here to stalk
              </a>
              <button
                type="button"
                onClick={onNext}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-zinc-50 px-6 text-sm font-medium tracking-wide text-zinc-950 transition hover:bg-zinc-200"
              >
                Scroll
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Particles theme="amber" />
      {showScrollIndicator && <ScrollIndicator />}
    </section>
  );
}
