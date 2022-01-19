import { COLORS } from '@styles/palette'
import styled from 'styled-components'

export const Projects = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1000px;
  color: #333;
  gap: 8.4rem;

  h2 {
    font-weight: bold;
    color: ${COLORS.MGK_BLUE};
  }
`

export const ProjectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  &:first-child {
    margin-top: 8.4rem;
  }

  &:last-child {
    margin-bottom: 9.6rem;
  }
`

export const TitleSection = styled.div`
  flex-basis: 30rem;
`

export const Name = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  line-height: 1.4;
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
`

export const Descriptions = styled.div`
  font-size: 2rem;
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
  list-style: inside;
`
