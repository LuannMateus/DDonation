import styled, { css } from 'styled-components/native';

export const Wrapper = styled.View`
  width: 100%;

  display: flex;
  justify-content: flex-end;
`;

export const ModalContainer = styled.TouchableOpacity`
  width: 100%;

  display: flex;
  align-items: center;

  flex: 1;

  background-color: #fff;

  margin-top: 365px;
`;

export const EnterPriceContainer = styled.View`
  ${({ theme }) => css`
    width: 220px;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #f8f9fd;
    opacity: 0.75;

    margin-top: ${theme.spacings.large};
  `}
`;

export const EnterPriceTextInput = styled.TextInput`
  width: 220px;

  font-size: 18px;
  text-align: center;
`;

export const PricesContainer = styled.View`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DonationTouchableContainer = styled.View`
  ${({ theme }) => css`
    height: 100%;

    display: flex;
    justify-content: flex-end;

    flex: 1;

    margin-bottom: ${theme.spacings.medium};
  `}
`;

export const DonationTouchable = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: 120px;
    height: 52px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 12px;

    background-color: ${theme.colors.primaryButtonColor};
  `}
`;
