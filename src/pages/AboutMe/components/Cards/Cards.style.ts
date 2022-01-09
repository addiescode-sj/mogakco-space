import styled from 'styled-components'
import { COLORS } from '@styles/palette'

export const HeroCardWarp = styled.div`
    max-width: 100rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #212C4F;
    padding: 5rem 8rem;
    color: ${COLORS.WHITE};
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
    border-radius: 14px;
    box-sizing: border-box;
`;
export const IntroduceNameWarp = styled.div`
    margin-bottom: 9rem;
    font-size: 3.6rem;
    line-height: 4.32rem;
    font-weight: bold;
`;
export const DeveloperName = styled.span`
    color: #91FCCF;
`;
export const IntroduceDevelopWarp = styled.div`
    font-size: 1.8rem;
    line-height: 1.5;
    font-weight: bold;
`;
export const DevelopTitle = styled.p`
    color: #4F83F9;
`
export const IntroduceGithubWrap = styled.div`
    display: flex;
    flex-direction: column;
`;
export const AddImg = styled.img`
    width: 22.3rem;
    height: 22.3rem;
    border-radius: 100%;
    background-color: pink;
    margin-bottom: 5rem;
`;
export const BtnGithub = styled.button`
    height: 6rem;
    width: 22.8rem;
    background: linear-gradient(93.96deg, #4B26FF 0%, #B01EFF 100%);
    box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
    border-radius: 30px;
    color: ${COLORS.WHITE};
    font-size: 2.4rem;
    font-weight: bold;
    border: 0;
`;


export const ContactCardWrap = styled.div`
    /* width: 100%; */
    
    width: 27.5%;
    height: 40rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 2.6rem 2rem;
    box-sizing: border-box;
    border: 1px solid #C6D0EB;
    border-radius: 2rem;
    box-shadow: 0px 10px 29px rgba(198, 208, 235, 0.5);
    background-color: ${COLORS.WHITE};
    color: #205284;
`;

export const ContactTitle = styled.div`
    color: #205284;
    font-size: 3.2rem;
    font-weight: bold;
`;
export const ContentText = styled.p`
    margin-top: -1rem;
`;
export const ContactContents = styled.div`
    font-size: 2rem;
    line-height: 155.14%;
    display: flex;
    flex-direction: column;
    align-content: flex-end;
`;
export const ContentTitle = styled.p`
    color: #4F83F9;
    font-weight: bold;
    margin-bottom: 1rem;
`;
export const InfoWrap = styled.div`
    margin-top: 3rem;
`;


export const SkillsCardWrap = styled.div`
    width: 65.8%;
    height: 40rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 2.6rem 2rem;
    box-sizing: border-box;
    border: 1px solid #C6D0EB;
    border-radius: 2rem;
    box-shadow: 0px 10px 29px rgba(198, 208, 235, 0.5);
    background-color: ${COLORS.WHITE};
    color: #205284;
`;
export const WorkSkilltWarp = styled.ul`
    list-style: inside;
    margin-bottom: 4rem;
    margin-left: 1rem;
`;
export const DevelopmentSkillWarp = styled.ul`
    list-style: inside;
    margin-left: 1rem;
`;