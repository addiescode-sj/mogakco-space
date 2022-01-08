import styled from 'styled-components'
import { COLORS } from '@styles/palette'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 800px;
  margin: 0 auto;
`

export const AuthFormInput = styled.input<{ isError: boolean }>`
  display: block;
  margin-bottom: 0.4rem;
  padding: 0.3rem 0.4rem;
  max-width: 800px;
  width: 90%;
  border: ${({ isError }) => (isError ? `1px solid ${COLORS.ERROR}` : `1px solid ${COLORS.BLACK}`)};

  &::placeholder {
    text-align: center;
  }
`

export const Message = styled.div`
  margin-bottom: 2rem;
`

export const Warning = styled.p`
  color: ${COLORS.ERROR};
`

export const Divider = styled.div`
  margin: 5px 0;
  width: 100%;
  height: 1px;
  background: ${COLORS.BLACK};
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  margin-bottom: 0.4rem;
  padding: 0.3rem 0.4rem;
  min-width: 400px;
  position: relative;

  &:first-of-type {
    margin-top: 0.4rem;
  }

  &:last-child {
    margin-top: 0.4rem;
  }
`
