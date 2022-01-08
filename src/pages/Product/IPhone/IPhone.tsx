import Section from '../components/Section';
import { Gap } from '../Product.style';
import TextWithScrollEffect from '../components/TextWithEffect/TextWithEffect.Scroll';
import { IphoneText } from './data/data';

function IPhone() {
  return (
    <Section>
      {IphoneText.map(text => (
        <>
          <TextWithScrollEffect size={'large'} weight={'bold'}>
            {text}
          </TextWithScrollEffect>
          <Gap gap={80} />
        </>
      ))}
    </Section>
  );
}

export default IPhone;
