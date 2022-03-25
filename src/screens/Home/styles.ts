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

export const EmergencyCasesContainer = styled.View`
  ${({ theme }) => css`
    width: 100%;
    padding-top: ${theme.padding.large};

    flex: 1;

    padding: 0 20px;
    padding-top: 28px;
  `}
`;
