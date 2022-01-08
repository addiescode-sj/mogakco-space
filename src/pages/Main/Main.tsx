import { useRecoilValue } from 'recoil'
import userAtom from '@atoms/User'
import * as S from './Main.style'
import Link from 'next/link'
import HeaderImg from '@img/header.png'
import Image from 'next/image'

function Main() {
  // const user = useRecoilValue(userAtom)

  // const handleClickLogout = () => {
  //   authService.signOut(authUser)
  // }

  // if (user.email && user.nickname)
  //   return (
  //     <S.Main>
  //       <S.HomeSection>
  //         Welcome! {user.email} {user.nickname}
  //         <S.LoginButton onClick={handleClickLogout}>로그아웃하기</S.LoginButton>
  //       </S.HomeSection>
  //       <footer></footer>
  //     </S.Main>
  //   )

  return (
    <S.Main>
      <S.Header>
        <Image src={'/Polygon15.png'} layout={'fill'} objectFit="cover" />
      </S.Header>
    </S.Main>
  )
}

export default Main
