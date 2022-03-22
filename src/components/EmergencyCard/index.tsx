import { Typography } from '../Typography';
import * as Styled from './styles';

export const EmergencyCard = () => {
  return (
    <Styled.Wrapper>
      <Styled.EmergencyCardImage
        source={require('../../assets/images/CardImage.png')}
      />
      <Typography weight="bold" size="large">
        Doação de roupas
      </Typography>

      <Styled.DescriptionContainer>
        <Typography size="xsmall" color="primaryColor75">
          0 de 500
        </Typography>
        <Typography size="xsmall" color="primaryColor75">
          5 Dias restantes
        </Typography>
      </Styled.DescriptionContainer>
    </Styled.Wrapper>
  );
};
