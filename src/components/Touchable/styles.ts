import styled, { css } from 'styled-components/native';

export const TouchableButton = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: 147px;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 24px;

    background-color: ${theme.colors.primaryButtonColor};
  `}
`;

export const DonationTouchable = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: 100%;
    height: 52px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 24px;

    background-color: ${theme.colors.primaryButtonColor};
  `}
`;
