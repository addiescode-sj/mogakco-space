import { onSmall } from '@styles/mediaQuery'
import { zIndexStyle } from '@styles/zIndexStyle'
import styled from 'styled-components'

export const GithubContainer = styled.div`
  margin-top: 11rem;
  width: 100%;
  height: 100%;

  ${onSmall} {
    margin-top: 4rem;
  }
`

export const GithubTitle = styled.p`
  font-weight: bold;
  font-size: 6rem;
  line-height: 1.2;
  color: #91fccf;
  ${onSmall} {
    font-size: 2rem;
  }
`
export const GithubInfo = styled.div`
  font-size: 2.4rem;
  line-height: 1.6;
  color: #f0f3f5;
  ${onSmall} {
    font-size: 1.6rem;
  }
`
export const GithubBannerBox = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
`
export const GithubIntro = styled.p`
  font-weight: bold;
  word-break: keep-all;
  span {
    display: block;
    font-weight: normal;
  }
`

export const GithubExplore = styled.button`
  align-self: flex-end;
  padding: 0.8rem 1.8rem;
  z-index: ${zIndexStyle.base};
  background: linear-gradient(93.96deg, #4b26ff 0%, #b01eff 100%);
  box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
  border-radius: 30px;
  color: #fff;
  font-size: 2.4rem;
  font-weight: bold;
  cursor: pointer;

  ${onSmall} {
    font-size: 1.6rem;
    position: absolute;
    top: 4rem;
    right: 8rem;
  }
`

export const GithubBackground = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 4rem 8rem;
  width: 100%;
  min-height: 50rem;
  z-index: 0;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
  border-radius: 14px;
  background: linear-gradient(
      93.8deg,
      #161a39 13.2%,
      rgba(22, 26, 57, 0.9) 55.88%,
      rgba(39, 39, 72, 0.35) 97.88%
    ),
    url('/keyboard.png');
  background-position: cover;

  ${onSmall} {
    min-height: 22.3rem;
  }
`
