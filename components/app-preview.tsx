"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from 'embla-carousel-react';

const slides = [
  {
    title: "Discover Projects & Teams",
    description: "Browse a variety of real projects looking for collaborators. Find your next team or idea!",
    content: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        <div className="bg-white dark:bg-gray-900/90 shadow-md rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-1">AI Study Group Platform</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">A collaborative platform for students and professionals to form study groups and learn AI together.</p>
        </div>
        <div className="bg-white dark:bg-gray-900/90 shadow-md rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-1">Remote Hackathon Team</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">Find and join teams for upcoming online hackathons, or recruit members for your own project.</p>
        </div>
      </div>
    )
  },
  {
    title: "Post a Project",
    description: "Share your project idea and attract passionate collaborators from around the world. Get your project noticed!",
    content: (
      <div className="flex flex-col items-center mt-6">
        <div className="bg-white dark:bg-gray-900/90 shadow-md rounded-xl p-6 max-w-md w-full">
          <h3 className="text-lg font-semibold mb-1">Post Your Project</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">Describe your idea, required skills, and what you're looking for in a teammate. Your project will appear on the platform for others to join.</p>
        </div>
      </div>
    )
  },
  {
    title: "Show Interest & Join Teams",
    description: "Express your interest in projects and get notified when you're accepted to join a team.",
    content: (
      <div className="flex flex-col items-center mt-6">
        <div className="bg-white dark:bg-gray-900/90 shadow-md rounded-xl p-6 max-w-md w-full">
          <h3 className="text-lg font-semibold mb-1">Show Interest</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">Click 'Show Interest' on any project. Project owners can review and invite you to join their team.</p>
        </div>
      </div>
    )
  },
  {
    title: "Find Team Members",
    description: "Browse projects and join teams that match your skills and interests.",
    content: (
      <div className="flex flex-col items-center mt-6">
        <div className="bg-white dark:bg-gray-900/90 shadow-md rounded-xl p-6 max-w-md w-full">
          <h3 className="text-lg font-semibold mb-1">Find Your Team</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">Filter projects by skills, interests, and more to find the perfect team for you.</p>
        </div>
      </div>
    )
  }
];

export function AppPreview() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    setIsLoaded(true);
    if (emblaApi) emblaApi.on('select', onSelect);
    return () => {
      if (emblaApi) emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isLoaded ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-full max-w-6xl mx-auto px-4 py-12"
    >
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, idx) => (
            <div
              key={slide.title}
              className="min-w-full px-2"
            >
              <div className="bg-gray-100 dark:bg-gray-800/70 rounded-3xl shadow-2xl p-10 border border-gray-200 dark:border-gray-700 min-h-[340px] flex flex-col justify-center items-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center">{slide.title}</h2>
                <p className="text-gray-500 dark:text-gray-300 text-center mb-4">{slide.description}</p>
                {slide.content}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Carousel Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${selectedIndex === idx ? 'bg-blue-600' : 'bg-gray-400 dark:bg-gray-600'} transition-colors`}
            onClick={() => emblaApi && emblaApi.scrollTo(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </motion.div>
  );
}