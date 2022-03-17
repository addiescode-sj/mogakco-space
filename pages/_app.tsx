import type { AppProps } from 'next/app'
import GlobalStyle from '@styles/GlobalStyle'
import React from 'react'
import { RecoilRoot } from 'recoil'
import HolidayPortal from '@pages/Portals/HolidayPortal'
import { withScreenContext } from '@hooks/useScreenContext'
import ModalContainer from '@components/Modals'
import { SWRConfig } from 'swr'
import fetcher from 'src/factory/apiManager'

function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <SWRConfig value={{ fetcher }}>
        <GlobalStyle />
        <HolidayPortal />
        <Component {...pageProps} />
        <ModalContainer />
      </SWRConfig>
    </RecoilRoot>
  )
}
export default withScreenContext(App)
