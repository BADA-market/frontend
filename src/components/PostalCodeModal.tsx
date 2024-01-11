import React from 'react'
import styled from 'styled-components'
import DaumPostcode from 'react-daum-postcode'

interface PostalCodeModalProps {
  isOpen: boolean
  onClose: () => void
  onComplete: (data: { address: string }) => void
}

const PostalCodeModal: React.FC<PostalCodeModalProps> = ({ isOpen, onClose, onComplete }) => {
  return (
    <>
      {isOpen && (
        <ModalOverlay onClick={onClose}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <DaumPostcode onComplete={onComplete} onClose={onClose} />
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  )
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

const ModalContent = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 20px;
`

export default PostalCodeModal
