import * as S from './Main.style'
import Image from 'next/image'
import Layout from '@components/Layout/Layout'
import { useRouter } from 'next/router'
import dayjs, { Dayjs } from 'dayjs'
import Nav from '@pages/Nav'

function Main() {
  const router = useRouter()
  const { uId } = router.query // TODO: will replace this with authorized user name.

  const chatteringTime = timeFormatter(dayjs())
  const name = uId ? uId[0].toUpperCase() + uId.slice(1) : ''

  if (uId)
    return (
      <Layout>
        <S.Gradient />
        <S.Header>
          <Nav />
          <S.Chatter>
            Good {chatteringTime}!<br /> I am {name}.
          </S.Chatter>
          <Image src={'/Polygon8.png'} layout={'fill'} objectFit="cover" />
        </S.Header>
        <S.HomeSection></S.HomeSection>
      </Layout>
    )

  return <Layout>No user account.</Layout>
}

const timeFormatter = (time: Dayjs) => {
  if (time.isBefore('1', 'h')) {
    return 'Morning'
  }

  if (time.isAfter('1', 'h')) {
    return 'Afternoon'
  }

  if (time.isAfter('7', 'h')) {
    return 'Evening'
  }
}

export default Main
