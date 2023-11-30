import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/images/BADA.png'

const Header: React.FC = () => {
  return (
    <Container>
      <SubHeader>
        <P>로그인/회원가입</P>
      </SubHeader>
      <MainHeader>
        <Img src={Logo} alt="Logo" />
        <InputWrap>
          <Input type="text" placeholder="원하는 물품이나 동네를 검색하세요." />
        </InputWrap>
        <ButtonWrap>
          <Button1>판매하기</Button1>
          <Button2>마이페이지</Button2>
          <Button3>대화하기</Button3>
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

const InputWrap = styled.div`
  display: flex;
  align-item: center;
  flex: 1;
  margin: 0 10px;
  width: 500px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #f3f3f3;
`

const Input = styled.input`
  font-size: 18px;
  width: 450px;
  flex-shrink: 0;
  border: none;
  border-radius: 30px;
  background: transparent;
  padding: 0 20px;
  outline: none;
`

const ButtonWrap = styled.div`
  display: flex;
  gap: 20px;
`

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #def3ff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

const Button1 = styled(Button)``
const Button2 = styled(Button)``
const Button3 = styled(Button)``

const P = styled.p`
  display: flex;
  align-left: auto;
`

export default Header
