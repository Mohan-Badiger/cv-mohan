import React from 'react'
import Home from './pages/Home'

const App = () => {
  return (
    <div className="relative min-h-screen bg-[#f5f5f7] dark:bg-[#070708] text-black dark:text-white overflow-hidden transition-colors duration-500">
      
      {/* Background Liquid Glass Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-linear-to-tr from-pink-400/25 to-indigo-400/25 dark:from-pink-900/15 dark:to-indigo-900/15 blur-[80px] sm:blur-[120px] animate-morph-1 pointer-events-none -z-10" />
      <div className="absolute bottom-[10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-linear-to-br from-cyan-400/20 to-emerald-400/20 dark:from-cyan-900/10 dark:to-emerald-900/10 blur-[80px] sm:blur-[120px] animate-morph-2 pointer-events-none -z-10" />
      <div className="absolute top-[35%] left-[25%] w-[45vw] h-[45vw] rounded-full bg-linear-to-tr from-purple-400/15 to-rose-400/20 dark:from-purple-950/10 dark:to-rose-950/10 blur-[80px] sm:blur-[120px] animate-morph-3 pointer-events-none -z-10" />

      <main className="relative z-10">
        <Home />
      </main>
    </div>
  )
}

export default App