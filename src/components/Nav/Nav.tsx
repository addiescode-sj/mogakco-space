import projectAtom from '@atoms/Projects'
import skillsAtom from '@atoms/Skills'
import { useScreenContext } from '@hooks/useScreenContext'
import Logo from '@icons/Logo'
import Share from '@icons/Share'
import { useRecoilValue } from 'recoil'
import * as S from './Nav.style'

function Nav() {
  const { isSmall } = useScreenContext()

  const projectList = useRecoilValue(projectAtom)
  const skills = useRecoilValue(skillsAtom)

  const copyURLtoClipboard = async () => {
    await navigator.clipboard.writeText(window.location.href)

    // TODO: add alert UI
    alert('copied!')
  }

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
            <S.Badge>{skills.length}</S.Badge>
          </S.NavItem>
          <S.NavItem>
            <span>Projects</span>
            <S.Badge>{projectList.length}</S.Badge>
          </S.NavItem>
          <Share onClick={copyURLtoClipboard} />
        </S.NavList>
      </S.NavWrapper>
    </S.NavContainer>
  )
}

export default Nav