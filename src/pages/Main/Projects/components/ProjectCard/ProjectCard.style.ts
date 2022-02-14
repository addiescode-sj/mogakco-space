import { COLORS } from '@styles/palette'
import styled from 'styled-components'

export const ProjectCard = styled.div`
  min-width: 32rem;
  min-height: 40rem;
  display: flex;
  flex-direction: column;
  padding: 4rem;
  background: #fff;
  border: 1px solid #c6d0eb;
  border-radius: 20px;
`

export const ProjectTitle = styled.p`
  margin-top: 1.9rem;
  color: ${COLORS.MGK_BLUE};
  font-weight: bold;
  font-size: 2rem;
`

export const ProjectDate = styled.p`
  margin-top: 0.47rem;
  color: ${COLORS.LT_GRAY};
  font-weight: 600;
  font-size: 12px;
`

export const ProjectDesc = styled.p`
  max-height: 30%;
  margin-top: 2.2rem;
  font-weight: bold;
  font-size: 16px;
  line-height: 1.55;
  color: ${COLORS.DK_BLUE};
  word-break: keep-all;
`

export const Badges = styled.div`
  margin: 5.9rem 0 3rem;
`

export const ProjectDetail = styled.button`
  padding: 0;
  border: 0;
  background: none;
  cursor: pointer;
  align-self: flex-end;
  margin-top: auto;
  font-size: 16px;
  line-height: 1.55;
  text-align: right;
  color: #80a6fb;
`
