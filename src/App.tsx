import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TestPage from './pages/TestPage'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import ProductRegisterPage from './pages/ProductRegisterPage'
import MyPostPage from './pages/MyPostPage'
import PostFeedPage from './pages/PostFeedPage'
import Posts from './components/Posts'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TestPage />} />
        <Route path="/sign_up" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/ProductRegister" element={<ProductRegisterPage />} />
        <Route path="/PostFeed" element={<PostFeedPage />} />
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
        <Route path="/Posts" element={<Posts />} />
      </Routes>
    </Router>
  )
}

export default App
