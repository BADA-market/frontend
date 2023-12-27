import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TestPage from './pages/TestPage'
import ProductRegisterPage from './pages/ProductRegisterPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TestPage />} />
        <Route path="/ProductRegisterPage" element={<ProductRegisterPage />} />
      </Routes>
    </Router>
  )
}

export default App
