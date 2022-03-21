import styled, { css, DefaultTheme } from 'styled-components/native';

type TypographyStyledProps = {
  size?: 'medium' | 'small' | 'large';
  color?: 'primaryColor' | 'primaryColor75' | 'white';
};

const getFontSize = (size: string) => {
  switch (size) {
    case 'large':
      return css`
        font-size: 26px;
      `;
    case 'medium':
      return css`
        font-size: 22px;
      `;
    case 'small':
      return css`
        font-size: 18px;
      `;
    default:
      return css`
        font-size: 14px;
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
    ${getFontSize(size)};

    ${getColor(theme, color)}
  `}
`;
