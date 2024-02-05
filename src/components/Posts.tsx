import React, { useState, useEffect } from 'react'

interface Post {
  userId: number
  id: number
  title: string
  body: string
  image: string
}

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    // localStorage에서 최신 게시물 데이터를 불러오기
    const latestPostDataString = localStorage.getItem('latestPostData')
    const existingDataString = localStorage.getItem('posts')

    // 기존에 저장된 데이터가 있는 경우 파싱
    const existingData = existingDataString ? JSON.parse(existingDataString) : []

    if (latestPostDataString) {
      const latestPostData = JSON.parse(latestPostDataString)

      // 이미 저장된 게시물 중에서 동일한 데이터가 있는지 확인
      const isDuplicatePost = existingData.some(
        (post: Post) =>
          post.title === latestPostData.productName &&
          post.body === latestPostData.description &&
          post.image === latestPostData.productImage,
      )

      if (!isDuplicatePost) {
        const newPost: Post = {
          userId: Date.now(),
          id: Date.now(),
          title: latestPostData.productName,
          body: latestPostData.description,
          image: latestPostData.productImage,
        }

        // 최신 데이터와 기존 데이터를 합쳐서 설정
        const updatedPosts = [...existingData, newPost]
        setPosts(updatedPosts)
        // localStorage에도 최신 데이터를 추가하여 저장
        localStorage.setItem('posts', JSON.stringify(updatedPosts))
      }
    } else {
      // localStorage에 최신 데이터가 없을 경우, 기존 데이터만 설정
      setPosts(existingData)
    }
  }, [])

  const postsList = posts.map((post) => (
    <div key={post.id} id={String(post.id)}>
      <img src={post.image} alt="Product" />
      <h4>{post.title}</h4>
      <p>{post.body}</p>
    </div>
  ))

  return <div>{postsList}</div>
}

export default Posts
