import { onSmall } from '@styles/mediaQuery'
import { COLORS } from '@styles/palette'
import styled from 'styled-components'

export const ProjectsContainer = styled.section`
  width: 100%;
  max-width: 1000px;
  color: #333;
  margin-top: 12.2rem;

  ${onSmall} {
    margin-top: 6.5rem;
  }
`

export const Projects = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8.4rem;

  h2 {
    font-weight: bold;
    color: ${COLORS.MGK_BLUE};
  }

  ${onSmall} {
    gap: 5.3rem;
  }
`

export const ProjectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  &:first-child {
    margin-top: 8.4rem;
    ${onSmall} {
      margin-top: 1.8rem;
    }
  }

  &:last-child {
    margin-bottom: 9.6rem;
  }

  ${onSmall} {
    flex-direction: column;
    justify-content: center;
  }
`

export const TitleSection = styled.div`
  flex-basis: 30rem;
  ${onSmall} {
    flex-basis: 0;
    margin-bottom: 4.2rem;
  }
`

export const Name = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  line-height: 1.4;
  ${onSmall} {
    font-size: 2.4rem;
  }
`

export const DateAndSpec = styled.p`
  font-size: 2rem;
  font-weight: normal;
  color: #205284;

  span {
    &:first-child {
      font-weight: bold;
      margin-bottom: 3.1rem;
    }
  }

  &:last-child {
    margin-top: 3.1rem;
  }
`

export const Text = styled.span`
  display: block;
  font-size: 2rem;
  ${onSmall} {
    font-size: 1.6rem;
  }
`

export const Descriptions = styled.div`
  font-size: 2rem;
  ${onSmall} {
    font-size: 1.6rem;
  }
`

export const ContentsWrapper = styled.div`
  margin-bottom: 4.5rem;

  &:first-child {
    font-weight: bold;
  }

  &:last-child {
    margin-bottom: 0;
  }
`

export const DescTitles = styled.h2`
  margin-bottom: 3.4rem;
`

export const Content = styled.ul`
  word-break: keep-all;
  list-style: initial;
  margin-left: 3rem;
`
