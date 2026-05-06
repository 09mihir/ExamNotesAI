import React from 'react'
import Navbar from '../components/Navbar'
import { motion } from "motion/react"
import img from "../assets/img1.png"
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  return (
    <div className='min-h-screen overflow-hidden bg-[#030014] text-white relative flex flex-col'>
      {/* Background glow effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-violet-600/20 blur-[150px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[40%] h-[60%] rounded-full bg-cyan-500/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] rounded-full bg-blue-600/15 blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>

      <Navbar />

      <main className="flex-grow z-10 flex flex-col justify-center">
        {/* Hero Section */}
        <section className='max-w-7xl mx-auto px-8 pt-20 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative'>
          
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md shadow-lg shadow-black/20">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
                <span className="text-sm font-medium text-cyan-100 tracking-wide">ExamNotesAI 2.0 is Live</span>
              </div>

              <h1 className="text-5xl lg:text-[4.5rem] font-extrabold leading-[1.1] tracking-tight mb-6 text-white/90 drop-shadow-2xl">
                Create Smart <br /> 
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                  AI Notes
                </span> in Seconds
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className='max-w-xl text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-10'
              >
                Generate exam-focused notes, project documentation,
                flow diagrams and revision-ready content using AI —
                faster, cleaner and smarter.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex items-center gap-4"
            >
              <button
                onClick={() => navigate("/notes")}
                className='relative px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] transform hover:-translate-y-1 flex items-center gap-2'
              >
                Get Started Free
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
              </button>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 50 }}
            whileHover={{ y: -10, rotateX: 5, rotateY: -5 }}
            className="transform-gpu relative"
            style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-violet-500/20 rounded-3xl blur-2xl transform scale-105" />
            <div className='relative rounded-3xl p-2 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden'>
              <div className="absolute inset-0 bg-black/40 z-0"></div>
              <img src={img} alt="ExamNotesAI Platform" className="relative z-10 rounded-2xl w-full h-auto opacity-90 mix-blend-lighten" />
            </div>
          </motion.div>

        </section>

        {/* Feature Section */}
        <section className='max-w-7xl mx-auto px-8 py-24 mb-10 w-full'>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Everything you need to ace your exams</h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <Feature icon="📘" title="Exam Notes" des="High-yield exam-oriented notes with revision points tailored to your syllabus." delay={0.1} />
            <Feature icon="📂" title="Project Notes" des="Well-structured, comprehensive content for assignments and research projects." delay={0.2} />
            <Feature icon="📊" title="Diagrams" des="Auto-generated visual diagrams and flowcharts for ultimate clarity." delay={0.3} />
            <Feature icon="⬇️" title="PDF Download" des="Download clean, printable and perfectly formatted PDFs instantly." delay={0.4} />
          </div>
        </section>
      </main>

      <Footer/>
    </div>
  )
}

function Feature({ icon, title, des, delay }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      className='relative rounded-2xl p-8 group
      bg-white/[0.03] hover:bg-white/[0.06]
      backdrop-blur-xl
      border border-white/5 hover:border-white/10
      transition-all duration-300
      overflow-hidden'
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-transparent to-violet-500/0 group-hover:from-cyan-500/10 group-hover:to-violet-500/10 transition-colors duration-500" />
      
      <div className='relative z-10'>
        <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300 ease-out">{icon}</div>
        <h3 className="text-xl font-semibold mb-3 text-white/90 group-hover:text-white transition-colors">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{des}</p>
      </div>
    </motion.div>
  )
}

export default Home
