import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { item } from '../components/Item'
import axios from 'axios'

function MyPage() {
  const [requestUrl, setRequestUrl] = useState('http://localhost:8080/user/item')
  const [selectedMenuIndex, setSelectedMenuIndex] = useState<number | null>(null)
  const [itemList, setItemList] = useState<item[]>([])
  const selectMenu = ['내 상품', '찜 목록', '내 후기', '거래내역']

  useEffect(() => {
    fetchItemList()
  }, [])

  const fetchItemList = () => {
    axios
      .get<item[]>(requestUrl, {
        headers: { Authorization: localStorage.getItem('accessToken') },
      })
      .then((response) => {
        setItemList(response.data)
      })
      .catch((error) => console.error('Error fetching item list:', error))
  }

  const handleMenuClick = (menuIndex: number) => {
    setSelectedMenuIndex(menuIndex)
    switch (menuIndex) {
      case 0:
        setRequestUrl('http://localhost:8080/user/item')
        break
      case 1:
        setRequestUrl('http://localhost:8080/user/like')
        break
      case 2:
        setRequestUrl('http://localhost:8080/user/review')
        break
      case 3:
        setRequestUrl('http://localhost:8080/user/trade')
        break
    }
    fetchItemList()
  }

  return (
    <div>
      <ProfileWrap>
        <ProfileEditButton>프로필 수정</ProfileEditButton>
        <ProfileImageWrap src="src/assets/images/user.png" alt="Profile" />
        <ProfileInfoWrap>
          <ProfileNicknameWrap>Nickname</ProfileNicknameWrap>
          <ProfileIntroductionWrap>
            <input placeholder="나만의 한 줄 소개를 입력해주세요." />
          </ProfileIntroductionWrap>
          <ProfileLoginIdWrap>아이디: LoginId</ProfileLoginIdWrap>
          <ProfileAddressWrap>주소: Address</ProfileAddressWrap>
        </ProfileInfoWrap>
      </ProfileWrap>
      <MenuContainer>
        {selectMenu.map((menu, index) => (
          <MenuItem
            key={index}
            isSelected={selectedMenuIndex === index}
            onClick={() => handleMenuClick(index)}>
            {menu}
          </MenuItem>
        ))}
      </MenuContainer>

      {selectedMenuIndex !== null && (
        <MenuList>
          <p>${itemList[0].title}</p>
        </MenuList>
      )}
    </div>
  )
}

export default MyPage

const ProfileWrap = styled.div`
  width: 500px;
  height: 500px;
  border: 1px solid #ddd;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-top: 100px;
  position: relative;
`

const ProfileEditButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 8px 12px;
  display: flex;
  border: solid 1px #dbdbdb;
  border-radius: 10px;
  color: #898585;
  background-color: #ffffff;
  font-family: Kite One;
  font-size: 15px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const ProfileImageWrap = styled.img`
  width: 40%;
  height: 40%;
  margin-bottom: 15px;
`

const ProfileInfoWrap = styled.div`
  text-align: center;
`

const ProfileNicknameWrap = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
`

const ProfileIntroductionWrap = styled.div`
  display: flex;
  width: 340px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #f5f5f5;
  align-items: center;

  input {
    width: 100%;
    height: 100%;
    font-family: Kite One;
    font-size: 15px;
    font-style: normal;
    border: none;
    outline: none;
    padding: 0 15px;
    background: transparent;
    text-align: center;

    &::placeholder {
      color: #b9b9b9;
      font-family: Kite One;
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
    }
  }
  margin-top: 5px;
  margin-bottom: 15px;
`

const ProfileLoginIdWrap = styled.div`
  margin-top: 5px;
  margin-bottom: 15px;
`

const ProfileAddressWrap = styled.div`
  margin-bottom: 15px;
`

const MenuContainer = styled.div`
  width: 800px;
  display: flex;
  justify-content: center; /* 수평 가운데 정렬을 위한 스타일 추가 */
  margin: 20px auto; /* 수평 가운데 정렬을 위한 스타일 추가 */
  text-align: center;
`

const MenuItem = styled.div<{ isSelected: boolean }>`
  height: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: 1px solid #ebebeb;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? '#ffffff' : '#f5f5f5')};

  &:first-child {
    border-top-left-radius: 10px;
  }

  &:last-child {
    border-top-right-radius: 10px;
  }
`

const MenuList = styled.div`
  height: 400px;
  width: 800px;
  margin: auto;
`
