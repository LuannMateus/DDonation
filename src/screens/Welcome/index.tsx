import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { Touchable } from '../../components/Touchable';
import { Typography } from '../../components/Typography';

import * as Styled from './styles';
import { PropsStack } from '../../routes/Stack/models';

export const Welcome = () => {
  const navigation = useNavigation<PropsStack>();

  const navigateToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <Styled.Wrapper>
      <Styled.InfoContainer>
        <StatusBar style="auto" />
        <Styled.Image
          source={require('../../assets/images/DonationIcon.png')}
        />
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
      </Styled.InfoContainer>

      <Styled.TouchableContainer>
        <Touchable title="Ajude-nos" onPress={navigateToHome} />
      </Styled.TouchableContainer>
    </Styled.Wrapper>
  );
};
