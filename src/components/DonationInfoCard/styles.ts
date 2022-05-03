import styled, { css } from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  ${({ theme }) => css`
    width: 100%;

    background: ${theme.colors.white};
  `}
`;

export const MainImage = styled.Image`
  width: 100%;
  height: 171px;
  border-radius: 4px;
`;

export const TitleContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DaysRemainingContainer = styled.View`
  align-self: flex-end;
`;

export const ByContainer = styled.View`
  width: 134px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const DonationInfoContainer = styled.View`
  padding-top: 6px;
`;
