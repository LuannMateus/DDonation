import { StatusBar } from 'expo-status-bar';
import { LogoutButton } from '../../components/ProfileComponents/LogoutButton';
import { ProfileAndCamera } from '../../components/ProfileComponents/ProfileAndCamera';
import { ProfileOption } from '../../components/ProfileComponents/ProfileOption';
import * as Styled from './styles';

export const Profile = () => {
  return (
    <Styled.Wrapper>
      <StatusBar style="auto" />
      <ProfileAndCamera />
      <Styled.OptionsContainer>
        <ProfileOption
          icon={require('../../assets/images/Icons/MyProfileIcon.png')}
          label="Meu perfil"
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
