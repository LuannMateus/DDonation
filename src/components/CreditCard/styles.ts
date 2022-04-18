import styled, { css } from 'styled-components/native';

export const Wrapper = styled.View`
  ${({ theme }) => css`
    width: 320px;
    height: 140px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    border-radius: 24px;
    padding-left: 14px;
    padding-top: 42px;

    background-color: ${theme.colors.primaryColor};
  `}
`;

export const CreditCardInfoContainer = styled.View``;

export const Icon = styled.Image`
  align-self: flex-end;
  margin-right: 29px;
  margin-bottom: 15px;
`;

export const BackViewWrapper = styled(Wrapper)`
  flex-direction: column;

  padding: 0;
`;

export const BackBeltView = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 40px;

    margin-top: 14px;

    background: ${theme.colors.lineColor};
  `}
`;

export const BackViewInfoContainer = styled.View`
  width: 100%;

  flex: 1;

  display: flex;
  justify-content: center;
  align-items: flex-end;

  padding-right: 24px;
`;
