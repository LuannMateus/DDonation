import { ImageSourcePropType } from 'react-native';
import { Typography } from '../Typography';
import * as Styled from './styles';

export type EmergencyCardProps = {
  id: string;
  title: string;
  target: string;
  daysRemaining: number;
  cardImage: ImageSourcePropType;
};

export const EmergencyCard = ({
  id,
  title = '',
  target = '',
  daysRemaining = 0,
  cardImage,
}: EmergencyCardProps) => {
  return (
    <Styled.Wrapper testID={id}>
      <Styled.EmergencyCardImage source={cardImage} />
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
