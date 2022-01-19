import { onLarge, onSmall } from '@styles/mediaQuery'
import styled from 'styled-components'

export const HeroCardWarp = styled.div`
  position: absolute;
  top: 21.2rem;
  min-width: 100rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #212c4f;
  padding: 5rem 8rem;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
  border-radius: 14px;
  box-sizing: border-box;
`

export const HeroCardInNavWrap = styled.div`
  position: absolute;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 3;
  top: 8.7rem;
  width: 100%;
  padding: 0 1.7rem;
`

export const IntroduceNameWarp = styled.div`
  margin-bottom: 9rem;
  font-size: 3.6rem;
  line-height: 4.32rem;
  font-weight: bold;
  color: #fff;

  ${onSmall} {
    margin-bottom: 0;
    font-size: 1.6rem;
    line-height: 1.2;
  }
`
export const DeveloperName = styled.span`
  color: #91fccf;
`
export const IntroduceDevelopWarp = styled.div`
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
export const DevelopTitle = styled.p`
  color: #4f83f9;
`
export const DevelopScr = styled.div`
  color: white;
  ${onSmall} {
    color: #205284;
  }
`
export const IntroduceGithubWrap = styled.div`
  display: flex;
  flex-direction: column;
  ${onSmall} {
    position: relative;
  }
`
export const AddImg = styled.img`
  width: 22.3rem;
  height: 22.3rem;
  border-radius: 100%;
  background-color: pink;
  margin-bottom: 5rem;
  ${onSmall} {
    width: 9rem;
    height: 9rem;
    margin-bottom: 0rem;
    position: absolute;
    bottom: -1.5rem;
    right: 18%;
  }
`
export const BtnGithub = styled.button`
  height: 6rem;
  width: 22.8rem;
  background: linear-gradient(93.96deg, #4b26ff 0%, #b01eff 100%);
  box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
  border-radius: 30px;
  color: #fff;
  font-size: 2.4rem;
  font-weight: bold;
  border: 0;
  cursor: pointer;
  ${onSmall} {
    width: 6rem;
    height: 2.5rem;
    font-size: 1.2rem;
    z-index: 4;
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
