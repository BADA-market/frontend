import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TestPage from './pages/TestPage'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import ProductRegisterPage from './pages/ProductRegisterPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TestPage />} />
        <Route path="/sign_up" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/ProductRegisterPage" element={<ProductRegisterPage />} />
      </Routes>
    </Router>
  )
}

export default App
