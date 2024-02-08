import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TestPage from './pages/TestPage'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import ProductRegisterPage from './pages/ProductRegisterPage'
import MyPostPage from './pages/MyPostPage'
import MyPage from './pages/MyPage'
import PostFeedPage from './pages/PostFeedPage'
import Posts from './components/Posts'
import Chat from './pages/Chat'
import Header from './components/Header'

function App() {
  return (
    <div>
      <Router>
        <Header />
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
          <Route path="/Chat" element={<Chat />} />
          <Route path="/MyPage" element={<MyPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
