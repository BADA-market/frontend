import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

interface MyPostPageProps {
  productName: string
  productImage: string | null
  price: string
  description: string
  dealLocation: string
  category: string
}

const MyPostPage: React.FC<MyPostPageProps> = () => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)

  const productName = searchParams.get('productName') || ''
  const productImage = searchParams.get('productImage') || ''
  const price = searchParams.get('price') || ''
  const description = searchParams.get('description') || ''
  const dealLocation = searchParams.get('dealLocation') || ''
  const category = searchParams.get('category') || ''

  // 수정 버튼이 굳이 필요한가?
  // const handleEdit = () => {
  //   navigate(`/ProductRegisterPage?`)
  // }

  //삭제 눌렀을 때 어디로 돌아갈 지 정하기
  const handleDelete = () => {}

  return (
    <PageContainer>
      <FormContainer>
        <FileInputContainer>
          <PreviewImage src={productImage} alt="Product" />
        </FileInputContainer>
        <span>{dealLocation}</span>

        <Separator />

        <LabelContainer>
          <Title>{productName}</Title>
          <span>{category}</span>
        </LabelContainer>

        <PriceContainer>
          <Label>{price}</Label>
        </PriceContainer>

        <DesContainer>
          <Label>{description}</Label>
        </DesContainer>

        <ButtonContainer>
          {/* <Button onClick={handleEdit}>수정</Button> */}
          <Button onClick={handleDelete}>삭제</Button>
        </ButtonContainer>
      </FormContainer>
    </PageContainer>
  )
}

const PageContainer = styled.div`
  width: 70%;
  margin: 5% auto;
  padding: 30px;
  border: 1px solid #ebebeb;
  border-radius: 10px;
`

const Title = styled.h1`
  font-size: 24px;
  font-style: bold;
  margin-bottom: 10px;
`

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

const Label = styled.label`
  font-size: 16px;
`

const PriceContainer = styled.div`
  display: flex;
`

const FileInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`

const DesContainer = styled.div`
  display: flex;
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: end;
`

const PreviewImage = styled.img`
  width: 80%;
  height: auto;
  cursor: pointer;
  margin: auto;
  display: block;
  border-radius: 10px;
  border: 1px solid #bebebe;
  margin-bottom: 16px;
`

const Button = styled.button`
  padding: 10px;
  margin-top: 10px;
  width: 100px;
  background-color: #def3ff;
  border-radius: 10px;
  border: none;
  cursor: pointer;

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

export default MyPostPage
