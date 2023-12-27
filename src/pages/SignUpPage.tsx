import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Logo from '../assets/images/BADA.png'
// interface SignUpProps {}

function SignUpPage() {
  return (
    <div>
      <GlobalStyle />
      <Img src={Logo} alt="Logo" />
      <Container>
        <ModalWrap>
          <Title>회원가입</Title>
          <ContentWrap>
            <TextWrap>닉네임</TextWrap>
            <InputWrap>
              <input placeholder="닉네임을 입력하세요"></input>
              <button>중복확인</button>
            </InputWrap>
          </ContentWrap>
          <ContentWrap>
            <TextWrap>아이디</TextWrap>
            <InputWrap>
              <input placeholder="아이디를 입력하세요"></input>
            </InputWrap>
          </ContentWrap>
          <ContentWrap>
            <TextWrap>이메일</TextWrap>
            <InputWrap>
              <input placeholder="이메일을 입력하세요"></input>
            </InputWrap>
          </ContentWrap>
          <ContentWrap>
            <TextWrap>비밀번호</TextWrap>
            <InputWrap>
              <input placeholder="비밀번호를 입력하세요"></input>
            </InputWrap>
          </ContentWrap>
          <ContentWrap>
            <TextWrap>비밀번호 확인</TextWrap>
            <InputWrap>
              <input placeholder="비밀번호를 다시 한번 확인하세요"></input>
            </InputWrap>
          </ContentWrap>
          <AddressWrap>
            <TextWrap>주소</TextWrap>
            <Div>
              <InputAddressWrap>
                <input placeholder="주소를 입력하세요"></input>
              </InputAddressWrap>
              <BtnWrap>우편번호 검색</BtnWrap>
            </Div>
            <InputDetailAddressWrap>
              <input placeholder="상세주소를 입력하세요"></input>
            </InputDetailAddressWrap>
          </AddressWrap>
          <SignUpBtn>회원가입 하기</SignUpBtn>
          <LoginWrap>
            <p style={{ fontSize: '20px', color: '#B9B9B9', margin: '0 20px 0 20px' }}>
              이미 회원이신가요?
            </p>
            <p
              style={{
                fontWeight: 'bold',
                fontSize: '22px',
                color: '#005E92',
                margin: '0 20px 0 20px',
              }}>
              로그인 하기
            </p>
          </LoginWrap>
        </ModalWrap>
      </Container>
    </div>
  )
}

export default SignUpPage

// 전체 배경을 스타일링하는 GlobalStyle 컴포넌트
const GlobalStyle = createGlobalStyle`
  body {
    background-color: #DEF3FF;  // 원하는 배경 색상으로 변경
    margin: 0;  // 기본 margin 제거
    padding: 0;  // 기본 padding 제거
    font-family: 'Your Preferred Font', sans-serif;  // 필요에 따라 폰트도 설정
  }
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1920px;
  height: 100vh; // 높이를 화면 전체로 설정
  margin: 0 auto;
`

const ModalWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 776px;
  height: 920px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`

const Img = styled.img`
  height: 40px; /* 높이를 적절하게 조절해주세요 */
  margin-left: 50px;
  margin-top: 50px;
  margin-bottom: -50px;
`

const Title = styled.div`
  display: flex;
  flex-direction: column;
  color: #000;
  font-family: Kite One;
  font-size: 40px;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  margin-bottom: 20px;
  margin-top: 30px;
`

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  margin-left: 15px;
`
const InputWrap = styled.div`
  display: flex;
  width: 505px;
  height: 54px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #f5f5f5;
  align-items: center;

  input {
    width: 100%;
    height: 100%;
    font-family: Kite One;
    font-size: 20px;
    font-style: normal;
    border: none;
    outline: none;
    padding: 0 15px; // 더 나은 모양을 위해 패딩 추가
    background: transparent; // input 자체의 배경도 투명으로 설정

    &::placeholder {
      color: #b9b9b9;
      font-family: Kite One;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
    }
  }

  button {
    width: 87px;
    height: 34px;
    flex-shrink: 0;
    background: #007bc0;
    border: 1px solid #007bc0;
    border-radius: 30px;
    font-family: Kite One;
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: bold;
    margin-right: 20px;
  }
`

const AddressWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`

const Div = styled.div`
  display: flex;
  flex-direction: row;
  width: 505px;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`

const InputAddressWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 221px;
  height: 54px;
  border-radius: 30px;
  background: #f5f5f5;

  input {
    width: 100%;
    height: 100%;
    font-family: Kite One;
    font-size: 20px;
    font-style: normal;
    border: none;
    outline: none;
    padding: 0 15px; // 더 나은 모양을 위해 패딩 추가
    background: transparent; // input 자체의 배경도 투명으로 설정

    &::placeholder {
      color: #b9b9b9;
      font-family: Kite One;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
    }
  }
`

const BtnWrap = styled.div`
  display: flex;
  width: 150px;
  height: 43px;
  border: solid 1px #b9b9b9;
  border-radius: 30px;
  color: #898585;
  font-family: Kite One;
  font-size: 18px;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`

const InputDetailAddressWrap = styled.div`
  display: flex;
  width: 505px;
  height: 54px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #f5f5f5;
  align-items: center;

  input {
    width: 100%;
    height: 100%;
    font-family: Kite One;
    font-size: 20px;
    font-style: normal;
    border: none;
    outline: none;
    padding: 0 15px; // 더 나은 모양을 위해 패딩 추가
    background: transparent; // input 자체의 배경도 투명으로 설정

    &::placeholder {
      color: #b9b9b9;
      font-family: Kite One;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
    }
  }
`

const SignUpBtn = styled.div`
  display: flex;
  flex-direction: column;
  width: 505px;
  height: 54px;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  background: #5dc5ff;
  margin: 20px;
`
const LoginWrap = styled.div`
  display: flex;
  flex-direction: row;
`
