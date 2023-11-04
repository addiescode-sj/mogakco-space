import ModalContainer from '@components/Modals'
import { withScreenContext } from '@hooks/useScreenContext'
import HolidayPortal from '@pages/Portals/HolidayPortal'
import GlobalStyle from '@styles/GlobalStyle'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import fetcher from 'src/factory/apiManager'
import { SWRConfig } from 'swr'

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
