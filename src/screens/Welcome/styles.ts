import styled, { css } from 'styled-components/native';

export const Wrapper = styled.View`
  ${({ theme }) => css`
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    background: ${theme.colors.white};
  `}
`;

export const Image = styled.Image`
  ${() => css``}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.colorPrimary};
    font-size: ${theme.font.sizes.medium};
  `}
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.colorPrimary75};
  `}
`;
