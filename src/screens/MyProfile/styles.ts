import styled, { css } from 'styled-components/native';
import { Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export const Scroll = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

export const Header = styled.SafeAreaView`
  width: 100%;
  height: ${height - 400}px;
`;

export const NameAndEmailInputContainer = styled.View`
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  margin-top: 34px;
  padding: 0 40px;
`;

export const PaymentMethodContainer = styled.View`
  padding: 0 14px;
  margin-top: 54px;
`;

export const CreditCardIconContainer = styled.View`
  ${({ theme }) => css`
    width: 30px;
    height: 30px;

    background-color: ${theme.colors.primaryBg};

    border-radius: 12px;

    margin-left: 6px;
    margin-top: 26px;
    margin-bottom: 36px;

    overflow: scroll;
  `}
`;

export const CreditCardIcon = styled.Image``;

export const CreditCardContainer = styled.View`
  display: flex;
  align-items: center;

  margin-bottom: 30px;
`;

export const CreditCardInfoContainer = styled.View`
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  margin-top: 34px;
  padding: 0 40px;
`;

export const DataAndCvvContainer = styled.View`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 40px;
`;
