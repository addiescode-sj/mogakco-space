import * as S from './Main.style'
import Layout from '@components/Layout/Layout'
import { useRouter } from 'next/router'
import dayjs, { Dayjs } from 'dayjs'
import Nav from '@components/Nav'
import Wave from '@icons/Wave'
import Image from 'next/image'
import AboutMe from './AboutMe/AboutMe'
import Projects from './Projects'
import Github from '@pages/Github'
import Footer from '@components/Footer'
import { useRecoilValue } from 'recoil'
import userAtom from '@atoms/User'
import useMainInitialLoad from './hooks/useMainData'
import { useScreenContext } from '@hooks/useScreenContext'
import NavItem from '@components/Nav/components/NavItem'

function Main() {
  const router = useRouter()
  const { uId } = router.query // TODO: will replace this with authorized user name.

  const chatteringTime = timeFormatter(dayjs())
  const name = uId ? uId[0].toUpperCase() + uId.slice(1) : ''

  const { githubProfile } = useRecoilValue(userAtom)

  const { isSmall } = useScreenContext()

  useMainInitialLoad()

  if (uId && githubProfile)
    return (
      <Layout>
        <S.Header>
          <S.Gradient />
          <Nav />
          <S.Chatter>
            Good {chatteringTime}!<br /> I am {name}.
          </S.Chatter>
          {isSmall && <NavItem />}
          <Image src={'/Polygon8.png'} layout={'fill'} objectFit="cover" />
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

const timeFormatter = (time: Dayjs) => {
  const twoDigitsTime = dayjs(time).format('HH')

  if (twoDigitsTime >= '0' && twoDigitsTime < '11') {
    return 'Morning'
  }

  if (twoDigitsTime >= '11' && twoDigitsTime < '18') {
    return 'Afternoon'
  }

  if (twoDigitsTime >= '18' && twoDigitsTime < '24') {
    return 'Evening'
  }
}

export default Main
