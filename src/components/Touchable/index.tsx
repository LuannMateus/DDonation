import { TouchableOpacityProps } from 'react-native';
import { Typography } from '../Typography';
import * as Styled from './styles';

export type TouchableProps = TouchableOpacityProps & {
  title: string;
};

export const Touchable = ({ title, ...args }: TouchableProps) => {
  return (
    <Styled.TouchableButton {...args}>
      <Typography color="white" weight="bold">
        {title}
      </Typography>
    </Styled.TouchableButton>
  );
};

export const DonationTouchable = ({ title, onPress }: TouchableProps) => {
  return (
    <Styled.DonationTouchable onPress={onPress}>
      <Typography color="white" weight="semiBold">
        {title}
      </Typography>
    </Styled.DonationTouchable>
  );
};
