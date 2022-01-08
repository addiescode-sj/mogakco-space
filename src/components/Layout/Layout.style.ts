import { onSmall } from '@styles/mediaQuery'
import styled, { css } from 'styled-components'

export const LayoutContainer = styled.section<{ background?: string }>`
  min-width: 1080px;
  ${({ background }) =>
    background &&
    css`
      background: ${background};
    `}

  ${onSmall} {
    min-width: 375px;
  }
`

interface LayoutTemplateProps {
  flexDirection: 'column' | 'row'
  background?: string
  padding?: string
}

export const LayoutTemplate = styled.div<LayoutTemplateProps>`
  display: flex;
  ${({ flexDirection, background, padding }) => css`
    flex-direction: ${flexDirection};
    background: ${background};
    padding: ${padding};

    /** 모바일의 경우 padding값을 -10 */
    ${onSmall} {
      padding: calc(${padding} - 10%);
    }
  `}
`
