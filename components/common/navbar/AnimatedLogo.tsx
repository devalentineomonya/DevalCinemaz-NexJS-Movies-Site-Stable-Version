"use client"
import { motion } from "framer-motion"

const AnimatedLogo = () => {
  const text = "DevalCinemaz"

  return (
    <div className="flex items-center">
      <motion.div
        className="text-xl font-bold text-red-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: index * 0.05,
              ease: "easeInOut",
            }}
            className={index < 5 ? "text-red-500" : ""}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    </div>
  )
}

export default AnimatedLogo
