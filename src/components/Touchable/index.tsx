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
