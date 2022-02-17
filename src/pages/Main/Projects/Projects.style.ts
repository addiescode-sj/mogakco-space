import { onSmall } from '@styles/mediaQuery'
import { zIndexStyle } from '@styles/zIndexStyle'
import styled from 'styled-components'
import { Swiper } from 'swiper/react'
import 'swiper/css'

export const ProjectsContainer = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
`

export const Projects = styled(Swiper)<{ isOnLastItem: boolean }>`
  width: 100%;
  height: 100%;
  padding: auto;
  display: flex;

  .swiper-slide {
    flex-basis: calc((100% - 40px) / 3);
  }

  &::after {
    position: absolute;
    content: '';
    right: 0;
    width: 60px;
    height: 100%;
    z-index: ${zIndexStyle.base};
    background: ${({ isOnLastItem }) =>
      isOnLastItem
        ? 'none'
        : 'linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(198, 208, 235, 0.3))'};
  }
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: ${zIndexStyle.base};
  top: 50%;
  width: 5.7rem;
  height: 10.3rem;
  border-radius: 20px;

  ${onSmall} {
    display: none;
  }

  :hover {
    background: #f1f3f5;
  }
`

export const PrevButton = styled(Button)`
  right: calc(100% + 3.3rem);
`

export const NextButton = styled(Button)`
  left: calc(100% + 3.3rem);
  transform: scaleX(-1);
`
