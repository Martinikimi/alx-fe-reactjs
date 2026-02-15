import React from 'react'
import HomePage from './components/HomePage'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-3xl font-bold text-gray-900">
            Recipe Sharing Platform
          </h1>
          <p className="text-orange-500 mt-2">
            Share your favorite recipes with the world!
          </p>
        </div>
      </header>
      <main>
        <HomePage />
      </main>
      <footer className="bg-white shadow-sm mt-8">
        <div className="container mx-auto px-4 py-4 text-center text-gray-600">
          <p>&copy; 2024 Recipe Sharing Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
