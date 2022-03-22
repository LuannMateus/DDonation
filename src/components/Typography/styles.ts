import styled, { css, DefaultTheme } from 'styled-components/native';

type TypographyStyledProps = {
  size?: 'xxsmall' | 'xsmall' | 'medium' | 'small' | 'large';
  color?: 'primaryColor' | 'primaryColor75' | 'white';
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

export const Title = styled.Text<TypographyStyledProps>`
  ${({ theme, size = 'small', color = 'primaryColor' }) => css`
    ${getFontSize(theme, size)};

    ${getColor(theme, color)}
  `}
`;
