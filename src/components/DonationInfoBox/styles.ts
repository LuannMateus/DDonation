import styled, { css } from 'styled-components/native';

export const Wrapper = styled.View`
  ${({ theme }) => css`
    width: 160px;
    height: 68px;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    background-color: ${theme.colors.donationButtonBg};

    border-radius: 14px;

    margin-top: ${theme.padding.xlarge};
  `}
`;

export const TargetIcon = styled.Image`
  width: 40px;
  height: 40px;
`;

export const LabelAndValue = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;

  padding-right: 18px;
`;
