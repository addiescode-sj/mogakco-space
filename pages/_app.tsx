import type { AppProps } from 'next/app'
import GlobalStyle from '@styles/GlobalStyle'
import React from 'react'
import { RecoilRoot } from 'recoil'
import HolidayPortal from '@pages/Portals/HolidayPortal'
import { withScreenContext } from '@hooks/useScreenContext'
import ModalContainer from '@components/Modals'

function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <HolidayPortal />
      <Component {...pageProps} />
      <ModalContainer />
    </RecoilRoot>
  )
}
export default withScreenContext(App)
