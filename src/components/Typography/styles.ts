import styled, { css } from 'styled-components/native';
import { TypographyProps } from '.';

const getFontSize = (size: string) => {
  switch (size) {
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

export const Title = styled.Text<Pick<TypographyProps, 'size'>>`
  ${({ size = 'small' }) => css`
    ${getFontSize(size)};
  `}
`;
