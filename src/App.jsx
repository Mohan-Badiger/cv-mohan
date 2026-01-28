import React from 'react'
import Home from './pages/Home'

const App = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
       <main className="pt-20 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Sections will go here */}
      <Home/>
      </main>
    </div>
  )
}

export default App