import * as S from './Main.style'
import Layout from '@components/Layout/Layout'
import Nav from '@components/Nav'
import Wave from '@icons/Wave'
import Image from 'next/image'
import AboutMe from './AboutMe/AboutMe'
import Projects from './Projects'
import Github from '@pages/Github'
import Footer from '@components/Footer'
import useMainInitialLoad from './hooks/useMainInitialLoad'
import { useScreenContext } from '@hooks/useScreenContext'
import NavItem from '@components/Nav/components/NavItem'
import useUserAuth from './hooks/useUserAuth'

function Main() {
  const { uId, name, greetingTime, githubProfile } = useUserAuth()
  const { isSmall } = useScreenContext()

  useMainInitialLoad()

  const timeMatchedColor: { [key: string]: string } = {
    ['Morning']: '#66FFCC',
    ['Afternoon']: '#FF9494',
    ['Evening']: '#4B26FF',
  }

  if (uId && githubProfile)
    return (
      <Layout>
        <S.Header
          timeColor={greetingTime ? timeMatchedColor[greetingTime] : timeMatchedColor.Afternoon}
        >
          <S.Gradient />
          <Nav />
          <S.Chatter>
            Good {greetingTime}!<br /> I am {name}.
          </S.Chatter>
          {isSmall && <NavItem />}
          <Wave />
        </S.Header>
        <S.Body>
          <AboutMe />
          <Projects />
        </S.Body>
        <Footer>
          <Github githubLink={githubProfile} />
        </Footer>
      </Layout>
    )

  return <Layout>No user account.</Layout>
}

export default Main
