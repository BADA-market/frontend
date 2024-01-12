import React, { ChangeEvent, useCallback, useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Logo from '../assets/images/BADA.png'
import PostalCodeModal from '../components/PostalCodeModal'
import { useNavigate } from 'react-router-dom'
// interface SignUpProps {}

function SignUpPage() {
  const navigate = useNavigate()

  const [nickname, setNickname] = useState('')
  const [loginId, setLoginId] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPwd, setConfirmPwd] = useState('')
  const [address, setAddress] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const [emailMsg, setEmailMsg] = useState('')
  const [pwdMsg, setPwdMsg] = useState('')
  const [confirmPwdMsg, setConfirmPwdMsg] = useState('')
  const [nicknameMsg, setNicknameMsg] = useState('')

  const validateEmail = (email: string) => {
    return email
      .toLowerCase()
      .match(
        /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
      )
  }

  const validatePwd = (password: string) => {
    return password.toLowerCase().match(/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{10,25}$/)
  }

  const validateNickname = (nickname: string) => {
    return nickname.toLowerCase().match(/^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|].{1,8}$/)
  }

  const [isloginIdValid, setIsLoginIdValid] = useState(false)
  const isEmailValid = validateEmail(email)
  const isPwdValid = validatePwd(password)
  const isConfirmPwd = password === confirmPwd
  const isNicknameValid = validateNickname(nickname)
  const [isAddressValid, setIsAddressValid] = useState(false)
  // && checkLoginId && checkNickname; 은 추후에 추가
  const isAllValid =
    isloginIdValid &&
    isEmailValid &&
    isPwdValid &&
    isConfirmPwd &&
    isNicknameValid &&
    isAddressValid

  // 이메일
  const onChangeEmail = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      const currEmail = e.target.value
      setEmail(currEmail)

      if (!validateEmail(currEmail)) {
        setEmailMsg('이메일 형식이 올바르지 않습니다.')
      } else {
        setEmailMsg('')
      }
    },
    [validateEmail],
  )

  // 비밀번호
  const onChangePwd = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const currPwd = e.target.value
      setPassword(currPwd)

      if (!validatePwd(currPwd)) {
        setPwdMsg('영문, 숫자, 특수기호 조합으로 10자리 이상 입력해주세요.')
      } else {
        setPwdMsg('')
      }
    },
    [validatePwd],
  )

  // 비밀번호 확인
  const onChangeConfirmPwd = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const currConfirmPwd = e.target.value
      setConfirmPwd(currConfirmPwd)

      if (currConfirmPwd !== password) {
        setConfirmPwdMsg('비밀번호가 일치하지 않습니다.')
      } else {
        setConfirmPwdMsg('비밀번호가 일치합니다.')
      }
    },
    [password],
  )

  // 닉네임
  const onChangeNickname = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const currNickname = e.target.value
      setNickname(currNickname)

      if (!validateNickname(currNickname)) {
        setNicknameMsg('1글자 이상 9글자 미만으로 입력해주세요.')
      } else {
        setNicknameMsg('')
      }
    },
    [validateNickname],
  )

  const handleLoginIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updateNickname = event.target.value
    setLoginId(updateNickname)
  }

  const completeHandler = (data: { address: string }) => {
    setAddress(data.address)
    setIsAddressValid(true)
  }

  const toggleHandler = () => {
    setIsOpen((prevOpenState) => !prevOpenState)
  }

  const onSubmit = () => {
    navigate(`/login`)
  }

  const onClickLoginButton = () => {
    navigate(`/login`)
  }

  // 추후 백엔드 연동할때 url 수정
  const onClickDuplicateCheckButton = () => {
    fetch('http://localhost:8080/users/check', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        loginId: loginId,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          setIsLoginIdValid(true)
          alert('사용가능한 아이디입니다.')
        } else {
          alert('중복된 아이디입니다.')
        }
      })
      .catch((error) => console.error('Error:', error))
  }

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
              <input
                placeholder="닉네임을 입력하세요"
                value={nickname}
                onChange={onChangeNickname}></input>
            </InputWrap>
            <CheckTextWrap className={isNicknameValid ? 'success' : 'error'}>
              {nicknameMsg}
            </CheckTextWrap>
          </ContentWrap>
          <ContentWrap>
            <TextWrap>아이디</TextWrap>
            <InputWrap>
              <input
                placeholder="아이디를 입력하세요"
                value={loginId}
                onChange={handleLoginIdChange}></input>
              <button onClick={onClickDuplicateCheckButton}>중복확인</button>
            </InputWrap>
          </ContentWrap>
          <ContentWrap>
            <TextWrap>이메일</TextWrap>
            <InputWrap>
              <input
                placeholder="이메일을 입력하세요"
                value={email}
                onChange={onChangeEmail}></input>
            </InputWrap>
            <CheckTextWrap className={isEmailValid ? 'success' : 'error'}>{emailMsg}</CheckTextWrap>
          </ContentWrap>
          <ContentWrap>
            <TextWrap>비밀번호</TextWrap>
            <InputWrap>
              <input
                type="password"
                placeholder="비밀번호를 입력하세요"
                value={password}
                onChange={onChangePwd}></input>
            </InputWrap>
            <CheckTextWrap className={isPwdValid ? 'success' : 'error'}>{pwdMsg}</CheckTextWrap>
          </ContentWrap>
          <ContentWrap>
            <TextWrap>비밀번호 확인</TextWrap>
            <InputWrap>
              <input
                type="password"
                placeholder="비밀번호를 다시 한번 확인하세요"
                value={confirmPwd}
                onChange={onChangeConfirmPwd}></input>
            </InputWrap>
            <CheckTextWrap className={isConfirmPwd ? 'success' : 'error'}>
              {confirmPwdMsg}
            </CheckTextWrap>
          </ContentWrap>
          <AddressWrap>
            <TextWrap>주소</TextWrap>
            <Div>
              <InputAddressWrap>
                <input placeholder="주소를 입력하세요" value={address}></input>
              </InputAddressWrap>
              <BtnWrap onClick={toggleHandler}>우편번호 검색</BtnWrap>
            </Div>
            <PostalCodeModal isOpen={isOpen} onClose={toggleHandler} onComplete={completeHandler} />
          </AddressWrap>
          <SignUpBtn onClick={onSubmit} type="submit" disabled={!isAllValid}>
            회원가입 하기
          </SignUpBtn>
          <LoginWrap>
            <p style={{ fontSize: '20px', color: '#B9B9B9', margin: '0 20px 0 20px' }}>
              이미 회원이신가요?
            </p>
            <LoginButton onClick={onClickLoginButton}>로그인 하기</LoginButton>
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
    cursor: pointer;
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
  width: 420px;
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

const BtnWrap = styled.button`
  display: flex;
  width: 150px;
  height: 43px;
  border: solid 1px #dbdbdb;
  border-radius: 30px;
  color: #898585;
  background-color: #ffffff;
  font-family: Kite One;
  font-size: 18px;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  cursor: pointer;
`

const SignUpBtn = styled.button`
  display: flex;
  flex-direction: column;
  width: 505px;
  height: 54px;
  color: #fff;
  border: none;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  margin: 20px;
  background: ${({ disabled }) => (disabled ? '#ccc' : '#5dc5ff')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`
const LoginWrap = styled.div`
  display: flex;
  flex-direction: row;
`

const CheckTextWrap = styled.span`
  color: #5dc5ff;
  margin-left: 20px;
  margin-top: 5px;
`

const LoginButton = styled.button`
  font-weight: bold;
  font-size: 22px;
  color: #005e92;
  margin: 0 20px 0 20px;
  background: none;
  border: none;
  cursor: pointer;
`
