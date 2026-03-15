import { motion } from "framer-motion"
import { useState } from "react"

export default function Contact({ dark }){

  const [copied,setCopied] = useState(false)

  const copyEmail = ()=>{
    navigator.clipboard.writeText("srivathsangms@gmail.com")
    setCopied(true)
    setTimeout(()=>setCopied(false),1500)
  }

  const openWhatsApp = ()=>{
    window.open("https://wa.me/918610263285")
  }

  const sendMail = ()=>{
    window.location.href = "mailto:srivathsangms@gmail.com"
  }

  return(
    <div className="h-screen flex flex-col items-center justify-center text-center px-6 relative">

      {/* MAP GLOW BACKGROUND */}
      <div className="
        absolute
        w-[600px]
        h-[600px]
        rounded-full
        bg-sky-400/20
        blur-[120px]
        animate-pulse
        pointer-events-none
      "/>

      <motion.h1
        initial={{opacity:0, y:60}}
        animate={{opacity:1, y:0}}
        transition={{duration:0.8}}
        className={`
          text-6xl font-bold mb-8
          ${dark ? "text-sky-400" : "text-sky-500"}
        `}
      >
        Contact
      </motion.h1>

      <motion.p
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:0.3}}
        className="max-w-xl leading-relaxed opacity-80 mb-12"
      >
        Let’s build something impactful together.  
        I am open to AI projects, internships, collaborations and innovative ideas.
      </motion.p>

      {/* CONTACT CARDS */}
      <div className="flex flex-wrap justify-center gap-6">

        {/* EMAIL CARD */}
        <motion.div
          whileHover={{scale:1.08, rotate:1}}
          className={`
            backdrop-blur-xl
            border
            shadow-xl
            rounded-2xl
            p-6
            w-64
            cursor-pointer
            ${dark
              ? "bg-slate-900/60 border-slate-700"
              : "bg-white/70 border-white/40"
            }
          `}
        >
          <h3 className="font-semibold text-sky-500 mb-2">Email</h3>
          <p className="text-sm mb-4">srivathsangms@gmail.com</p>

          <div className="flex gap-3 justify-center">
            <button
              onClick={sendMail}
              className="text-xs px-3 py-1 bg-sky-400 text-white rounded-full"
            >
              Send
            </button>

            <button
              onClick={copyEmail}
              className="text-xs px-3 py-1 bg-gray-400 text-white rounded-full"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </motion.div>

        {/* WHATSAPP CARD */}
        <motion.div
          whileHover={{scale:1.08, rotate:-1}}
          className={`
            backdrop-blur-xl
            border
            shadow-xl
            rounded-2xl
            p-6
            w-64
            cursor-pointer
            ${dark
              ? "bg-slate-900/60 border-slate-700"
              : "bg-white/70 border-white/40"
            }
          `}
        >
          <h3 className="font-semibold text-green-500 mb-2">WhatsApp</h3>
          <p className="text-sm mb-4">+91 8610263285</p>

          <button
            onClick={openWhatsApp}
            className="text-xs px-4 py-1 bg-green-500 text-white rounded-full"
          >
            Message
          </button>
        </motion.div>

        {/* LOCATION CARD */}
<motion.div
  whileHover={{scale:1.08}}
  className={`
    backdrop-blur-xl
    border
    shadow-xl
    rounded-2xl
    p-6
    w-64
    text-center
    ${dark
      ? "bg-slate-900/60 border-slate-700"
      : "bg-white/70 border-white/40"
    }
  `}
>
  <h3 className="font-semibold text-sky-500 mb-2">
    Location
  </h3>

  <p className="text-sm font-medium">
    Madurai, Tamil Nadu
  </p>

  <p className="text-xs mt-2 opacity-70 flex items-center justify-center gap-1">
    INDIA 🇮🇳
  </p>

</motion.div>

      </div>

    </div>
  )
}
