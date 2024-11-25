import { motion } from "framer-motion";

interface TiltWrapperProps {
  children: React.ReactNode;
}

export const TiltWrapper: React.FC<TiltWrapperProps> = ({ children }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        rotateX: -5, // Slight tilt on X axis for 3D effect
        rotateY: 5,  // Slight tilt on Y axis for 3D effect
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", // Adding dynamic shadow
      }}
      transition={{ type: "spring", stiffness: 300 }}
      className="transition-shadow duration-200 ease-in-out hover:shadow-xl perspective-500" // Add perspective for 3D effect
    >
      {children}
    </motion.div>
  );
};
