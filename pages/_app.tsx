import type { AppProps } from 'next/app'
import GlobalStyle from '@styles/GlobalStyle'
import React from 'react'
import { RecoilRoot } from 'recoil'
import HolidayPortal from '@pages/Portals/HolidayPortal'
import Nav from '@pages/Nav'
import { withScreenContext } from '@hooks/useScreenContext'

function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <HolidayPortal />
      <Component {...pageProps} />
    </RecoilRoot>
  )
}
export default withScreenContext(App)
