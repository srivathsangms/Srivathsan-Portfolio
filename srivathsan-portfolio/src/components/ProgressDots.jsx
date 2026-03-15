export default function ProgressDots({
  section,
  setSection,
  setDirection
}){

  const total = 8

  const go = (i)=>{
    setDirection(i > section ? "next" : "prev")
    setSection(i)
  }

  return(
    <div className="
      fixed
      right-6
      top-1/2
      -translate-y-1/2
      z-[999]
      flex
      flex-col
      gap-4
    ">

      {Array.from({length: total}).map((_,i)=>(
        <div
          key={i}
          onClick={()=>go(i)}
          className={`
            w-3 h-3
            rounded-full
            cursor-pointer
            transition-all
            ${section === i
              ? "bg-sky-400 scale-150 shadow-[0_0_12px_rgba(56,189,248,0.9)]"
              : "bg-gray-400/40 hover:bg-sky-300"
            }
          `}
        />
      ))}

    </div>
  )
}