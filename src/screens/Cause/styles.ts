import styled, { css } from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  ${({ theme }) => css`
    height: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    background: ${theme.colors.white};

    padding: 0 20px;
    padding-top: 64px;
  `}
`;

export const MainImage = styled.Image`
  width: 100%;
  height: 132px;
  border-radius: 4px;
`;

export const InfoContainer = styled.View`
  padding-top: 23px;
`;

export const EmergencyCasesContainer = styled.View`
  ${({ theme }) => css`
    width: 100%;
    padding-top: ${theme.padding.large};
    margin-bottom: ${theme.padding.small};

    flex: 1;
  `}
`;
