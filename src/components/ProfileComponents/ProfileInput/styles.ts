import styled, { css, DefaultTheme } from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text';

type WrapperProps = {
  marginTop?: 0 | 1 | 2 | 3 | 4 | 5;
};

const getMarginTop = (theme: DefaultTheme, value: number) => {
  switch (value) {
    case 1:
      return css`
        margin-top: ${theme.spacings.xxsmall};
      `;
    case 2:
      return css`
        margin-top: ${theme.spacings.xsmall};
      `;
    case 3:
      return css`
        margin-top: ${theme.spacings.small};
      `;
    case 4:
      return css`
        margin-top: ${theme.spacings.medium};
      `;
    case 5:
      return css`
        margin-top: 48px;
      `;
    default:
      return css`
        margin-top: 0;
      `;
  }
};

export const Wrapper = styled.View<WrapperProps>`
  ${({ theme, marginTop = 0 }) => css`
    width: 100%;
    height: 44px;

    display: flex;
    justify-content: center;
    align-items: flex-start;

    ${getMarginTop(theme, marginTop)};
  `}
`;

export const LabelContainer = styled.View`
  padding-top: 12px;
`;

export const InputAndIconContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

export const Icon = styled.Image`
  width: 25px;
  height: 25px;

  align-self: flex-end;

  margin-bottom: 16px;
`;

export const Line = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 1px;
    background-color: ${theme.colors.lineColor};
  `}
`;

export const Input = styled.TextInput`
  ${({ theme }) => css`
    width: 295px;
    height: 44px;

    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black50};

    padding-top: 12px;
  `}
`;

export const WrapperTwoColumns = styled(Wrapper)`
  width: 122px;
`;

export const InputTwoColumns = styled.TextInput`
  ${({ theme }) => css`
    width: 84px;
    height: 44px;

    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black50};

    padding-top: 12px;
  `}
`;

export const MaskInput = styled(TextInputMask)`
  ${({ theme }) => css`
    width: 295px;
    height: 44px;

    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black50};

    padding-top: 12px;
  `}
`;

export const MaskInputTwoColumns = styled(TextInputMask)`
  ${({ theme }) => css`
    width: 84px;
    height: 44px;

    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black50};

    padding-top: 12px;
  `}
`;
