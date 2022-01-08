import { useRecoilValue } from 'recoil'
import userAtom from '@atoms/User'
import * as S from './Main.style'
import Link from 'next/link'
import { authService, authUser } from '@firebase/clientApp'

function Main() {
  const user = useRecoilValue(userAtom)

  const handleClickLogout = () => {
    authService.signOut(authUser)
  }

  if (user.email && user.nickname)
    return (
      <S.Main>
        <S.HomeSection>
          Welcome! {user.email} {user.nickname}
          <S.LoginButton onClick={handleClickLogout}>로그아웃하기</S.LoginButton>
        </S.HomeSection>
        <footer></footer>
      </S.Main>
    )

  return (
    <S.Main>
      <S.HomeSection>
        Please login to get access.
        <Link href="/auth">
          <S.LoginButton>로그인하기</S.LoginButton>
        </Link>
      </S.HomeSection>
      <footer></footer>
    </S.Main>
  )
}

export default Main
