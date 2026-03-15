import { useRef } from "react"

export default function Navbar({
  setSection,
  setDirection,
  dark,
  setDark
}){

  const rippleRef = useRef()

  const toggleTheme = (e)=>{

    const ripple = rippleRef.current

    const rect = e.currentTarget.getBoundingClientRect()

    const x = rect.left + rect.width/2
    const y = rect.top + rect.height/2

    ripple.style.left = x + "px"
    ripple.style.top = y + "px"
    ripple.style.opacity = "1"

    ripple.classList.remove("animate-ripple")
    void ripple.offsetWidth
    ripple.classList.add("animate-ripple")

    setTimeout(()=>{
      setDark(d => !d)
    },300)

    setTimeout(()=>{
      ripple.style.opacity = "0"
      ripple.style.transform = "translate(-50%,-50%) scale(0)"
    },700)
  }

  const go = (i)=>{
    setDirection(i > 0 ? "next" : "prev")
    setSection(i)
  }

  return(
    <>
      {/* RIPPLE */}
      <div
        ref={rippleRef}
        className={`
        fixed
        w-10 h-10
        rounded-full
        pointer-events-none
        z-[998]
        opacity-0
        transition-opacity
        ${dark ? "bg-[#f5fbff]" : "bg-[#06121c]"}
        `}
        style={{
          transform:"translate(-50%,-50%) scale(0)"
        }}
      />

      <div className="
      fixed top-6 left-1/2 -translate-x-1/2
      z-[999]
      backdrop-blur-xl
      px-8 py-3
      rounded-full
      shadow-xl
      border border-white/30
      flex gap-6 items-center
      ">

        {["Home","About","Skills","Projects","Experience","Achievements","Profiles","Contact"]
          .map((t,i)=>(
            <button
              key={i}
              onClick={()=>go(i)}
              className="text-sm font-medium text-gray-600 hover:text-sky-500"
            >
              {t}
            </button>
        ))}

        {/* ⭐ THEME TOGGLE ICON BUTTON */}
        <button
          onClick={toggleTheme}
          className="
          ml-4
          w-10 h-10
          rounded-full
          bg-gradient-to-br
          from-sky-400
          to-cyan-300
          shadow-lg
          hover:scale-110
          transition
          flex items-center justify-center
          text-lg
          "
        >
          {dark ? "🌙" : "☀️"}
        </button>

      </div>
    </>
  )
}