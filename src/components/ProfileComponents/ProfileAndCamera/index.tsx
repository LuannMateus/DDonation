import { theme } from '../../../styles/theme';
import { Typography } from '../../Typography';
import { Platform, StatusBar } from 'react-native';
import * as Styled from './styles';
import { useNavigation } from '@react-navigation/native';
import { PropsStack } from '../../../routes/Stack/models';

export const ProfileAndCamera = () => {
  const navigate = useNavigation<PropsStack>();

  return (
    <Styled.Wrapper>
      <Styled.ProfileContainer
        platformSafeArea={
          Platform.OS === 'android' ? StatusBar.currentHeight : 0
        }
      >
        <Styled.BackAndTitleContainer>
          <Styled.TouchableArrow onPress={() => navigate.goBack()}>
            <Styled.BackButtonImage
              source={require('../../../assets/images/Icons/LeftWhiteArrowIcon.png')}
            />
          </Styled.TouchableArrow>
          <Styled.TitleContainer>
            <Typography color="white">Perfil</Typography>
          </Styled.TitleContainer>
        </Styled.BackAndTitleContainer>

        <Styled.ProfileImageContainer>
          <Styled.ProfileImage
            source={require('../../../assets/images/EllieProfileImage.png')}
          />
        </Styled.ProfileImageContainer>

        <Styled.CameraIconContainer
          style={{
            shadowColor: theme.colors.boxShadowColor,
            elevation: 3,
            shadowOffset: {
              width: -2,
              height: 2,
            },
            shadowOpacity: 0.2,
            shadowRadius: 2,
          }}
        >
          <Styled.CameraIconImage
            source={require('../../../assets/images/Icons/CameraIcon.png')}
          />
        </Styled.CameraIconContainer>
        <Styled.NameAndEmailContainer>
          <Typography weight="bold" size="small">
            Ellie William
          </Typography>
          <Typography color="primaryColor75" size="xsmall">
            ellieWilliam@email.com
          </Typography>
        </Styled.NameAndEmailContainer>
      </Styled.ProfileContainer>
    </Styled.Wrapper>
  );
};
