import { motion } from "framer-motion"
import { useRef } from "react"

const skills = [
  { name:"Python", level:90, color:"from-sky-500 to-cyan-400" },
  { name:"Machine Learning", level:85, color:"from-indigo-500 to-sky-400" },
  { name:"Computer Vision", level:88, color:"from-cyan-500 to-blue-400" },
  { name:"Flask", level:80, color:"from-emerald-500 to-teal-400" },
  { name:"TensorFlow", level:78, color:"from-orange-500 to-pink-400" },
  { name:"Java", level:75, color:"from-yellow-500 to-orange-400" },
  { name:"React", level:70, color:"from-blue-500 to-indigo-400" },
  { name:"MongoDB", level:72, color:"from-green-500 to-emerald-400" }
]

export default function Skills(){

  const scrollRef = useRef()
  const bottomReached = useRef(false)
  const topReached = useRef(false)

  const handleWheel = (e)=>{

    const el = scrollRef.current

    const atTop = el.scrollTop <= 2
    const atBottom =
      el.scrollHeight - el.scrollTop - el.clientHeight <= 2

    // DOWN SCROLL
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
        // second scroll → allow parent
      }

    }

    // UP SCROLL
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

      <h1 className="text-6xl font-bold text-sky-500 mb-12">
        Skills
      </h1>

      <div
        ref={scrollRef}
        onWheel={handleWheel}
        className="
        w-[65%]
        max-h-[65vh]
        overflow-y-auto
        pr-4
        space-y-10
        hide-scrollbar
        "
      >

        {skills.map((s,i)=>(
          <div key={i}>

            <div className="flex justify-between mb-3">
              <span className="font-semibold text-gray-900 text-lg">
                {s.name}
              </span>

              <span className="text-sky-600 font-semibold">
                {s.level}%
              </span>
            </div>

            <div className="w-full h-5 bg-sky-100/80 rounded-full overflow-hidden shadow-inner">

              <motion.div
                initial={{width:0}}
                animate={{width:`${s.level}%`}}
                transition={{duration:1.1, delay:i*0.12}}
                className={`h-full bg-gradient-to-r ${s.color} shadow-lg`}
              />

            </div>

          </div>
        ))}

      </div>

    </div>
  )
}