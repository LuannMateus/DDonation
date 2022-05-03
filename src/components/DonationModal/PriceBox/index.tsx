import { TouchableOpacityProps } from 'react-native';
import { Typography } from '../../Typography';
import * as Styled from './styles';

export type PriceBoxProps = TouchableOpacityProps & {
  price: 100 | 50 | 5;
};

export const PriceBox = ({ price, ...args }: PriceBoxProps) => {
  return (
    <Styled.Wrapper price={price} {...args}>
      <Typography size="small" color="primaryColor">
        R${price}
      </Typography>
    </Styled.Wrapper>
  );
};
