import { onSmall } from '@styles/mediaQuery'
import { zIndexStyle } from '@styles/zIndexStyle'
import styled from 'styled-components'

export const FooterContainer = styled.section`
  margin-top: 11rem;
  position: relative;
  display: flex;
  justify-content: center;
  z-index: ${zIndexStyle.footer};
  width: 100%;
  min-height: 63rem;
  background: #f1f3f5;

  ${onSmall} {
    min-height: 25rem;
  }
`
