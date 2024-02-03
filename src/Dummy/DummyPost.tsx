export interface Post {
  id: number
  productName: string
  productImage: string | null
  price: string
  description: string
  category: string
  dealLocation: string
}

export const dummyPosts: Post[] = [
  {
    id: 1,
    productName: '아이폰 18 PRO',
    productImage: 'src/assets/images/iphone.jpeg',
    price: '2,000,000 원',
    description: '아이폰 18프로 싸게 내놉니다.',
    category: '디지털기기',
    dealLocation: '경기도 화성시 청계동',
  },
  {
    id: 2,
    productName: '조말론 블랙베리 앤 베이 코롱(100ml)',
    productImage: 'src/assets/images/jomalone.png',
    price: '70,000 원',
    description: '향기가 너무너무너무 좋아용 히히',
    category: '기타',
    dealLocation: '경기도 시흥시 정왕동',
  },
]
