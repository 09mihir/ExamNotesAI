import React, { useState } from 'react'
import { motion } from "motion/react"
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import TopicForm from '../components/TopicForm'
import Sidebar from '../components/Sidebar'
import FinalResult from '../components/FinalResult'
function Notes() {
  const navigate = useNavigate()
  const { userData } = useSelector((state) => state.user)
  const credits = userData.credits
  const [loading,setLoading]= useState(false)
  const [result , setResult] = useState(null)
  const [error,setError] = useState("")

  return (
    <div className='min-h-screen bg-[#030014] text-white px-6 py-8 relative'>
      {/* Background glow effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-violet-600/20 blur-[150px] pointer-events-none" />
      <div className="fixed top-[40%] right-[-10%] w-[40%] h-[60%] rounded-full bg-cyan-500/10 blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
      
      <motion.header
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}

        className=" mb-10
            rounded-2xl
            bg-black/80 backdrop-blur-xl
            border border-white/10
            px-8 py-6
            shadow-[0_20px_45px_rgba(0,0,0,0.6)] items-start
            flex md:items-center justify-between gap-4 flex-col md:flex-row"
      >
        <div onClick={() => navigate("/")} className='cursor-pointer'><h1 className='text-2xl font-bold
            bg-linear-to-r from-white via-gray-300 to-white
            bg-clip-text text-transparent'>Ai Study Assistant</h1>
          <p className='text-sm text-gray-300 mt-1'>AI-powered exam-oriented notes & revision</p></div>

        <div className='flex items-center gap-4 flex-wrap'>

          <button onClick={()=>navigate("/history")} className='px-4 py-3 rounded-full
      text-sm font-medium
      bg-white/10
      border border-white/20
      text-white
      hover:bg-white/20
      transition
      flex items-center gap-2'>
        📚 Your Notes


          </button>
        </div>


      </motion.header>


      <motion.div 
          className="mb-12">
        <TopicForm loading={loading} setResult={setResult} setLoading={setLoading} setError={setError}/>
      </motion.div>


      {loading && (
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
            className="text-center text-black font-medium mb-6"
          >
            Generating exam-focused notes…
          </motion.div>
        )}

        {error && (
          <div className="mb-6 text-center text-red-600 font-medium">
            {error}
          </div>
        )}

    {!result && <motion.div whileHover={{ scale: 1.02 }}
            className="
              h-64
              rounded-2xl
              flex flex-col items-center justify-center
              bg-white/5 backdrop-blur-lg
              border border-dashed border-white/20
              text-gray-400
              shadow-inner
            ">
               <span className="text-4xl mb-3">📘</span>
            <p className="text-sm">
              Generated notes will appear here
            </p>

     </motion.div>}


    {result && <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
     className='flex flex-col
      lg:grid lg:grid-cols-4
      gap-6'>

        <div className='lg:col-span-1'>
          <Sidebar result={result}/>


        </div>

        <div className='lg:col-span-3
        rounded-2xl
        bg-white/5 border border-white/10
        shadow-[0_15px_40px_rgba(0,0,0,0.3)]
        p-6'>
          <FinalResult result={result}/>
        </div>


    </motion.div>
}
    </div>
  )
}

export default Notes
