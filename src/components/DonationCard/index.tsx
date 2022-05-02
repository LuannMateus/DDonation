import { Typography } from '../Typography';
import * as Styled from './styles';

export type DonationCardProps = {
  id: string;
  title: string;
  target: number;
  daysRemaining: number;
  image: string;
};

export const DonationCard = ({
  id,
  title = '',
  target = 0,
  daysRemaining = 0,
  image,
}: DonationCardProps) => {
  return (
    <Styled.Wrapper testID={id}>
      <Styled.DonationCardCardImage
        source={{
          uri: image,
        }}
      />
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
