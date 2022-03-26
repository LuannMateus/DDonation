import { ImageSourcePropType, TouchableOpacityProps } from 'react-native';
import { Typography } from '../Typography';
import * as Styled from './styles';

export type DonationButtonProps = TouchableOpacityProps & {
  imageRelativePath: ImageSourcePropType;
  title: string;
};

export const DonationButton = ({
  imageRelativePath,
  title,
  ...args
}: DonationButtonProps) => {
  return (
    <Styled.Wrapper {...args}>
      <Styled.DonationImage source={imageRelativePath} />
      <Typography size="xxsmall" weight="semiBold">
        {title}
      </Typography>
    </Styled.Wrapper>
  );
};
