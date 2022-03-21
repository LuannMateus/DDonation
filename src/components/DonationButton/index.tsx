import { ImageSourcePropType } from 'react-native';
import { Typography } from '../Typography';
import * as Styled from './styles';

export type DonationButtonProps = {
  imageRelativePath: ImageSourcePropType;
  title: string;
};

export const DonationButton = ({
  imageRelativePath,
  title,
}: DonationButtonProps) => {
  return (
    <Styled.Wrapper>
      <Styled.DonationImage source={imageRelativePath} />
      <Typography size="xxsmall" weight="semiBold">
        {title}
      </Typography>
    </Styled.Wrapper>
  );
};
