import React from 'react'
import * as S from '../Projects.style'

function Project() {
  return (
    <S.ProjectWrapper>
      <S.TitleSection>
        <S.Name>Circling (써클링)</S.Name>
        <S.DateAndSpec>
          <S.Text>2021.3 ~</S.Text>
          <S.Text>비대면 모임 플랫폼 개발</S.Text>
          <S.Text>참여인원 프론트엔드 2명, 백엔드 2명</S.Text>
        </S.DateAndSpec>
      </S.TitleSection>
      <S.Descriptions>
        <S.ContentsWrapper>
          <S.DescTitles>사용 기술</S.DescTitles>
          <S.Text>React.js, Typescript</S.Text>
          <S.Text>Redux-toolkit, Storybook.js</S.Text>
        </S.ContentsWrapper>
        <S.ContentsWrapper>
          <S.DescTitles>주요 구현 내용</S.DescTitles>
          <S.Content>
            <li>{'UI 컴포넌트 문서화 & 디자인 시스템 구축 및 개발'}</li>
            <li>메인, 탐색, 써클 관련 페이지 기능 구현</li>
            <li>Infinite Scroll & Pagination</li>
          </S.Content>
        </S.ContentsWrapper>
      </S.Descriptions>
    </S.ProjectWrapper>
  )
}

export default Project
