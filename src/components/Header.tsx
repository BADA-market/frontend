import React, { useState } from 'react'
import styled from 'styled-components'
import Logo from '../assets/images/BADA.png'
import { useNavigate } from 'react-router-dom'

const Header: React.FC = () => {
  const navigate = useNavigate()
  const [searchInput, setSearchInput] = useState('')

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value)
  }

  const handleLogoBtnClick = () => {
    navigate('/')
  }

  const handleLoginBtnClick = () => {
    navigate('/login')
  }

  const handleClearInput = () => {
    setSearchInput('')
  }

  const handleProductRegisterBtnClick = () => {
    navigate('/ProductRegister')
  }

  const handleMypageBtnClick = () => {
    navigate('/mypage')
  }

  return (
    <Container>
      <SubHeader>
        <LoginButton onClick={handleLoginBtnClick}>로그인/회원가입</LoginButton>
      </SubHeader>
      <MainHeader>
        <LogoBtn onClick={handleLogoBtnClick}>
          <Img src={Logo} alt="Logo" />
        </LogoBtn>
        <InputWrap>
          <Input
            type="text"
            placeholder="원하는 물품이나 동네를 검색하세요."
            value={searchInput}
            onChange={handleChangeInput}
          />
          <ClearIcon onClick={handleClearInput}>x</ClearIcon>
        </InputWrap>
        <ButtonWrap>
          <Button onClick={handleProductRegisterBtnClick}>판매하기</Button>
          <Button onClick={handleMypageBtnClick}>마이페이지</Button>
          <Button>대화하기</Button>
        </ButtonWrap>
      </MainHeader>
    </Container>
  )
}

// 스타일드 컴포넌트를 이용하여 헤더 스타일 정의
const Container = styled.header`
  background-color: #fff;
  padding: 10px;
  display: flex;
  flex-direction: column;
`

const SubHeader = styled.div`
  margin-right: 5%;
  align-self: flex-end;
`

const MainHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 50px;
  gap: 20px;
`

const Img = styled.img`
  height: 40px; /* 높이를 적절하게 조절해주세요 */
`

const Input = styled.input`
  font-size: 18px;
  width: 450px;
  flex-shrink: 0;
  border: none;
  border-radius: 30px;
  background: transparent;
  padding: 0 30px;
  outline: none;
`

const ClearIcon = styled.span`
  font-size: 18px;
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
`

const InputWrap = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin: 0 10px;
  width: 640px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #f3f3f3;
`

const ButtonWrap = styled.div`
  display: flex;
  gap: 20px;
`

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 30px;
  border: none;
  background: #def3ff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  cursor: pointer;
`

const LogoBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  flex-shrink: 0;
  border: none;
  padding: 0;
  background-color: #ffffff;
  cursor: pointer;
`

const LoginButton = styled.button`
  font-size: 15px;
  color: #000000;
  margin-top: 8px;
  margin-bottom: 8px;
  background: none;
  border: none;
  cursor: pointer;
`

export default Header
