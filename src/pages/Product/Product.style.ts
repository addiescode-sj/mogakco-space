import styled from 'styled-components';

export const Product = styled.section``;
export const Gap = styled.div<{ gap: number }>`
  height: ${({ gap }) => `${gap}px`};
`;
