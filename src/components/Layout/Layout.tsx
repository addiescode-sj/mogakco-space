import React from 'react'
import * as S from './Layout.style'

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  background?: string
  padding?: string
  flexDirection?: 'column' | 'row'
}

const Layout: React.FC<LayoutProps> = ({
  background,
  flexDirection = 'column',
  padding,
  children,
  style,
}) => {
  return (
    <S.LayoutContainer background={background} style={style}>
      <S.LayoutTemplate flexDirection={flexDirection} padding={padding}>
        {children}
      </S.LayoutTemplate>
    </S.LayoutContainer>
  )
}

export default Layout
