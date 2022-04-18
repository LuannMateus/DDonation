import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { LogoutButton } from '../../components/ProfileComponents/LogoutButton';
import { ProfileAndCamera } from '../../components/ProfileComponents/ProfileAndCamera';
import { ProfileOption } from '../../components/ProfileComponents/ProfileOption';
import { PropsStack } from '../../routes/Stack/models';
import * as Styled from './styles';

export const Profile = () => {
  const navigation = useNavigation<PropsStack>();

  return (
    <Styled.Wrapper>
      <StatusBar style="auto" />
      <ProfileAndCamera />
      <Styled.OptionsContainer>
        <ProfileOption
          icon={require('../../assets/images/Icons/MyProfileIcon.png')}
          label="Meu perfil"
          onPress={() => navigation.navigate('MyProfile')}
        />
        <ProfileOption
          icon={require('../../assets/images/Icons/ProfileDonationIcon.png')}
          label="Doações"
        />
        <ProfileOption
          icon={require('../../assets/images/Icons/SettingsIcon.png')}
          label="Configurações"
        />
      </Styled.OptionsContainer>
      <LogoutButton />
    </Styled.Wrapper>
  );
};
