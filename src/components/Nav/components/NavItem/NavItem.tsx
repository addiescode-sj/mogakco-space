import modalAtom from '@atoms/Modals'
import projectAtom from '@atoms/Projects'
import skillsAtom from '@atoms/Skills'
import Share from '@icons/Share'
import React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import * as S from '../../Nav.style'

function NavList() {
  const projectList = useRecoilValue(projectAtom)
  const skills = useRecoilValue(skillsAtom)

  const setDimdModal = useSetRecoilState(modalAtom)

  const copyURLtoClipboard = async () => {
    await navigator.clipboard.writeText(window.location.href)
    setDimdModal((prev) => ({ ...prev, dimd: true }))
  }

  return (
    <S.NavList>
      <S.NavItem>
        <span>Skills</span>
        <S.Badge role="button">{skills.length}</S.Badge>
      </S.NavItem>
      <S.NavItem>
        <span>Projects</span>
        <S.Badge role="button">{projectList.length}</S.Badge>
      </S.NavItem>
      <Share onClick={copyURLtoClipboard} />
    </S.NavList>
  )
}

export default NavList
