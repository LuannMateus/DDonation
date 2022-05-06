import styled, { css } from 'styled-components/native';

export const Wrapper = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: 100%;
    height: 60px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 64px;

    background: ${theme.colors.primaryBg75};
  `}
`;

export const GoogleWrapper = styled(Wrapper)`
  ${({ theme }) => css`
    flex-direction: row;
    align-items: center;
    justify-content: center;

    border-radius: 4px;

    background: ${theme.colors.white};
  `}
`;

export const GoogleIcon = styled.Image`
  margin-right: 14px;
`;
