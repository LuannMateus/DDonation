import { useNavigation } from '@react-navigation/native';
import { PropsStack } from '../../routes/Stack/models';
import * as Styled from './styles';

export const Profile = () => {
  const navigate = useNavigation<PropsStack>();

  return (
    <Styled.Wrapper onPress={() => navigate.navigate('Profile')}>
      <Styled.ProfileImage
        source={require('../../assets/images/EllieProfileImage.png')}
      />
    </Styled.Wrapper>
  );
};
