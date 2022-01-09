import React from 'react'
import * as S from './Cards.style';
import { initializeApp } from 'firebase/app';

function ContactCard() {
    const contactInfo = [
        {title: 'Emial',
         content: 'addiescode@gmail.com'},
        {title: 'Phone',
         content: '010-1234-5678'}
    ]

    return (
        <S.ContactCardWrap>
            <S.ContactTitle>Contract.</S.ContactTitle>

            <S.ContactContents>
                {contactInfo.map((text, idx) => (
                    <S.InfoWrap key={idx}>
                        <S.ContentTitle>{text.title}</S.ContentTitle>
                        <S.ContentText>{text.content}</S.ContentText>
                    </S.InfoWrap>
                ))}
            </S.ContactContents>
        </S.ContactCardWrap>
    )
}

export default ContactCard