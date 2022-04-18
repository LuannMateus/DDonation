import { ImageSourcePropType } from 'react-native';
import { Typography } from '../Typography';
import * as Styled from './styles';

export type DonationInfoCardProps = {
  image: ImageSourcePropType;
  title: string;
  daysRemaining: number;
  by: string;
};

export const DonationInfoCard = ({
  image,
  title,
  daysRemaining,
  by,
}: DonationInfoCardProps) => {
  return (
    <Styled.Wrapper>
      <Styled.MainImage source={image} />
      <Styled.DonationInfoContainer>
        <Styled.TitleAndTimeContainer>
          <Typography size="medium" weight="semiBold" paddingTop={2}>
            {title}
          </Typography>
          <Typography size="xsmall" weight="regular" paddingTop={2}>
            {daysRemaining} dias restantes
          </Typography>
        </Styled.TitleAndTimeContainer>

        <Styled.ByContainer>
          <Typography size="xsmall" color="primaryColor75">
            Por
          </Typography>
          <Typography size="xsmall" weight="bold">
            {by}
          </Typography>
        </Styled.ByContainer>
      </Styled.DonationInfoContainer>
    </Styled.Wrapper>
  );
};
