import { motion } from "framer-motion"

export default function About({ dark }){

  const blocks = [
    {
      title:"Tech Explorer",
      text:"I enjoy breaking systems, repairing devices, and rebuilding solutions to understand how technology works deeply — from hardware behaviour to software intelligence."
    },
    {
      title:"AI System Builder",
      text:"My focus is developing real-world AI applications such as monitoring systems, recognition pipelines and automation tools using Computer Vision and Machine Learning."
    },
    {
      title:"Continuous Learner",
      text:"Through internships, funded projects and independent experimentation, I constantly refine my skills in performance optimisation, system design and practical implementation."
    }
  ]

  return(
    <div className="h-screen flex flex-col items-center justify-center px-12">

      {/* HEADLINE */}
      <motion.h1
        initial={{opacity:0, y:80}}
        animate={{opacity:1, y:0}}
        transition={{duration:0.8}}
        className={`text-6xl font-bold mb-8 ${dark ? "text-sky-400" : "text-sky-500"}`}
      >
        About Me
      </motion.h1>

      {/* SHORT HERO ABOUT */}
      <motion.p
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:0.3}}
        className={`
          max-w-2xl
          text-center
          leading-relaxed
          mb-14
          ${dark ? "text-slate-300" : "text-slate-600"}
        `}
      >
        I am an Artificial Intelligence and Data Science undergraduate passionate about building intelligent solutions that solve real-world problems.  
        My curiosity drives me to explore both software and hardware systems, enabling me to understand technology holistically and engineer impactful AI-driven products.
      </motion.p>

      {/* ANIMATED BLOCKS */}
      <div className="grid grid-cols-3 gap-8 max-w-6xl">

        {blocks.map((b,i)=>(
          <motion.div
            key={i}
            initial={{opacity:0, y:100}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.7, delay:i*0.15}}
            whileHover={{scale:1.07}}
            className={`
              backdrop-blur-xl
              border
              rounded-2xl
              p-8
              shadow-xl
              transition
              ${dark
                ? "bg-slate-900/60 border-slate-700 text-slate-200"
                : "bg-white/70 border-white/40 text-slate-700"
              }
            `}
          >

            <h3 className="text-xl font-semibold text-sky-500 mb-3">
              {b.title}
            </h3>

            <p className="leading-relaxed opacity-80">
              {b.text}
            </p>

          </motion.div>
        ))}

      </div>

      {/* FUTURE LINE */}
      <motion.p
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{delay:0.4}}
        className={`
          mt-12
          text-center
          max-w-xl
          ${dark ? "text-slate-400" : "text-slate-500"}
        `}
      >
        My long-term goal is to evolve as an AI Engineer who builds meaningful technological products that improve safety, efficiency and human interaction with intelligent systems.
      </motion.p>

    </div>
  )
}