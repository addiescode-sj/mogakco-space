import * as S from './Main.style'
import Layout from '@components/Layout/Layout'
import { useRouter } from 'next/router'
import dayjs, { Dayjs } from 'dayjs'
import Nav from '@pages/Nav'
import Wave from '@icons/Wave'
import Image from 'next/image'
import AboutMe from './AboutMe/AboutMe'
import Projects from './Projects'

function Main() {
  const router = useRouter()
  const { uId } = router.query // TODO: will replace this with authorized user name.

  const chatteringTime = timeFormatter(dayjs())
  const name = uId ? uId[0].toUpperCase() + uId.slice(1) : ''

  if (uId)
    return (
      <Layout>
        <S.Header>
          <S.Gradient />
          <Nav />
          <S.Chatter>
            Good {chatteringTime}!<br /> I am {name}.
          </S.Chatter>
          <Image src={'/Polygon8.png'} layout={'fill'} objectFit="cover" />
          <Wave />
        </S.Header>
        <S.Body>
          <AboutMe />
          <Projects />
        </S.Body>
      </Layout>
    )

  return <Layout>No user account.</Layout>
}

const timeFormatter = (time: Dayjs) => {
  const twoDigitsTime = dayjs(time).format('HH')

  if (twoDigitsTime < '11') {
    return 'Morning'
  }

  if (twoDigitsTime >= '11' && twoDigitsTime < '18') {
    return 'Afternoon'
  }

  if (twoDigitsTime >= '18' && twoDigitsTime < '23') {
    return 'Evening'
  }
}

export default Main
