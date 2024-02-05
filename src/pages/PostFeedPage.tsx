import React, { useState } from 'react'
import styled from 'styled-components'
import { dummyPosts } from '../Dummy/DummyPost'
import filledHeartIcon from '/Users/haeun/Desktop/bada/frontend/src/assets/images/Icon/myheart.png'
import emptyHeartIcon from '/Users/haeun/Desktop/bada/frontend/src/assets/images/Icon/heart.png'

const PostFeedPage: React.FC = () => {
  const [likedPosts, setLikedPosts] = useState<number[]>([])

  const handleLikeClick = (postId: number) => {
    if (likedPosts.includes(postId)) {
      setLikedPosts(likedPosts.filter((id) => id !== postId))
    } else {
      setLikedPosts([...likedPosts, postId])
    }
  }

  return (
    <PageContainer>
      <PostContainer>
        {dummyPosts.map((post) => (
          <PostItem key={post.id}>
            <PostImage>
              <img src={`${import.meta.env.BASE_URL}${post.productImage}`} alt="Product" />
            </PostImage>
            <PostTitle>{post.productName}</PostTitle>
            <PostPrice>{post.price}</PostPrice>
            <PostDealLocation>{post.dealLocation}</PostDealLocation>
            <LikeButton
              onClick={() => handleLikeClick(post.id)}
              liked={likedPosts.includes(post.id)}>
              {likedPosts.includes(post.id) ? (
                <img src={filledHeartIcon} alt="Filled Heart" />
              ) : (
                <img src={emptyHeartIcon} alt="Empty Heart" />
              )}
            </LikeButton>
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
  position: relative;
`

const PostImage = styled.div`
  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    margin-bottom: 10px;
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

const LikeButton = styled.button<{ liked: boolean }>`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  img {
    width: 24px;
    height: 24px;
  }
`
export default PostFeedPage
