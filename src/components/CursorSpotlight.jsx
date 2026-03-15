import { useEffect, useRef } from "react"

export default function SmoothCursor(){

  const ref = useRef()

  const mouse = useRef({ x: window.innerWidth/2, y: window.innerHeight/2 })
  const pos = useRef({ x: mouse.current.x, y: mouse.current.y })

  useEffect(()=>{

    const move = (e)=>{
      mouse.current = { x:e.clientX, y:e.clientY }
    }

    window.addEventListener("mousemove", move)

    const animate = ()=>{

      const dx = mouse.current.x - pos.current.x
      const dy = mouse.current.y - pos.current.y

      pos.current.x += dx * 0.12
      pos.current.y += dy * 0.12

      const speed = Math.sqrt(dx*dx + dy*dy)

      const stretchX = 1 + Math.min(speed / 80, 0.6)
      const stretchY = 1 - Math.min(speed / 160, 0.4)

      const rotate = Math.atan2(dy, dx) * (180 / Math.PI)

      const el = ref.current

      if(el){
        el.style.transform = `
          translate(${pos.current.x}px, ${pos.current.y}px)
          translate(-50%, -50%)
          rotate(${rotate}deg)
          scale(${stretchX}, ${stretchY})
        `
      }

      requestAnimationFrame(animate)
    }

    animate()

    return ()=> window.removeEventListener("mousemove", move)

  },[])

  return(
    <div
      ref={ref}
      className="fixed pointer-events-none z-[999]"
    >

      {/* MAIN LIQUID BLOB */}
      <div className="
        w-28 h-28
        rounded-full
        bg-gradient-to-br
        from-sky-400/50
        via-cyan-300/40
        to-blue-400/40
        blur-2xl
        "
      />

      {/* INNER MASS */}
      <div className="
        w-16 h-16
        rounded-full
        bg-sky-300/50
        blur-xl
        absolute
        top-1/2 left-1/2
        -translate-x-1/2 -translate-y-1/2
      "/>

      {/* CORE */}
      <div className="
        w-3 h-3
        bg-sky-500
        rounded-full
        absolute
        top-1/2 left-1/2
        -translate-x-1/2 -translate-y-1/2
      "/>

    </div>
  )
}