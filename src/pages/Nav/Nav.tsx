import { useScreenContext } from '@hooks/useScreentContext'
import Logo from '@icons/Logo'
import Share from '@icons/Share'
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
      <S.NavWrapper>
        <Logo />
        <S.NavList>
          <S.NavItem>
            <span>Skills</span>
            <S.Badge>3</S.Badge>
          </S.NavItem>
          <S.NavItem>
            <span>Projects</span>
            <S.Badge>3</S.Badge>
          </S.NavItem>
          <Share />
        </S.NavList>
      </S.NavWrapper>
    </S.NavContainer>
  )
}

export default Nav
