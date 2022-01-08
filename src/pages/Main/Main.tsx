import * as S from './Main.style'
import Image from 'next/image'
import Layout from '@components/Layout/Layout'

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
    <Layout>
      <S.Gradient />
      <S.Header>
        <Image src={'/Polygon8.png'} layout={'fill'} objectFit="cover" />
      </S.Header>
    </Layout>
  )
}

export default Main
