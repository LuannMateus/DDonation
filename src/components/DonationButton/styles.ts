import styled, { css } from 'styled-components/native';

export const Wrapper = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: 75px;
    height: 75px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${theme.colors.donationButtonBg};
    border-radius: 12px;

    margin-top: 28px;
  `}
`;

export const DonationImage = styled.Image`
  width: 40px;
  height: 40px;
`;
