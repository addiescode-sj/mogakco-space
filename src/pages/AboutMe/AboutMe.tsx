import Layout from '@components/Layout/Layout'
import React from 'react'
import * as S from './AboutMe.style'
import Image from 'next/image'
import { useScreenContext } from '@hooks/useScreentContext'

function AboutMe() {
  return (
    <Layout>
      <S.Gradient />
      <S.Header>
        <Image src={'/Polygon15.png'} layout={'fill'} objectFit="cover" />
      </S.Header>
    </Layout>
  )
}

export default AboutMe
