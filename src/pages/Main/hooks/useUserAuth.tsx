import userAtom from '@atoms/User'
import dayjs, { Dayjs } from 'dayjs'
import { useRouter } from 'next/router'
import { useRecoilValue } from 'recoil'

function useUserAuth() {
  const router = useRouter()
  const { uId } = router.query // TODO: will replace this with authorized user name.

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

  const greetingTime = timeFormatter(dayjs())
  const name = uId ? uId[0].toUpperCase() + uId.slice(1) : ''

  const { githubProfile } = useRecoilValue(userAtom)

  return { uId, greetingTime, name, githubProfile }
}

export default useUserAuth
