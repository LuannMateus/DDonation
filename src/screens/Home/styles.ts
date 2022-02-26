import styled, { css } from 'styled-components/native';

export const Wrapper = styled.View`
  ${({ theme }) => css`
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    background: ${theme.colors.bgPrimary};
  `}
`;
