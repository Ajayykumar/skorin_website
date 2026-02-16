"use client";

import { useEffect, useState } from "react";

interface TextGenerateEffectProps {
  words: string[];
  className?: string;
  delay?: number;
}

export function TextGenerateEffect({ words, className, delay = 100 }: TextGenerateEffectProps) {
  const [displayedWords, setDisplayedWords] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < words.length) {
      const timer = setTimeout(() => {
        setDisplayedWords(prev => [...prev, words[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, words, delay]);

  return (
    <div className={className}>
      {displayedWords.map((word, index) => (
        <span
          key={index}
          className="inline-block animate-fade-in"
          style={{
            animation: 'fadeIn 0.5s ease-in-out',
            animationFillMode: 'both',
            animationDelay: `${index * delay}ms`,
          }}
        >
          {word}
          {index < displayedWords.length - 1 && ' '}
        </span>
      ))}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
