import { StatusBar } from 'expo-status-bar';
import { Typography } from '../../components/Typography';
import * as Styled from './styles';

export const Welcome = () => {
  return (
    <Styled.Wrapper>
      <StatusBar style="auto" />
      <Styled.Image source={require('../../assets/images/DonationIcon.png')} />
      <Typography weight="bold" size="medium">
        Uma missão que visa ajudar os mais necessitados
      </Typography>
      <Typography weight="regular" size="small">
        Ajudar os mais necessitados é uma missão e nós buscamos cumpri-lá da
        melhor forma.
      </Typography>
    </Styled.Wrapper>
  );
};
