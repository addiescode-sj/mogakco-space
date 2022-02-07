import { onSmall } from '@styles/mediaQuery'
import styled from 'styled-components'

export const HeroCard = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 21.2rem;
  min-width: 100rem;
  padding: 5rem 8rem;
  background-color: #212c4f;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
  border-radius: 14px;
`

export const HeroCardInNavWrap = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  top: 8.7rem;
  padding: 0 1.7rem;
  z-index: 3;

  ${onSmall} {
    top: 7rem;
    align-items: flex-end;
  }
`

export const TextBox = styled.div`
  margin-bottom: 9rem;
  font-size: 3.6rem;
  line-height: 4.32rem;
  font-weight: bold;
  color: #fff;

  ${onSmall} {
    margin-bottom: 0;
    font-size: 1.6rem;
    line-height: 1.2;
  }
`
export const HighlightedText = styled.span`
  color: #91fccf;
`
export const ImageWithButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 1.5;
  word-break: keep-all;

  ${onSmall} {
    padding-right: 3.8rem;
    flex-direction: row;
    font-size: 1.6rem;
  }
`

export const Img = styled.img`
  position: relative;
  width: 22.3rem;
  height: 22.3rem;
  margin-bottom: 5rem;
  border-radius: 100%;
  background-color: pink;
  ${onSmall} {
    width: 9.1rem;
    height: 9.1rem;
    margin-bottom: 0;
  }
`
export const Button = styled.button`
  width: 22.8rem;
  height: 6rem;
  background: linear-gradient(93.96deg, #4b26ff 0%, #b01eff 100%);
  box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
  border-radius: 30px;
  color: #fff;
  font-size: 2.4rem;
  font-weight: bold;
  border: 0;
  cursor: pointer;

  ${onSmall} {
    position: absolute;
    top: 5.2rem;
    right: 4.1rem;
    width: 6rem;
    height: 2.5rem;
    font-size: 1.2rem;
    z-index: 4;
  }
`
