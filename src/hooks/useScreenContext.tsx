import React, { createContext, useContext } from 'react'
import { useMediaQuery } from 'react-responsive'

interface IScreenContextType {
  isSmall?: boolean
  isLarge?: boolean
  minWidth: string
  minHeight: string
}

const context = {} as IScreenContextType
export const ScreenContext = createContext(context)

export const useScreenContext = () => useContext(ScreenContext)

export const withScreenContext = <P,>(Component: React.ComponentType<P>) => {
  const WithScreen = (props: P) => {
    const isSmall = useMediaQuery({ maxWidth: 800 })
    const isLarge = useMediaQuery({ minWidth: 801 })

    const minWidth = isSmall ? '320px' : '1024px'
    const minHeight = '100vh'

    return (
      <ScreenContext.Provider value={{ isSmall, isLarge, minWidth, minHeight }}>
        <Component {...props} />
      </ScreenContext.Provider>
    )
  }

  return WithScreen
}
