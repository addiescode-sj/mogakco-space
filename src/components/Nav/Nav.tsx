import modalAtom from '@atoms/Modals'
import projectAtom from '@atoms/Projects'
import skillsAtom from '@atoms/Skills'
import ConfirmModal from '@components/Modals/Confirm'
import { useScreenContext } from '@hooks/useScreenContext'
import Logo from '@icons/Logo'
import Share from '@icons/Share'
import { useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import NavItem from './components/NavItem'
import * as S from './Nav.style'

function Nav() {
  const { isSmall } = useScreenContext()

  if (isSmall)
    return (
      <S.NavContainer>
        <S.NavWrapper>
          <Logo />
        </S.NavWrapper>
      </S.NavContainer>
    )

  return (
    <S.NavContainer>
      <ConfirmModal alertText="Copied to clipboard!" />
      <S.NavWrapper>
        <Logo />
        <NavItem />
      </S.NavWrapper>
    </S.NavContainer>
  )
}

export default Nav
