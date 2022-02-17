import { onSmall } from '@styles/mediaQuery'
import { COLORS } from '@styles/palette'
import { flexCenter } from '@styles/styleUtils'
import styled from 'styled-components'
import { Swiper } from 'swiper/react'

export const SkillsContainer = styled(Swiper)`
  flex: 1 1 30%;
  border: 1px solid #c6d0eb;
  box-shadow: 0px 10px 29px rgba(198, 208, 235, 0.5);
  border-radius: 20px;

  ${onSmall} {
    width: 100%;
  }
`

export const Skills = styled.div`
  position: relative;
  padding: 4.2rem 4rem;
  display: flex;
  flex-direction: column;

  ${onSmall} {
    padding: 3.6rem 2.5rem 3.9rem;
  }
`

export const SkillsTitle = styled.p`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const TitleText = styled.span`
  color: ${COLORS.DK_BLUE};
  font-size: 3.6rem;
  font-weight: 700;
  ${onSmall} {
    font-size: 2.2rem;
  }
`

export const SkillsStage = styled.span`
  align-self: flex-end;
  margin: auto 0 0.7rem 0.7rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: ${COLORS.LT_GRAY};
`

export const SkillsStatus = styled.p`
  margin-top: 1.7rem;
  text-transform: uppercase;
  color: ${COLORS.LT_GRAY};
  font-weight: 700;
  font-size: 1.8rem;

  ${onSmall} {
    font-size: 1.4rem;
  }
`

export const SkillsLogo = styled.div`
  position: relative;
  margin-top: 15.6rem;
  margin-left: auto;
  width: 12rem;
  height: 12rem;

  ${onSmall} {
    margin-top: 0;
    position: absolute;
    top: 3.6rem;
    right: 2.5rem;
    width: 8.6rem;
    height: 8.6rem;
  }
`

export const SkillsTab = styled.div`
  width: 100%;
  margin-top: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`

export const SkillsName = styled.span`
  color: ${COLORS.DK_BLUE};
  font-size: 3.4rem;
  font-weight: 700;
  ${onSmall} {
    font-size: 2.2rem;
  }
`

export const ShowNext = styled.button`
  margin-left: auto;
  width: 3.2rem;
  height: 3.2rem;
  background: #fff;
  border: 1px solid #c6d0eb;
  border-radius: 50%;
  ${flexCenter};
`
