import React, { useState } from 'react'
import styled from 'styled-components'
import { dummyPosts } from '../Dummy/DummyPost'

const ReviewPage: React.FC = () => {
  const [reviews, setReviews] = useState<string[]>([])
  const [newReview, setNewReview] = useState('')
  const [selectedOption, setSelectedOption] = useState('')

  const handleReviewSubmit = (option: string) => {
    setSelectedOption(option)
    setNewReview(option)
    if (option !== '') {
      setReviews([...reviews, option])
    }
  }

  const ReveiwOptions: string[] = ['최고에요!', '그저 그랬어요', '아쉬웠어요', '최악이에요']

  return (
    <PageContainer>
      <Title>리뷰 등록</Title>
      <Separator />
      <ProductContainer>
        {dummyPosts.map((post) => {
          if (post.id === 1) {
            return (
              <PostItem key={post.id}>
                <PostImage>
                  <img src={`${import.meta.env.BASE_URL}${post.productImage}`} alt="Product" />
                </PostImage>
                <PostContent>
                  <PostTitle>{post.productName}</PostTitle>
                  <PostPrice>{post.price}</PostPrice>
                </PostContent>
              </PostItem>
            )
          }
        })}
      </ProductContainer>
      <Separator />
      <LabelContainer>
        <Label>하은이와의 거래는 어떠셨나요?</Label>
      </LabelContainer>

      <SelectContainer>
        <ButtonGroup>
          {ReveiwOptions.map((option) => (
            <ReviewButton
              key={option}
              selected={selectedOption === option}
              onClick={() => handleReviewSubmit(option)}>
              {option}
            </ReviewButton>
          ))}
        </ButtonGroup>
      </SelectContainer>

      <ReviewContainer>
        <ReviewInput
          placeholder="후기를 작성해주세요"
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
        />
      </ReviewContainer>
      <ButtonContainer>
        <SubmitButton onClick={() => handleReviewSubmit(selectedOption)}>등록</SubmitButton>
      </ButtonContainer>
    </PageContainer>
  )
}

const PageContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`

const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

const PostItem = styled.div`
  display: flex;
  align-items: center;
`

const PostImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  margin-right: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
`

const PostContent = styled.div`
  flex: 1;
`

const PostTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin: 10px;
`
const PostPrice = styled.div`
  font-size: 14px;
  color: #007bc0;
  font-weight: bold;
  margin: 10px;
`
const ReviewButton = styled.button<{ selected: boolean }>`
  padding: 12px;
  width: 200px;
  background-color: ${(props) => (props.selected ? '#def3ff' : 'white')};
  border: 1px solid #bebebe;
  border-radius: 20px;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease;
  box-shadow: ${(props) => (props.selected ? 'none' : '0px 4px 6px rgba(0, 0, 0, 0.1)')};

  &:focus {
    outline: none;
    box-shadow: none;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`

const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
`

const LabelContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  margin-bottom: 16px;
`

const Label = styled.label`
  font-size: 24px;
`

const ReviewContainer = styled.div`
  display: flex;
  margin-top: 40px;
`

const ReviewInput = styled.textarea`
  padding: 20px;
  width: 100%;
  height: 100px;
  border: 1px solid #bebebe;
  border-radius: 10px;
  resize: none;
  &:focus {
    outline: none;
    border-color: grey;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
`

const SubmitButton = styled.button`
  padding: 10px;
  width: 150px;
  background-color: #def3ff;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  margin-top: 30px;

  &:hover {
    background-color: #c7e2f1;
  }
`

const Separator = styled.div`
  height: 1px;
  width: 100%;
  background-color: #ebebeb;
  margin: 16px 0;
`

export default ReviewPage
