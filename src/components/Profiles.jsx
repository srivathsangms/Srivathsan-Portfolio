import { motion } from "framer-motion"

const profiles = [

  {
    name:"GitHub",
    desc:"Explore my AI systems, automation tools and experimental implementations.",
    link:"https://github.com/srivathsangms",
    color:"from-gray-700 to-black"
  },

  {
    name:"LinkedIn",
    desc:"Professional updates, achievements and technical learning reflections.",
    link:"http://www.linkedin.com/in/srivathsangms",
    color:"from-blue-500 to-blue-700"
  },

  {
    name:"LeetCode",
    desc:"Practicing algorithmic problem solving and strengthening coding fundamentals.",
    link:"https://leetcode.com/u/srivathsangms/",
    color:"from-yellow-400 to-orange-500"
  },

  {
    name:"SkillRack",
    desc:"Consistent programming practice and skill development exercises.",
    link:"http://www.skillrack.com/profile/476546/b53e861e261419f5ca05beae75a7f622479d59ef",
    color:"from-green-400 to-emerald-600"
  }

]

export default function Profiles({ dark }){

  const open = (link)=>{
    window.open(link)
  }

  return(
    <div className="h-screen flex flex-col items-center justify-center px-12">

      <h1 className={`text-6xl font-bold mb-14 ${dark ? "text-sky-400" : "text-sky-500"}`}>
        Profiles
      </h1>

      <div className="grid grid-cols-2 gap-8 max-w-5xl">

        {profiles.map((p,i)=>(
          <motion.div
            key={i}
            whileHover={{scale:1.07, rotate:1}}
            onClick={()=>open(p.link)}
            className={`
              cursor-pointer
              backdrop-blur-xl
              border
              rounded-2xl
              p-8
              shadow-xl
              transition
              ${dark
                ? "bg-slate-900/60 border-slate-700 text-slate-200"
                : "bg-white/70 border-white/40 text-slate-700"
              }
            `}
          >

            <div className={`
              w-full h-2 rounded-full mb-5
              bg-gradient-to-r ${p.color}
            `}/>

            <h3 className="text-2xl font-semibold mb-3">
              {p.name}
            </h3>

            <p className="opacity-80 leading-relaxed">
              {p.desc}
            </p>

          </motion.div>
        ))}

      </div>

    </div>
  )
}