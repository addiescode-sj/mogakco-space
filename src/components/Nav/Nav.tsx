import ConfirmModal from '@components/Modals/Confirm'
import { useScreenContext } from '@hooks/useScreenContext'
import Logo from '@icons/Logo'
import NavItem from './components/NavItem'
import * as S from './Nav.style'

function Nav() {
  const { isSmall } = useScreenContext()

  if (isSmall)
    return (
      <>
        <ConfirmModal alertText="Copied to clipboard!" />
        <S.NavContainer>
          <S.NavWrapper>
            <Logo />
          </S.NavWrapper>
        </S.NavContainer>
      </>
    )

  return (
    <>
      <ConfirmModal alertText="Copied to clipboard!" />
      <S.NavContainer>
        <S.NavWrapper>
          <Logo />
          <NavItem />
        </S.NavWrapper>
      </S.NavContainer>
    </>
  )
}

export default Nav
