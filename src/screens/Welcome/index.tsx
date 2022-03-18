import { StatusBar } from 'expo-status-bar';
import { Touchable } from '../../components/Touchable';
import { Typography } from '../../components/Typography';
import * as Styled from './styles';

export const Welcome = () => {
  return (
    <Styled.Wrapper>
      <StatusBar style="auto" />
      <Styled.Image source={require('../../assets/images/DonationIcon.png')} />
      <Styled.TitleContainer>
        <Typography weight="bold" size="medium" color="primaryColor">
          Uma missão que visa ajudar os mais necessitados
        </Typography>
      </Styled.TitleContainer>

      <Styled.DescriptionContainer>
        <Typography weight="regular" size="small" color="primaryColor75">
          Ajudar os mais necessitados é uma missão e nós buscamos cumpri-lá da
          melhor forma.
        </Typography>
      </Styled.DescriptionContainer>
      <Styled.TouchableContainer>
        <Touchable title="Ajude-nos" />
      </Styled.TouchableContainer>
    </Styled.Wrapper>
  );
};
