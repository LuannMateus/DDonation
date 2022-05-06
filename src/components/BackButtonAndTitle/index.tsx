import { useNavigation } from '@react-navigation/native';
import { PropsStack } from '../../routes/Stack/models';
import { Typography } from '../Typography';

import * as Styled from './styles';

export const BackButtonAndTitle = () => {
  const navigate = useNavigation<PropsStack>();

  return (
    <Styled.Wrapper>
      <Styled.TouchableArrow onPress={() => navigate.goBack()}>
        <Styled.BackButtonImage
          source={require('../../assets/images/Icons/LeftPurpleArrowIcon.png')}
        />
      </Styled.TouchableArrow>
      <Styled.TitleContainer>
        <Typography color="primaryColor" weight="semiBold">
          Entrar
        </Typography>
      </Styled.TitleContainer>
    </Styled.Wrapper>
  );
};
