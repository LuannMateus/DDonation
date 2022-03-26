import { Typography } from '../../Typography';
import * as Styled from './styles';

export type PriceBoxProps = {
  price: 100 | 50 | 5;
};

export const PriceBox = ({ price }: PriceBoxProps) => {
  return (
    <Styled.Wrapper price={price}>
      <Typography size="small" color="primaryColor">
        R${price}
      </Typography>
    </Styled.Wrapper>
  );
};
