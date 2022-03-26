import { ImageSourcePropType } from 'react-native';
import { Typography } from '../Typography';
import * as Styled from './styles';

export type DonationCardProps = {
  id: string;
  title: string;
  target: string;
  daysRemaining: number;
  cardImage: ImageSourcePropType;
};

export const DonationCard = ({
  id,
  title = '',
  target = '',
  daysRemaining = 0,
  cardImage,
}: DonationCardProps) => {
  return (
    <Styled.Wrapper testID={id}>
      <Styled.DonationCardCardImage source={cardImage} />
      <Typography weight="bold" size="medium" paddingTop={1}>
        {title}
      </Typography>

      <Styled.DescriptionContainer>
        <Typography size="xsmall" color="primaryColor75">
          {target}
        </Typography>
        <Typography size="xsmall" color="primaryColor75">
          {daysRemaining} Dias restantes
        </Typography>
      </Styled.DescriptionContainer>
    </Styled.Wrapper>
  );
};
