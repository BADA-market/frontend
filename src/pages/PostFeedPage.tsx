import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

interface Post {
  id: number
  productName: string
  productImage: string | null
  price: string
  dealLocation: string
}

const PostFeedPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [sorting, setSorting] = useState<'등록순' | '인기순' | '카테고리'>('등록순')

  useEffect(() => {
    // localStorage에서 최신 게시물 데이터를 불러오기
    const latestPostDataString = localStorage.getItem('latestPostData')

    if (latestPostDataString) {
      const latestPostData = JSON.parse(latestPostDataString)
      const newPost: Post = {
        id: Date.now(),
        productName: latestPostData.productName,
        productImage: latestPostData.productImage,
        price: latestPostData.price,
        dealLocation: latestPostData.dealLocation,
      }

      // 이전에 localStorage에 저장된 기존 데이터들을 불러오기
      const existingDataString = localStorage.getItem('posts')
      let updatedPosts = []

      if (existingDataString) {
        const existingData = JSON.parse(existingDataString)

        // 중복된 게시물인지 확인
        const isDuplicatePost = existingData.some(
          (post: Post) => post.productName === newPost.productName && post.price === newPost.price,
        )

        if (!isDuplicatePost) {
          // 중복된 게시물이 없을 경우, 최신 데이터를 추가하고 localStorage에 저장
          updatedPosts = [...existingData, newPost]
          setPosts(updatedPosts)
          localStorage.setItem('posts', JSON.stringify(updatedPosts))
        }
      } else {
        // 저장된 기존 데이터가 없을 경우, 최신 데이터만 표시
        updatedPosts = [newPost]
        localStorage.setItem('posts', JSON.stringify([newPost]))
      }
    }
  }, [])

  return (
    <PageContainer>
      <SortOptions>
        <SortOption>등록순</SortOption>
        <SortOption>인기순</SortOption>
        <SortOption>카테고리</SortOption>
      </SortOptions>
      <PostContainer>
        {posts.map((post) => (
          <PostItem key={post.id}>
            <PostImage>
              <img src={post.productImage || ''} alt="Product" />
            </PostImage>
            <PostTitle>{post.productName}</PostTitle>
            <PostPrice>{post.price}</PostPrice>
            <PostDealLocation>{post.dealLocation}</PostDealLocation>
          </PostItem>
        ))}
      </PostContainer>
    </PageContainer>
  )
}

const PageContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  width: 100%;
`

const SortOptions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`

const SortOption = styled.span`
  cursor: pointer;
`

const PostContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  margin-bottom: 50px;
  gap: 20px;
`

const PostItem = styled.div`
  flex-basis: calc(33.333% - 20px);
  margin-bottom: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
`

const PostImage = styled.div`
  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
`

const PostTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin: 10px;
`

const PostPrice = styled.div`
  font-size: 16px;
  color: #007bc0;
  font-weight: bold;
  margin: 10px;
`

const PostDealLocation = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #cccccc;
  margin: 10px;
`

export default PostFeedPage
