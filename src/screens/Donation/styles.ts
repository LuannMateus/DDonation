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
  height: 171px;
  border-radius: 4px;
`;

export const TitleAndTimeContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ByContainer = styled.View`
  width: 134px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DonationInfoContainer = styled.View`
  padding-top: 23px;
`;

export const TargetAndDonationMoneyContainer = styled.View`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const DonationButtonContainer = styled.View`
  ${({ theme }) => css`
    width: 100%;

    display: flex;
    justify-content: flex-end;

    flex: 1;

    margin-bottom: ${theme.padding.xlarge};
  `}
`;
