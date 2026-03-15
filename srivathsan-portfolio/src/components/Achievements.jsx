import { motion } from "framer-motion"

const achievements = [

  {
    title:"Funded Technical Project",
    desc:"Developed PFUSC — a surveillance-based real-time person identification system using computer vision techniques."
  },

  {
    title:"AI Internship Experience",
    desc:"Completed a 6-month internship at YESEM Events Pvt Ltd gaining exposure to business statistics, AI workflows and web solution implementation."
  },

  {
    title:"National Level Symposium Organiser",
    desc:"Organised PixelGen technical event under AISTHETICA symposium and managed media operations and coordination."
  },

  {
    title:"Multiple AI System Implementations",
    desc:"Built real-world AI projects including Driver Fatigue Detection, Pneumonia Detection using deep learning and Sign Language Recognition."
  }

]

export default function Achievements({ dark }){

  return(
    <div className="h-screen flex flex-col items-center justify-center px-12">

      <h1 className={`text-6xl font-bold mb-14 ${dark ? "text-sky-400" : "text-sky-500"}`}>
        Achievements
      </h1>

      <div className="grid grid-cols-2 gap-8 max-w-5xl">

        {achievements.map((a,i)=>(
          <motion.div
            key={i}
            initial={{opacity:0, y:80}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.7}}
            whileHover={{scale:1.05}}
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
              {a.title}
            </h3>

            <p className="opacity-80 leading-relaxed">
              {a.desc}
            </p>

          </motion.div>
        ))}

      </div>

    </div>
  )
}