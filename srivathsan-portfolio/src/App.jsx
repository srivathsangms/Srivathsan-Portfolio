import { useState, useRef } from "react"
import { motion } from "framer-motion"

import SectionWrapper from "./components/SectionWrapper"
import Navbar from "./components/Navbar"
import Particles from "./components/Particles"
import SmoothCursor from "./components/SmoothCursor"
import ProgressDots from "./components/ProgressDots"
import ResumeCTA from "./components/ResumeCTA"

import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Achievements from "./components/Achievements"
import Profiles from "./components/Profiles"
import Contact from "./components/Contact"

export default function App(){

  const [section,setSection] = useState(0)
  const [direction,setDirection] = useState("next")
  const [dark,setDark] = useState(false)

  const animLock = useRef(false)
  const scrollSum = useRef(0)

  const renderSection = ()=>{
    switch(section){
      case 0: return <Hero dark={dark}/>
      case 1: return <About dark={dark}/>
      case 2: return <Skills dark={dark}/>
      case 3: return <Projects dark={dark}/>
      case 4: return <Experience dark={dark}/>
      case 5: return <Achievements dark={dark}/>
      case 6: return <Profiles dark={dark}/>
      case 7: return <Contact dark={dark}/>
      default: return <Hero dark={dark}/>
    }
  }

  const goNext = ()=>{
    if(animLock.current) return
    animLock.current = true
    setDirection("next")
    setSection(prev => (prev + 1) % 8)
    setTimeout(()=> animLock.current = false , 800)
  }

  const goPrev = ()=>{
    if(animLock.current) return
    animLock.current = true
    setDirection("prev")
    setSection(prev => (prev - 1 + 8) % 8)
    setTimeout(()=> animLock.current = false , 800)
  }

  const handleWheel = (e)=>{
    scrollSum.current += e.deltaY

    if(scrollSum.current > 130){
      goNext()
      scrollSum.current = 0
    }

    if(scrollSum.current < -130){
      goPrev()
      scrollSum.current = 0
    }
  }

  return(
    <motion.div
      onWheel={handleWheel}
      animate={{ backgroundColor: dark ? "#06121c" : "#f5fbff" }}
      transition={{duration:0.6}}
      className={`relative w-full h-screen overflow-hidden ${dark ? "dark-mode" : ""}`}
    >

      <SmoothCursor dark={dark}/>

      <Navbar
        setSection={setSection}
        setDirection={setDirection}
        dark={dark}
        setDark={setDark}
      />

      <Particles trigger={section} dark={dark}/>

      <ProgressDots
        section={section}
        setSection={setSection}
        setDirection={setDirection}
      />

      <ResumeCTA/>

      <SectionWrapper direction={direction}>
        {renderSection()}
      </SectionWrapper>

    </motion.div>
  )
}