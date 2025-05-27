import { StoreButtons } from "./store-buttons";
import { CtaButton } from "./cta-button";

export function HeroSection() {
  return (
    <div className="flex flex-col space-y-8 px-2 sm:px-0 pt-6 sm:pt-0">
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight sm:leading-tight">
          <span className="text-black dark:text-white block">Find Your Dream Team.</span>
          <br />
          <span className="text-black dark:text-white block">Build </span>
          <span className="bg-gradient-to-r from-[#85A67B] to-[#FFCBA4] bg-clip-text text-transparent">What Matters.</span>
        </h1>
        <p className="text-base sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed sm:leading-normal">
        Whether you're a entrepreneur,developer, designer, or just someone with vision — find the right teammates to bring your project to life.
        </p>
      </div>
      <StoreButtons />
      
      <div className="pt-4">
        <CtaButton />
      </div>
    </div>
  );
}