import { useRef, useEffect } from "react"

export default function MagneticButton({ children, className, ...props }){

  const ref = useRef()

  useEffect(()=>{

    const el = ref.current

    const move = (e)=>{
      const rect = el.getBoundingClientRect()

      const x = e.clientX - rect.left - rect.width/2
      const y = e.clientY - rect.top - rect.height/2

      el.style.transform = `translate(${x*0.15}px, ${y*0.15}px)`
    }

    const leave = ()=>{
      el.style.transform = "translate(0px,0px)"
    }

    el.addEventListener("mousemove",move)
    el.addEventListener("mouseleave",leave)

    return ()=>{
      el.removeEventListener("mousemove",move)
      el.removeEventListener("mouseleave",leave)
    }

  },[])

  return(
    <button
      ref={ref}
      className={`transition-transform duration-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}   