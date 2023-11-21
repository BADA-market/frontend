import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/images/BADA.png'

const Header: React.FC = () => {
  return (
    <Container>
      <SubHeader>
        <p>로그인/회원가입</p>
      </SubHeader>
      <MainHeader>
        <Img src={Logo} alt="Logo" />
        <InputWrap>
          <input placeholder="검색어를 입력하세요" />
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
  padding: 10px;
`

const MainHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`

const Img = styled.img`
  height: 40px; /* 높이를 적절하게 조절해주세요 */
`

const InputWrap = styled.div`
  flex: 1;
  margin: 0 10px;
  width: 831px;
  height: 75px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #f3f3f3;
`

const ButtonWrap = styled.div`
  display: flex;
  gap: 10px;
`

const Button1 = styled.div`
  width: 232px;
  height: 58px;
  flex-shrink: 0;
  fill: #def3ff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`
const Button2 = styled.div`
  width: 232px;
  height: 58px;
  flex-shrink: 0;
  fill: #def3ff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`
const Button3 = styled.div`
  width: 232px;
  height: 58px;
  flex-shrink: 0;
  fill: #def3ff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`
export default Header
