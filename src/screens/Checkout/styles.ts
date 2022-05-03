import styled, { css } from 'styled-components/native';

type WrapperProps = {
  platformSafeArea?: number | undefined;
};

export const Wrapper = styled.SafeAreaView<WrapperProps>`
  ${({ theme, platformSafeArea = 0 }) => css`
    height: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    background: ${theme.colors.white};

    padding: 0 20px;
    padding-top: ${platformSafeArea}px;
  `}
`;

export const ScrollWrapper = styled.ScrollView``;

export const BackAndTitleContainer = styled.View`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding-bottom: 12px;
  padding-right: 30px;
`;

export const ScreenTitleContainer = styled.View`
  width: 100%;

  flex: 1;

  display: flex;
  align-items: center;
`;

export const PaymentMethodContainer = styled.View`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CreditCardIconContainer = styled.View`
  ${({ theme }) => css`
    width: 30px;
    height: 30px;

    background-color: ${theme.colors.primaryBg};

    border-radius: 12px;

    margin-left: 6px;
    margin-top: 22px;
    margin-bottom: 22px;

    overflow: scroll;
  `}
`;

export const CreditCardIcon = styled.Image``;

export const DonationInfoCardContainer = styled.View`
  width: 100%;

  margin-top: 11px;
`;

export const TotalContainer = styled.View`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 18px;
`;

export const TouchableDonationContainer = styled.View`
  width: 100%;
  margin: 24px 0;
`;
