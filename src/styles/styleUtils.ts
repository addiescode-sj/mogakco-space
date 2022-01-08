import { css } from 'styled-components'

export const hex2rgba = (hex: string, alpha = 1) => {
  const matches = hex.match(/\w\w/g)?.map((x) => parseInt(x, 16))
  const [r, g, b] = matches || [0, 0, 0]
  return `rgba(${r},${g},${b},${alpha})`
}

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`
