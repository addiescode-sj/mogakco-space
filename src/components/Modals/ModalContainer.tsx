import modalAtom from '@atoms/Modals'
import { zIndexStyle } from '@styles/zIndexStyle'
import React from 'react'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'

function ModalContainer() {
  const { dimd } = useRecoilValue(modalAtom)

  if (dimd) return <Modal dimd={dimd} />
  return null
}

const Modal = styled.div<{ dimd: boolean }>`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${zIndexStyle.base};
  background: ${({ dimd }) => (dimd ? 'rgba(40, 40, 40, 0.65)' : 'none')};
`

export default ModalContainer
