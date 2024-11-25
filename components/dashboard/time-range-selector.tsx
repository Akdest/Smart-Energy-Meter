"use client";

import { FC, useState } from "react";
import { motion } from "framer-motion";

interface TimeRangeSelectorProps {
  timeframe: string;
  onTimeframeChange: (timeframe: string) => void;
}

export const TimeRangeSelector: FC<TimeRangeSelectorProps> = ({ timeframe, onTimeframeChange }) => {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  // Handle mouse movement and apply tilt effect
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { offsetWidth, offsetHeight } = currentTarget as HTMLElement;

    const centerX = offsetWidth / 2;
    const centerY = offsetHeight / 2;

    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;

    // Apply simple tilt based on mouse movement
    const tiltX = (deltaY / centerY) * 5; // Slight tilt for X-axis
    const tiltY = (deltaX / centerX) * -5; // Slight tilt for Y-axis

    setTilt({ rotateX: tiltX, rotateY: tiltY });
  };

  return (
    <div className="flex flex-col sm:flex-row sm:justify-center gap-4">
      <motion.button
        onClick={() => onTimeframeChange("hourly")}
        className="px-8 py-4 rounded-lg border-2 border-white bg-black text-white shadow-md transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl dark:bg-black dark:text-white dark:border-white/[0.2] dark:hover:shadow-2xl"
        onMouseMove={handleMouseMove} // Apply tilt on mouse move
        whileHover={{ scale: 1.05 }}
      >
        Hourly
      </motion.button>

      <motion.button
        onClick={() => onTimeframeChange("daily")}
        className="px-8 py-4 rounded-lg border-2 border-white bg-black text-white shadow-md transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl dark:bg-black dark:text-white dark:border-white/[0.2] dark:hover:shadow-2xl"
        onMouseMove={handleMouseMove} // Apply tilt on mouse move
        whileHover={{ scale: 1.05 }}
      >
        Daily
      </motion.button>

      <motion.button
        onClick={() => onTimeframeChange("monthly")}
        className="px-8 py-4 rounded-lg border-2 border-white bg-black text-white shadow-md transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl dark:bg-black dark:text-white dark:border-white/[0.2] dark:hover:shadow-2xl"
        onMouseMove={handleMouseMove} // Apply tilt on mouse move
        whileHover={{ scale: 1.05 }}
      >
        Monthly
      </motion.button>
    </div>
  );
};
