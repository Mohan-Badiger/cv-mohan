import React from 'react'
import Home from './pages/Home'

const App = () => {
  return (
    <div className="relative min-h-screen bg-[#f5f5f7] dark:bg-[#070708] text-black dark:text-white overflow-hidden transition-colors duration-500">
      
      <main className="relative z-10">
        <Home />
      </main>
    </div>
  )
}

export default App