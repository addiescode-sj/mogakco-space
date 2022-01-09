import React from 'react'
import * as S from './Cards.style';
import { initializeApp } from 'firebase/app';

function SkillsCard() {
    const workSkill = [
        'UIUX, OOP에 대한 이해도',
        '디자이너, 기획자와 매우 원활한 커뮤니케이션'
    ]
    const developmentSkill = [
        'React,js, Typescript, Next.js',
        'React-redux, Redux-toolkit, Context API, Recoil, SWR hooks',
        'Styled-components. Scss',
        'HTML, CSS, Javascript'
    ]

    return (
        <S.SkillsCardWrap>
            <S.ContactTitle>Skills.</S.ContactTitle>

            <S.ContactContents>
                <S.ContentTitle>General Skills</S.ContentTitle>

                <S.WorkSkilltWarp>
                    {workSkill.map((text, idx) => (
                        <li key={idx}>
                            {text}
                        </li>
                    ))}
                </S.WorkSkilltWarp>

                <S.DevelopmentSkillWarp>
                    {developmentSkill.map((text, idx) => (
                        <li key={idx}>
                            {text}
                        </li>
                    ))}
                </S.DevelopmentSkillWarp>
            </S.ContactContents>

        </S.SkillsCardWrap>
    )
}

export default SkillsCard
