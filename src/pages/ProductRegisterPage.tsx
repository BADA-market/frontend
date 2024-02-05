import React, { ChangeEvent, useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import CameraIcon from '../assets/images/camera.png'
import { useNavigate } from 'react-router-dom'

const categories: string[] = [
  '디지털기기',
  '생활가전',
  '가구/인테리어',
  '식품',
  '스포츠/레저',
  '뷰티/미용',
  '의류',
  '반려동물',
  '도서',
  '쥬얼리/액세사리',
  '가방',
  '기타',
]

const dealLocationOptions: string[] = ['내 위치', '최근 지역', '주소 검색', '지역 설정 안함']

const ProductRegisterPage: React.FC = () => {
  const navigate = useNavigate()

  const [productName, setProductName] = useState('')
  const [productImage, setProductImage] = useState<string | null>(null)
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [dealLocation, setDealLocation] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [missingFields, setMissingFields] = useState<string[]>([])

  const productNameRef = useRef<HTMLInputElement>(null)
  const priceRef = useRef<HTMLInputElement>(null)
  const descriptionRef = useRef<HTMLInputElement>(null)
  const dealLocationRef = useRef<HTMLInputElement>(null)

  const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setProductImage(imageUrl)
    }
  }

  // const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
  //   const file = event.target.files?.[0]
  //   if (file) {
  //     const reader = new FileReader()
  //     reader.onloadend = () => {
  //       const base64String = reader.result?.toString() || null
  //       setProductImage(base64String)

  //       // 이 부분에서 이미지를 Base64로 인코딩하여 localStorage에 저장
  //       if (base64String) {
  //         localStorage.setItem('latestPostImage', base64String)
  //       }
  //     }
  //     reader.readAsDataURL(file)
  //   }
  // }

  const handleCategoryButtonClick = (category: string) => {
    setSelectedCategories((prevCategories) => {
      if (prevCategories.includes(category)) {
        return prevCategories.filter((c) => c !== category)
      } else {
        return [...prevCategories, category]
      }
    })
  }

  const handleDealLocationButtonClick = (location: string) => {
    setDealLocation(location)
  }

  const handleCameraIconClick = () => {
    const fileInput = document.getElementById('fileInput')
    fileInput?.click()
  }

  const focusOnFirstMissingField = () => {
    const firstMissingField = getFirstMissingField()
    if (firstMissingField) {
      const refObject: Record<string, React.RefObject<HTMLInputElement>> = {
        productName: productNameRef,
        price: priceRef,
        description: descriptionRef,
        dealLocation: dealLocationRef,
      }
      refObject[firstMissingField]?.current?.focus()
    }
  }

  const handleProductRegistration = () => {
    const missingFieldsArray = getMissingFields()
    setMissingFields(missingFieldsArray)

    if (missingFieldsArray.length > 0) {
      focusOnFirstMissingField()
      console.log('누락된 필드가 있습니다:', missingFieldsArray)
    } else {
      console.log('상품 등록 완료!', productName, productImage, price, description, dealLocation)
      // //localStorage에 저장
      // const newPostData = {
      //   productName,
      //   productImage,
      //   price,
      //   description,
      //   dealLocation,
      // }

      // localStorage.setItem('latestPostData', JSON.stringify(newPostData))

      navigate(
        `/MyPostPage?productName=${productName}&productImage=${productImage}&price=${price}&description=${description}&dealLocation=${dealLocation}`,
      )
    }
  }

  const getFirstMissingField = (): string | undefined => {
    if (!productName) return 'productName'
    if (!price) return 'price'
    if (!description) return 'description'
    if (!dealLocation && dealLocation !== '지역 설정 안함') return 'dealLocation'
    if (selectedCategories.length === 0) return 'category'
    return undefined
  }

  const getMissingFields = (): string[] => {
    const fields: string[] = []

    if (!productImage) fields.push('productImage')
    if (!productName) fields.push('productName')
    if (!price) fields.push('price')
    if (!description) fields.push('description')
    if (!dealLocation && dealLocation !== '지역 설정 안함') fields.push('dealLocation')
    if (selectedCategories.length === 0) fields.push('category')

    return fields
  }

  return (
    <PageContainer>
      <Title>상품 등록</Title>
      <Subtitle>상품을 등록하여 판매해보세요!</Subtitle>
      <FormContainer>
        <LabelContainer>
          <Label>
            상품 이미지
            {missingFields.includes('productImage') && <RequiredIcon>*</RequiredIcon>}
          </Label>
        </LabelContainer>
        <FileInputContainer>
          {productImage ? (
            <PreviewImage src={productImage} alt="Uploaded" />
          ) : (
            <CameraIconImg src={CameraIcon} alt="CameraIcon" onClick={handleCameraIconClick} />
          )}
          <FileInput id="fileInput" type="file" accept="image/*" onChange={handleFileInputChange} />
        </FileInputContainer>

        <Separator />

        <LabelContainer>
          <Label>
            상품명
            {missingFields.includes('productName') && <RequiredIcon>*</RequiredIcon>}
          </Label>
        </LabelContainer>
        <Input
          type="text"
          placeholder="상품명을 입력해 주세요"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          ref={productNameRef}
        />

        <Separator />

        <LabelContainer>
          <Label>
            가격
            {missingFields.includes('price') && <RequiredIcon>*</RequiredIcon>}
          </Label>
        </LabelContainer>
        <Input
          type="text"
          placeholder="가격을 입력해 주세요"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          ref={priceRef}
        />

        <Separator />

        <LabelContainer>
          <Label>
            설명
            {missingFields.includes('description') && <RequiredIcon>*</RequiredIcon>}
          </Label>
        </LabelContainer>
        <Input
          type="text"
          placeholder="설명을 입력해 주세요"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          ref={descriptionRef}
        />

        <Separator />

        <LabelContainer>
          <Label>
            거래지역
            {missingFields.includes('dealLocation') && <RequiredIcon>*</RequiredIcon>}
          </Label>
        </LabelContainer>
        <ButtonGroup>
          {dealLocationOptions.map((option) => (
            <LocationButton
              key={option}
              selected={dealLocation == option}
              onClick={() => handleDealLocationButtonClick(option)}>
              {option}
            </LocationButton>
          ))}
        </ButtonGroup>

        <Input
          type="text"
          placeholder="희망 거래 지역을 입력하세요"
          value={dealLocation}
          onChange={(e) => setDealLocation(e.target.value)}
          ref={dealLocationRef}
        />

        <Separator />

        <LabelContainer>
          <Label>
            카테고리
            {missingFields.includes('category') && <RequiredIcon>*</RequiredIcon>}
          </Label>
        </LabelContainer>
        <CategoryButtonContainer>
          {categories.map((categoryOption) => (
            <CategoryButton
              key={categoryOption}
              selected={selectedCategories.includes(categoryOption)}
              onClick={() => handleCategoryButtonClick(categoryOption)}>
              {categoryOption}
            </CategoryButton>
          ))}
        </CategoryButtonContainer>
      </FormContainer>

      <ButtonContainer>
        <Button onClick={handleProductRegistration}>등록</Button>
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
  font-style: bold;
  margin-bottom: 10px;
`

const Subtitle = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
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

const RequiredIcon = styled.span`
  color: red;
  margin-left: 4px;
`

const Input = styled.input`
  padding: 8px;
  border-radius: 10px;
  border: 1px solid #bebebe;
  margin-bottom: 16px;
  width: 90%;
  display: flex;
  margin-left: 5%;
`

const CategoryButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-botton: 16px;
  justify-content: center;
`

const CategoryButton = styled.button<{ selected: boolean }>`
  padding: 8px;
  width: 120px;
  background-color: ${(props) => (props.selected ? '#def3ff' : 'white')};
  border: 1px solid #bebebe;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: #def3ff;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 10%;
  justify-content: end;
`

const Button = styled.button`
  padding: 10px;
  width: 150px;
  background-color: #def3ff;
  border-radius: 30px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #c7e2f1;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
  justify-content: center;
`

const LocationButton = styled.button<{ selected: boolean }>`
  padding: 8px;
  width: 120px;
  background-color: ${(props) => (props.selected ? '#def3ff' : 'white')};
  border: 1px solid #bebebe;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #def3ff;
  }
`

const FileInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`

const FileInput = styled.input`
  display: none;
`

const CameraIconImg = styled.img`
  width: 40%;
  height: 40%;
  cursor: pointer;
  margin: auto;
  display: block;
`

const PreviewImage = styled.img`
  width: 40%;
  height: 40%;
  cursor: pointer;
  margin: auto;
  display: block;
  border-radius: 10px;
  border: 1px solid #bebebe;
  margin-bottom: 16px;
`

const Separator = styled.div`
  height: 1px;
  width: 100%;
  background-color: #ebebeb;
  margin: 16px 0;
`

export default ProductRegisterPage
