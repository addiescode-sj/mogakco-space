import { fb } from '@firebase/firebase.utils'

import { useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import authAtom from '@atoms/User'
import router from 'next/router'
import { authService, authUser } from '@firebase/clientApp'

function useFirebaseLogin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const setAuthUser = useSetRecoilState(authAtom)

  const setUserInfo = async (email: string) => {
    // set email & nickname into recoil state
    const docData = await fb.user.getUserInfo(email)
    setAuthUser((prev) => ({
      ...prev,
      email,
      nickname: docData?.nickname,
    }))
  }

  useEffect(() => {
    if (!authUser) return

    authService.onAuthStateChanged(authUser, (user) => {
      if (!user || !user.email) return

      setUserInfo(user?.email)
      setIsLoggedIn(true)
      router.push('/main')
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authUser])

  return { isLoggedIn }
}

export default useFirebaseLogin
