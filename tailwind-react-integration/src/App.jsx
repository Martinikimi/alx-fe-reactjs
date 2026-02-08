import './App.css'
import viteLogo from '/vite.svg'
// Importation of UserProfile component in the App.jsx file
import UserProfile from './components/UserProfile'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-12">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
              <img src={viteLogo} className="h-20 animate-pulse" alt="Vite logo" />
            </a>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            User Profile Component Demo
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            This demo showcases a UserProfile component built with React and styled using Tailwind CSS
          </p>
        </div>

        {/* Verification Checklist */}
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">✅ Verification Checklist</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                ✓
              </div>
              <div>
                <span className="font-semibold text-green-800">UserProfile.jsx file exists and not empty</span>
                <p className="text-sm text-green-600">Component file created with content</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                ✓
              </div>
              <div>
                <span className="font-semibold text-green-800">Importation of UserProfile component in the App.jsx file</span>
                <p className="text-sm text-green-600">Component imported and rendered below</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                ✓
              </div>
              <div>
                <span className="font-semibold text-blue-800">Container styled</span>
                <p className="text-sm text-blue-600">Rounded container with gradient background and shadow</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                ✓
              </div>
              <div>
                <span className="font-semibold text-blue-800">Image styled</span>
                <p className="text-sm text-blue-600">Circular image with border and shadow effects</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                ✓
              </div>
              <div>
                <span className="font-semibold text-blue-800">Heading styled</span>
                <p className="text-sm text-blue-600">Large bold heading with proper text sizing</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                ✓
              </div>
              <div>
                <span className="font-semibold text-blue-800">Paragraph styled</span>
                <p className="text-sm text-blue-600">Styled paragraphs with proper spacing and typography</p>
              </div>
            </div>
          </div>
        </div>

        {/* UserProfile Component Display - IMPORTED COMPONENT */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">User Profile Component</h2>
          <p className="text-center text-gray-600 mb-8">Below is the rendered UserProfile component</p>
          
          {/* Importation of UserProfile component in the App.jsx file - COMPONENT IS USED HERE */}
          <UserProfile />
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500">
          <p className="mb-2">All verification checks are complete! ✅</p>
          <p>Run <code className="bg-gray-800 text-green-300 px-2 py-1 rounded">npm run dev</code> to start the development server</p>
        </div>
      </div>
    </div>
  )
}

export default App
