import styled, { css, DefaultTheme } from 'styled-components/native';

type TypographyStyledProps = {
  size?: 'xxsmall' | 'xsmall' | 'medium' | 'small' | 'large';
  color?: 'primaryColor' | 'primaryColor75' | 'white';
  paddingTop?: 0 | 1 | 2 | 3 | 4 | 5;
  underline?: true | false;
};

const getFontSize = (theme: DefaultTheme, size: string) => {
  switch (size) {
    case 'large':
      return css`
        font-size: ${theme.font.sizes.large};
      `;
    case 'medium':
      return css`
        font-size: ${theme.font.sizes.medium};
      `;
    case 'small':
      return css`
        font-size: ${theme.font.sizes.small};
      `;
    case 'xsmall':
      return css`
        font-size: ${theme.font.sizes.xsmall};
      `;
    case 'xxsmall':
      return css`
        font-size: ${theme.font.sizes.xxsmall};
      `;
    default:
      return css`
        font-size: ${theme.font.sizes.xsmall};
      `;
  }
};

const getColor = (theme: DefaultTheme, color: string) => {
  switch (color) {
    case 'primaryColor':
      return css`
        color: ${theme.colors.primaryColor};
      `;
    case 'primaryColor75':
      return css`
        color: ${theme.colors.primaryColor75};
      `;
    case 'white':
      return css`
        color: ${theme.colors.white};
      `;
    default:
      return css`
        color: ${theme.colors.primaryColor};
      `;
  }
};

const getPaddingTop = (theme: DefaultTheme, value: number) => {
  switch (value) {
    case 1:
      return css`
        padding-top: ${theme.padding.xxsmall};
      `;
    case 2:
      return css`
        padding-top: ${theme.padding.xsmall};
      `;
    case 3:
      return css`
        padding-top: ${theme.padding.small};
      `;
    case 4:
      return css`
        padding-top: ${theme.padding.medium};
      `;
    case 5:
      return css`
        padding-top: ${theme.padding.large};
      `;
    default:
      return css`
        padding-top: 0;
      `;
  }
};

export const Title = styled.Text<TypographyStyledProps>`
  ${({
    theme,
    size = 'small',
    color = 'primaryColor',
    paddingTop = 0,
    underline = false,
  }) => css`
    ${getFontSize(theme, size)};

    ${getColor(theme, color)}

    ${getPaddingTop(theme, paddingTop)};

    text-decoration: ${underline ? 'underline' : 'none'};
  `}
`;
