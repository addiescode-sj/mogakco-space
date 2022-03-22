import { onSmall } from '@styles/mediaQuery'
import styled from 'styled-components'

export const IntroduceMeWrap = styled.div`
  color: white;
  font-size: 1.8rem;
  line-height: 1.5;
  font-weight: bold;
  word-break: keep-all;

  ${onSmall} {
    margin-bottom: 4rem;
    font-size: 1.6rem;
  }
`

export const Title = styled.p`
  color: #4f83f9;
`
export const DevelopScr = styled.div`
  width: 100%;
  color: white;

  pre {
    word-break: keep-all;
  }

  ${onSmall} {
    color: #205284;
  }
`

export const ContactCardWrap = styled.div`
  flex: 27.5% 1 1;
  min-height: 30rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 2.6rem 2rem;
  border: 1px solid #c6d0eb;
  border-radius: 2rem;
  box-shadow: 0px 10px 29px rgba(198, 208, 235, 0.5);
  background-color: #fff;
  color: #205284;
`

export const ContactTitle = styled.div`
  color: #205284;
  font-size: 3.2rem;
  font-weight: bold;

  ${onSmall} {
    font-size: 2.4rem;
  }
`

export const SkillsTitle = styled.div`
  color: #205284;
  font-size: 3.2rem;
  font-weight: bold;
  margin-bottom: 4.8rem;

  ${onSmall} {
    font-size: 2.4rem;
  }
`
export const ContentText = styled.p`
  margin-top: -1rem;
`
export const ContactContents = styled.div`
  font-size: 2rem;
  line-height: 155.14%;
  display: flex;
  flex-direction: column;
  align-content: flex-end;
  ${onSmall} {
    font-size: 1.6rem;
  }
`
export const ContentTitle = styled.p`
  color: #4f83f9;
  font-weight: bold;
  margin-bottom: 1rem;
`
export const InfoWrap = styled.div`
  margin-top: 3rem;
`

export const SkillsCardWrap = styled.div`
  flex: 65.8% 1 1;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 2.6rem 2rem;
  border: 1px solid #c6d0eb;
  border-radius: 2rem;
  box-shadow: 0px 10px 29px rgba(198, 208, 235, 0.5);
  background-color: #fff;
  color: #205284;
`
export const WorkSkilltWarp = styled.div`
  margin-bottom: 4rem;
  margin-left: 2rem;
`
export const DevelopmentSkillWarp = styled.ul`
  margin-left: 2rem;
`
export const SkillListWrap = styled.ul`
  display: flex;
  list-style: none;
`
export const SkillListDot = styled.li`
  list-style: inside;
`
export const SkillListText = styled.li`
  list-style: none;
`
