import { motion } from "framer-motion"
import { useEffect, useState, useRef } from "react"

export default function Hero(){

  const roles = [
    "AI Engineer",
    "Computer Vision Developer",
    "Problem Solver",
    "Tech Explorer"
  ]

  const [text,setText] = useState("")
  const [index,setIndex] = useState(0)
  const [char,setChar] = useState(0)

  const photoRef = useRef()

  useEffect(()=>{

    const typing = setInterval(()=>{

      setText(roles[index].slice(0,char+1))
      setChar(c=>c+1)

      if(char === roles[index].length){
        setTimeout(()=>{
          setChar(0)
          setIndex((i)=>(i+1)%roles.length)
        },1000)
      }

    },80)

    return ()=>clearInterval(typing)

  },[char,index])

  /* ⭐ HERO PHOTO 3D TILT */
  useEffect(()=>{

    const move = (e)=>{

      const el = photoRef.current
      if(!el) return

      const rect = el.getBoundingClientRect()

      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const centerX = rect.width/2
      const centerY = rect.height/2

      const rotateX = -(y - centerY) / 18
      const rotateY = (x - centerX) / 18

      el.style.transform =
        `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`
    }

    const leave = ()=>{
      const el = photoRef.current
      if(!el) return
      el.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)"
    }

    const el = photoRef.current
    el.addEventListener("mousemove",move)
    el.addEventListener("mouseleave",leave)

    return ()=>{
      el.removeEventListener("mousemove",move)
      el.removeEventListener("mouseleave",leave)
    }

  },[])

  return(
    <div className="h-screen flex flex-col items-center justify-center text-center relative">

      {/* ⭐ PHOTO */}
      <motion.img
        id="hero-photo"
        ref={photoRef}
        initial={{x:-200,opacity:0,rotate:-10}}
        animate={{x:0,opacity:1,rotate:0}}
        transition={{duration:1}}
        src="/profile.jpg"
        className="
        w-44 h-44 rounded-full object-cover 
        shadow-2xl border-4 border-white/40
        transition-transform duration-200
        "
        style={{transformStyle:"preserve-3d"}}
      />

      {/* NAME */}
      <motion.h1
        initial={{y:120,opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{delay:0.3,duration:1}}
        className="text-6xl font-bold text-sky-400 mt-6"
      >
        Srivathsan GMS
      </motion.h1>

      {/* ROLE */}
      <motion.p
        initial={{x:200,opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{delay:0.5,duration:1}}
        className="text-2xl text-gray-600 mt-4 h-8"
      >
        {text}
      </motion.p>

      {/* TAGLINE */}
      <motion.p
        initial={{scale:0.8,opacity:0}}
        animate={{scale:1,opacity:1}}
        transition={{delay:0.8,duration:1}}
        className="mt-6 text-gray-500 max-w-xl"
      >
        Building Intelligent Systems for Real-World Problems
      </motion.p>

    </div>
  )
}