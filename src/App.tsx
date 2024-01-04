import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TestPage from './pages/TestPage'
import ProductRegisterPage from './pages/ProductRegisterPage'
import MyPostPage from './pages/MyPostPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TestPage />} />
        <Route path="/ProductRegisterPage" element={<ProductRegisterPage />} />
        <Route
          path="/MyPostPage"
          element={
            <MyPostPage
              productName={''}
              productImage={null}
              price={''}
              description={''}
              dealLocation={''}
              category=""
            />
          }
        />
      </Routes>
    </Router>
  )
}

export default App
