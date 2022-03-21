import styled, { css } from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  ${({ theme }) => css`
    height: 100%;

    display: flex;
    justify-content: flex-start;

    background: ${theme.colors.white};

    padding-top: 64px;
  `}
`;
