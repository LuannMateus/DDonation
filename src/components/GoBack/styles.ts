import styled, { css } from 'styled-components/native';

export const Wrapper = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: 30px;
    height: 30px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 24px;

    background-color: ${theme.colors.white};

    margin: 23px 0;
    margin-left: 4px;
  `}
`;

export const ArrowIcon = styled.Image``;
