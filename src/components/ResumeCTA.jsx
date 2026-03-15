import { motion } from "framer-motion"

export default function ResumeCTA(){

  const download = ()=>{
    window.open("https://github.com/srivathsangms/Srivathsan-Portfolio/blob/main/Srivathsan_Resume.pdf")
  }

  return(
    <motion.div
      initial={{y:120,opacity:0}}
      animate={{y:0,opacity:1}}
      transition={{delay:1}}
      className="
      fixed
      bottom-8
      right-8
      z-[999]
      "
    >

      <button
        onClick={download}
        className="
        backdrop-blur-xl
        bg-white/30
        border border-white/40
        shadow-xl
        px-6 py-3
        rounded-full
        text-sm
        font-semibold
        text-sky-500
        hover:scale-110
        transition
        "
      >
        ⬇ Download Resume
      </button>

    </motion.div>
  )
}
