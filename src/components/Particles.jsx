import { useEffect, useRef } from "react"

export default function Particles({ trigger }) {

  const canvasRef = useRef()
  const particlesRef = useRef([])
  const mouseRef = useRef({ x: -9999, y: -9999 })

  useEffect(() => {

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = []

    for (let i = 0; i < 35; i++) {   // 👈 reduced from 80
      particles.push({
        x: Math.random()*canvas.width,
        y: Math.random()*canvas.height,
        vx: (Math.random() - 0.5) * 3,
        vy: (Math.random() - 0.5) * 3,
        size: Math.random() * 1.5 + 0.5
      })
    }

    particlesRef.current = particles

  }, [trigger])

  useEffect(() => {

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    function animate(){

      ctx.clearRect(0,0,canvas.width,canvas.height)

      particlesRef.current.forEach(p=>{

        p.x += p.vx
        p.y += p.vy

        if(p.x < 0) p.x = canvas.width
        if(p.x > canvas.width) p.x = 0
        if(p.y < 0) p.y = canvas.height
        if(p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x,p.y,p.size,0,Math.PI*2)
        ctx.fillStyle="rgba(125,211,252,0.6)"
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

  }, [])

  return(
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 pointer-events-none z-30"
    />
  )
}