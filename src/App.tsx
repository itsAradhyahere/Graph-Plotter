// src/App.tsx
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <div className="p-4">
      <nav className="mb-4">
        <Link to="/" className="text-blue-600 underline">Home</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
