import styled, { css } from 'styled-components/native';

export const Wrapper = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background-color: ${theme.colors.logoutButtonBg};

    padding: 12px 0;
  `}
`;

export const Icon = styled.Image`
  width: 30px;
  height: 30px;

  margin-right: 10px;
`;
