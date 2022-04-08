import styled, { css } from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  ${({ theme }) => css`
    height: 100%;
    width: 100%;

    display: flex;

    background: ${theme.colors.white};
  `}
`;

export const OptionsContainer = styled.View`
  flex: 1;

  width: 100%;

  display: flex;
  align-items: flex-start;

  padding: 0 20px;
`;
