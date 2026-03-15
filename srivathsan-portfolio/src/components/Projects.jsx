import { useState } from "react"
import { motion } from "framer-motion"
import ProjectModal from "./ProjectModal"

const projects = [
  {
    title:"DriveBy.AI",
    punch:"Real-time driver fatigue detection system",
    desc:"Detects drowsiness and attention levels using live facial behaviour analysis to improve road safety.",
    tech:["Python","OpenCV","Flask","Real-Time CV"],
    github:"https://github.com/srivathsangms/DriveBy.AI"
  },
  {
    title:"PFUSC",
    punch:"Surveillance person identification system",
    desc:"Funded project focused on recognising individuals from surveillance video streams.",
    tech:["Python","Face Recognition","Database","Flask"],
    github:"https://github.com/srivathsangms/PFUSC"
  },
  {
    title:"Pneumonia Detection",
    punch:"Medical image classification model",
    desc:"CNN-based deep learning model for pneumonia prediction.",
    tech:["TensorFlow","CNN","Pandas","ML"],
    github:"https://github.com/srivathsangms/pneumonia-detection"
  },
  {
    title:"Sign Language Recognition",
    punch:"Gesture recognition using vision models",
    desc:"Real-time hand gesture classification pipeline.",
    tech:["OpenCV","ML","Real-Time"],
    github:"https://github.com/srivathsangms/sign-language-recognition"
  },
  {
    title:"AIRA",
    punch:"AI task automation assistant",
    desc:"Automation-focused assistant executing intelligent workflows.",
    tech:["Python","Automation","APIs"],
    github:"https://github.com/srivathsangms/aira"
  },
  {
    title:"Arduino Clency Agent",
    punch:"Hardware-integrated automation system",
    desc:"Embedded monitoring and control logic using Arduino.",
    tech:["Arduino","Sensors","Embedded"],
    github:"https://github.com/srivathsangms/arduino-clency-agent"
  },
  {
    title:"Mail Automation",
    punch:"Script-driven personalised email sender",
    desc:"Automates repetitive communication workflows.",
    tech:["Python","SMTP","Automation"],
    github:"https://github.com/srivathsangms/Mail-automation-with-custom-mail-id"
  }
]

export default function Projects({ dark }){

  const [active,setActive] = useState(null)

  return(
    <div className="h-screen flex flex-col items-center justify-center px-12">

      <h1 className={`text-6xl font-bold mb-12 ${dark ? "text-sky-400" : "text-sky-500"}`}>
        Projects
      </h1>

      <div className="grid grid-cols-3 gap-6 w-full max-w-6xl">

        {projects.map((p,i)=>(
          <motion.div
            key={i}
            whileHover={{scale:1.06}}
            onClick={()=>setActive(p)}
            className={`
              cursor-pointer
              backdrop-blur-xl
              rounded-2xl
              p-6
              border
              shadow-xl
              transition
              ${dark
                ? "bg-slate-900/60 border-slate-700 text-slate-200"
                : "bg-white/70 border-white/40 text-slate-700"
              }
            `}
          >

            <h3 className="text-xl font-semibold text-sky-500">
              {p.title}
            </h3>

            <p className="text-sm opacity-70 mt-1">
              {p.punch}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {p.tech.map((t,j)=>(
                <span
                  key={j}
                  className={`
                    text-xs px-2 py-1 rounded-full
                    ${dark
                      ? "bg-sky-500/20 text-sky-300"
                      : "bg-sky-100 text-sky-600"
                    }
                  `}
                >
                  {t}
                </span>
              ))}
            </div>

          </motion.div>
        ))}

      </div>

      <ProjectModal
        project={active}
        close={()=>setActive(null)}
        dark={dark}
      />

    </div>
  )
}