import React from 'react'
import * as S from './Github.style'

function Github() {
  return (
    <S.GithubContainer>
      <S.GithubBackground>
        <S.GithubTitle>Github.</S.GithubTitle>
        <S.GithubInfo>
          <S.GithubBannerBox>
            <S.GithubIntro>
              addiescode-sj
              <span>Front-end Developer, UX engineer</span>
            </S.GithubIntro>
            <S.GithubExplore>Explore</S.GithubExplore>
          </S.GithubBannerBox>
        </S.GithubInfo>
      </S.GithubBackground>
    </S.GithubContainer>
  )
}

export default Github
