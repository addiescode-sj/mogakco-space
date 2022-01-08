import { useScreenContext } from '@hooks/useScreentContext'
import ListIcon from '@icons/List'
import NavListItem from './components/NavListItem'
import * as S from './Nav.style'

function Nav() {
  const { isSmall } = useScreenContext()

  if (isSmall)
    return (
      <S.NavContainer>
        <ListIcon color="white" />
      </S.NavContainer>
    )

  return (
    <S.NavContainer>
      <S.NavList>
        <NavListItem />
      </S.NavList>
    </S.NavContainer>
  )
}

export default Nav
