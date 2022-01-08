import Layout from '@components/Layout/Layout'
import TextWithEffectScroll from '@components/TextWithEffect/TextWithEffect.Scroll'
import { Gap } from '../Product.style'
import { IphoneText } from './data/data'

function IPhone() {
  return (
    <Layout background="#333">
      {IphoneText.map((text) => (
        <>
          <TextWithEffectScroll size={'lg'} weight={'bold'}>
            {text}
          </TextWithEffectScroll>
          <Gap gap={80} />
        </>
      ))}
    </Layout>
  )
}

export default IPhone
