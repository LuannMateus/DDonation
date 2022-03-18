import styled, { css } from 'styled-components/native';

export const Wrapper = styled.View`
  ${({ theme }) => css`
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    padding-top: 147px;

    background: ${theme.colors.white};
  `}
`;

export const Image = styled.Image`
  ${() => css``}
`;

export const TitleContainer = styled.View`
  ${({ theme }) => css`
    width: 100%;

    margin-top: ${theme.spacings.xhuge};
    padding-left: ${theme.spacings.large};
  `}
`;

export const DescriptionContainer = styled.View`
  ${({ theme }) => css`
    width: 100%;

    margin-top: ${theme.spacings.xsmall};
    padding-left: ${theme.spacings.large};
  `}
`;

export const TouchableContainer = styled.View`
  ${({ theme }) => css`
    padding-top: ${theme.spacings.xhuge};
    padding-left: ${theme.spacings.large};

    align-self: flex-start;
  `}
`;
