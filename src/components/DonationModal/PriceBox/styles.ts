import styled, { css } from 'styled-components/native';
import { PriceBoxProps } from '.';

const getBoxWidth = (price: PriceBoxProps['price']) => {
  switch (price) {
    case 100:
      return css`
        width: 220px;
      `;
    case 50:
      return css`
        width: 180px;
      `;
    case 5:
      return css`
        width: 140px;
      `;
    default:
      return css`
        width: 220px;
      `;
  }
};

export const Wrapper = styled.TouchableOpacity<PriceBoxProps>`
  ${({ theme, price }) => css`
    ${getBoxWidth(price)}

    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #f8f9fd;
    opacity: 0.75;

    margin-top: ${theme.spacings.medium};
  `}
`;
