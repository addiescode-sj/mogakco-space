import router from 'next/router'
import React from 'react'
import * as S from './Github.style'
import Link from 'next/link'

interface Props {
  githubLink: string
}

function Github({ githubLink }: Props) {
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
            <Link href={githubLink} passHref>
              <a target="_blank">
                <S.GithubExplore>Explore</S.GithubExplore>
              </a>
            </Link>
          </S.GithubBannerBox>
        </S.GithubInfo>
      </S.GithubBackground>
    </S.GithubContainer>
  )
}

export default Github
