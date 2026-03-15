import { motion } from "framer-motion"
import { useRef } from "react"

const exp = [
  {
    title:"AI Intern",
    org:"YESEM Events Pvt Ltd",
    time:"2024",
    desc:"Worked on business statistics, AI fundamentals and web based implementation exposure."
  },
  {
    title:"Funded Project Developer",
    org:"PFUSC – Surveillance Person Finder",
    time:"2025",
    desc:"Built real-time surveillance based person detection & recognition system using Computer Vision."
  },
  {
    title:"Computer Vision Projects",
    org:"Independent Work",
    time:"2023 – Present",
    desc:"Developed multiple AI systems like Driver Fatigue Detection, Sign Language Recognition and Pneumonia Detection."
  },
  {
    title:"Technical Symposium Organiser",
    org:"AISTHETICA",
    time:"2025",
    desc:"Organised PixelGen technical event and managed media operations."
  }
]

export default function Experience({ dark }){

  const scrollRef = useRef()
  const bottomReached = useRef(false)
  const topReached = useRef(false)

  const handleWheel = (e)=>{

    const el = scrollRef.current

    const atTop = el.scrollTop <= 2
    const atBottom =
      el.scrollHeight - el.scrollTop - el.clientHeight <= 2

    if(e.deltaY > 0){
      if(!atBottom){
        bottomReached.current = false
        e.stopPropagation()
      }
      else{
        if(!bottomReached.current){
          bottomReached.current = true
          e.stopPropagation()
        }
      }
    }

    if(e.deltaY < 0){
      if(!atTop){
        topReached.current = false
        e.stopPropagation()
      }
      else{
        if(!topReached.current){
          topReached.current = true
          e.stopPropagation()
        }
      }
    }
  }

  return(
    <div className="h-screen flex flex-col items-center pt-24">

      <h1 className={`
        text-6xl font-bold mb-10
        ${dark ? "text-sky-400" : "text-sky-500"}
      `}>
        Experience
      </h1>

      {/* ⭐ INTERNAL SCROLL */}
      <div
        ref={scrollRef}
        onWheel={handleWheel}
        className="
        relative
        w-[65%]
        max-h-[65vh]
        overflow-y-auto
        pr-6
        space-y-16
        hide-scrollbar
        "
      >

        {/* TIMELINE */}
        <div className={`
          absolute left-1/2 top-0 bottom-0 w-[3px]
          -translate-x-1/2
          ${dark
            ? "bg-gradient-to-b from-sky-400 via-cyan-400 to-blue-400"
            : "bg-gradient-to-b from-sky-300 via-cyan-300 to-blue-300"
          }
          blur-[1px]
        `}/>

        {exp.map((e,i)=>{

          const left = i % 2 === 0

          return(
            <motion.div
              key={i}
              initial={{opacity:0, x:left ? -120 : 120}}
              whileInView={{opacity:1, x:0}}
              transition={{duration:0.8}}
              className={`
              relative w-[48%]
              ${left ? "mr-auto text-right" : "ml-auto text-left"}
              `}
            >

              {/* DOT */}
              <div className={`
                absolute top-6
                ${left ? "-right-[34px]" : "-left-[34px]"}
                w-4 h-4 rounded-full
                ${dark ? "bg-sky-400" : "bg-sky-500"}
                shadow-[0_0_18px_rgba(56,189,248,0.8)]
              `}/>

              {/* CARD */}
              <div className={`
                backdrop-blur-xl
                rounded-2xl
                p-6
                shadow-xl
                border
                ${dark
                  ? "bg-slate-900/60 border-slate-700"
                  : "bg-white/70 border-white/40"
                }
              `}>

                <h3 className={`
                  text-xl font-semibold
                  ${dark ? "text-sky-400" : "text-sky-500"}
                `}>
                  {e.title}
                </h3>

                <p className="text-sm mt-1 opacity-70">
                  {e.org} • {e.time}
                </p>

                <p className="mt-3 leading-relaxed">
                  {e.desc}
                </p>

              </div>

            </motion.div>
          )
        })}

      </div>

    </div>
  )
}