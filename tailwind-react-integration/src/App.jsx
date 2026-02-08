import './App.css'
import viteLogo from '/vite.svg'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
              <img src={viteLogo} className="h-24 animate-pulse" alt="Vite logo" />
            </a>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Tailwind CSS + React + Vite
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Successfully integrated Tailwind CSS with React using Vite!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold text-indigo-700 mb-4">🚀 Fast Setup</h3>
            <p className="text-gray-600">
              Installed and configured Tailwind CSS in minutes using Vite plugin.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold text-indigo-700 mb-4">⚡ Utility-First</h3>
            <p className="text-gray-600">
              Apply styling directly in your JSX with utility classes.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold text-indigo-700 mb-4">🎨 Responsive</h3>
            <p className="text-gray-600">
              Built-in responsive design modifiers for all screen sizes.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl shadow-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-6">Verification Steps</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                ✓
              </div>
              <span className="text-lg">React project created with Vite</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                ✓
              </div>
              <span className="text-lg">Tailwind CSS and Vite plugin installed</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                ✓
              </div>
              <span className="text-lg">Vite configuration updated</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                ✓
              </div>
              <span className="text-lg">Tailwind imported in CSS</span>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-gray-500">
          <p>Run <code className="bg-gray-800 text-green-300 px-2 py-1 rounded">npm run dev</code> to start the development server</p>
        </div>
      </div>
    </div>
  )
}

export default App
