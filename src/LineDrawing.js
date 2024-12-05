import React from "react";
import { motion } from "motion/react";

const LineDrawing = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f0f0",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600 600"
        width="400"
        height="400"
        preserveAspectRatio="xMidYMid meet"
      >
        <motion.path
          d="M300 50 L370 200 L520 200 L400 300 L450 450 L300 350 
            L150 450 L200 300 L80 200 L230 200 Z" 
          stroke="black"
          fill="none"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 4,
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  );
};
export default LineDrawing;



