import React, { useEffect, useState } from 'react'
import Lottie from 'react-lottie'
import Checkmark from '@lotties/confirmed.json'
import styled from 'styled-components'
import { zIndexStyle } from '@styles/zIndexStyle'
import { COLORS } from '@styles/palette'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import modalAtom from '@atoms/Modals'
import { onSmall } from '@styles/mediaQuery'
import { useScreenContext } from '@hooks/useScreenContext'

interface Props {
  alertText: string
  autoClose?: boolean
  onClose?: () => void
}

const ConfirmModal = ({ alertText, autoClose = true, onClose }: Props) => {
  const { isSmall } = useScreenContext()

  const setDimdModal = useSetRecoilState(modalAtom)
  const { dimd } = useRecoilValue(modalAtom)

  const defaultOptions = {
    loop: false,
    autoPlay: true,
    animationData: Checkmark,
  }

  useEffect(() => {
    if (!autoClose) return

    const closeModal = window.setTimeout(() => {
      onClose?.()
      setDimdModal((prev) => ({ ...prev, dimd: false }))
    }, 3000)

    return () => window.clearTimeout(closeModal)
  }, [dimd])

  if (dimd)
    return (
      <ConfirmModalContainer>
        <Lottie
          options={defaultOptions}
          height={isSmall ? 75 : 260}
          width={isSmall ? 75 : 260}
          style={{ margin: '2rem auto' }}
        ></Lottie>
        <AlertMessage>{alertText}</AlertMessage>
      </ConfirmModalContainer>
    )
  return null
}

export const ConfirmModalContainer = styled.div`
  position: absolute;
  top: 37.6rem;
  left: calc((100% - 68.5rem) / 2);
  min-width: 68.5rem;
  min-height: 401px;
  z-index: ${zIndexStyle.floating + 1};
  background: #ffffff;
  box-shadow: 0px 10px 29px rgba(198, 208, 235, 0.5);
  border-radius: 20px;
  text-align: center;

  ${onSmall} {
    top: 10rem;
    left: calc((100% - 25.6rem) / 2);
    min-width: 25.6rem;
    min-height: 16.6rem;
  }
`

export const AlertMessage = styled.p`
  margin-top: 2rem;
  font-size: 3.5rem;
  font-weight: bold;
  color: ${COLORS.DK_BLUE};

  ${onSmall} {
    font-size: 1.4rem;
  }
`

export default ConfirmModal
