"use client";

import { HoleBackground } from "@/components/animate-ui/components/backgrounds/hole";

export const HoleBackgroundDemo = () => {
  return (
    <HoleBackground
      className="absolute inset-0 flex items-center justify-center rounded-xl opacity-40"
      strokeColor="#737373"
      particleRGBColor={[255, 255, 255]}
    />
  );
};
