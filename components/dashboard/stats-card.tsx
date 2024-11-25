import { useState } from "react";
import { motion } from "framer-motion";

interface StatsCardProps {
  icon: React.ComponentType; // Accept an icon component as a prop
  iconColor: string; // Color for the icon
  label: string; // Label for the stat card
  value: string; // Value to be displayed (e.g., energy, cost)
}

export const StatsCard = ({
  icon: Icon,
  iconColor,
  label,
  value,
}: StatsCardProps) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Function to handle mouse movement for 3D tilt
  const handleMouseMove = (e: React.MouseEvent) => {
    const card = e.currentTarget.getBoundingClientRect();
    const centerX = card.left + card.width / 2;
    const centerY = card.top + card.height / 2;
    const offsetX = e.clientX - centerX;
    const offsetY = e.clientY - centerY;

    // Increased tilt intensity
    const tiltX = (offsetY / card.height) * 30; // Tilt on X-axis (increased from 40 to 60)
    const tiltY = (offsetX / card.width) * 30; // Tilt on Y-axis (increased from -40 to -60)
    setTilt({ x: tiltX, y: tiltY });
  };

  return (
    <motion.div
      className="relative group/card bg-black p-5 rounded-xl text-white flex items-center justify-between transform transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl dark:bg-black dark:border-white/[0.2] dark:hover:shadow-2xl border border-black/[0.1] w-[20rem] h-[8rem] sm:w-[26rem]"
      onMouseEnter={() => setTilt({ x: 30, y: 30 })} // Increased initial tilt effect when hovering
      onMouseLeave={() => setTilt({ x: 0, y: 0 })} // Reset tilt when not hovering
      onMouseMove={handleMouseMove} // Apply dynamic tilt based on mouse movement
      style={{
        perspective: "1500px", // Apply perspective to the parent container
        transformStyle: "preserve-3d", // Ensure 3D space is preserved for the tilt effect
        transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`, // Apply tilt transformations to the whole card
      }}
    >
      <div
        className={`text-6xl ${iconColor} mr-6 flex-shrink-0`}
        style={{
          transition: "transform 0.3s ease", // Smooth transition for icon
        }}
      >
        <Icon />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-neutral-300">{label}</h3>
        <p className="text-4xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-pink-500 to-purple-600">
          {value}
        </p>
      </div>
    </motion.div>
  );
};
