import { Typography } from '../Typography';
import * as Styled from './styles';

export type TouchableProps = {
  title: string;
};

export const Touchable = ({ title }: TouchableProps) => {
  return (
    <Styled.TouchableButton>
      <Typography color="white" weight="bold">
        {title}
      </Typography>
    </Styled.TouchableButton>
  );
};

export const DonationTouchable = ({ title }: TouchableProps) => {
  return (
    <Styled.DonationTouchable>
      <Typography color="white" weight="semiBold">
        {title}
      </Typography>
    </Styled.DonationTouchable>
  );
};
