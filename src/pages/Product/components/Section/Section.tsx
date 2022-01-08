import { PropsWithChildren } from 'react';
import * as S from './Section.style';

export interface SectionProps {
  background?: string;
}

function Section({ background, children }: PropsWithChildren<SectionProps>) {
  return <S.Section.Body background={background}>{children}</S.Section.Body>;
}

export default Section;
