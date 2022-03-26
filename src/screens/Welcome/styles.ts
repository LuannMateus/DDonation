import styled, { css } from 'styled-components/native';

export const Wrapper = styled.View`
  ${({ theme }) => css`
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: flex-start;

    padding: 0px 10px;
    padding-bottom: 36px;

    background: ${theme.colors.white};
  `}
`;

export const InfoContainer = styled.View`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const Image = styled.Image`
  ${() => css`
    height: 305px;

    width: 100%;
  `}
`;

export const TitleContainer = styled.View`
  ${({ theme }) => css`
    width: 100%;

    margin-top: ${theme.spacings.xlarge};
  `}
`;

export const DescriptionContainer = styled.View`
  ${({ theme }) => css`
    width: 100%;

    margin-top: ${theme.spacings.xsmall};
  `}
`;

export const TouchableContainer = styled.View`
  ${({ theme }) => css`
    height: 100%;

    display: flex;
    justify-content: flex-end;
    flex: 1;

    padding: ${theme.padding.large} 0;
  `}
`;
