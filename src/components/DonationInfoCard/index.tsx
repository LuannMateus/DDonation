import { Typography } from '../Typography';
import * as Styled from './styles';

export type DonationInfoCardProps = {
  image: string | undefined;
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
      <Styled.MainImage
        source={{
          uri: image,
        }}
      />
      <Styled.DonationInfoContainer>
        <Styled.TitleContainer>
          <Typography size="medium" weight="semiBold" paddingTop={2}>
            {title}
          </Typography>
        </Styled.TitleContainer>

        <Styled.DaysRemainingContainer>
          <Typography size="xsmall" weight="regular" paddingTop={2}>
            {daysRemaining} dias restantes
          </Typography>
        </Styled.DaysRemainingContainer>

        <Styled.ByContainer>
          <Typography size="xsmall" color="primaryColor75">
            Por{' '}
          </Typography>
          <Typography size="xsmall" weight="bold">
            {by}
          </Typography>
        </Styled.ByContainer>
      </Styled.DonationInfoContainer>
    </Styled.Wrapper>
  );
};
