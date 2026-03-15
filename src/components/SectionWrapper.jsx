import { motion, AnimatePresence } from "framer-motion"

export default function SectionWrapper({ children, direction }) {

  const variants = {
    initial: {
      x: direction === "next" ? 180 : -180,
      opacity: 0,
      scale: 0.96,
      filter: "blur(6px)"
    },
    animate: {
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.75,
        ease: "easeInOut"
      }
    },
    exit: {
      x: direction === "next" ? -180 : 180,
      opacity: 0,
      scale: 0.95,
      filter: "blur(10px)",
      transition: {
        duration: 0.55
      }
    }
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={Math.random()}   
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="absolute w-full h-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}