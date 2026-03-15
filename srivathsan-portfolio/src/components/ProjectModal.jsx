import { motion, AnimatePresence } from "framer-motion"

export default function ProjectModal({ project, close, dark }){

  return(
    <AnimatePresence>
      {project && (

        <motion.div
          initial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity:0}}
          className="fixed inset-0 bg-black/60 backdrop-blur-xl flex items-center justify-center z-[100]"
          onClick={close}
        >

          <motion.div
            initial={{scale:0.8,opacity:0}}
            animate={{scale:1,opacity:1}}
            exit={{scale:0.8,opacity:0}}
            transition={{type:"spring", stiffness:140}}
            onClick={(e)=>e.stopPropagation()}
            className={`
              w-[600px]
              rounded-3xl
              p-10
              shadow-2xl
              ${dark
                ? "bg-slate-900 text-slate-200"
                : "bg-white text-slate-700"
              }
            `}
          >

            <h2 className="text-3xl font-bold text-sky-500">
              {project.title}
            </h2>

            <p className="mt-4 opacity-80 leading-relaxed">
              {project.desc}
            </p>

            <h3 className="mt-6 font-semibold">
              Tech Stack
            </h3>

            <div className="flex gap-2 mt-3 flex-wrap">
              {project.tech.map((t,i)=>(
                <span
                  key={i}
                  className={`
                    px-3 py-1 rounded-full text-sm
                    ${dark
                      ? "bg-sky-500/20 text-sky-300"
                      : "bg-sky-100 text-sky-600"
                    }
                  `}
                >
                  {t}
                </span>
              ))}
            </div>

            <button
              onClick={()=>window.open(project.github)}
              className="
                mt-8
                bg-sky-400
                text-white
                px-6 py-2
                rounded-full
                hover:scale-105
                transition
              "
            >
              View on GitHub →
            </button>

          </motion.div>

        </motion.div>

      )}
    </AnimatePresence>
  )
}