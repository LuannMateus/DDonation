import { DonationButton } from '../DonationButton';
import { Typography } from '../Typography';
import { useNavigation } from '@react-navigation/native';
import * as Styled from './styles';
import { PropsStack } from '../../routes/Stack/models';
import { CauseScreenProps } from '../../screens/Cause';
import mock from './mock';

export type CausesProps = {
  causes: CauseScreenProps[];
};

export const Causes = () => {
  const navigation = useNavigation<PropsStack>();

  return (
    <Styled.Wrapper>
      <Typography weight="semiBold" size="medium">
        Causas
      </Typography>
      <Styled.DonationCausesContainer>
        <DonationButton
          title="Comida"
          imageRelativePath={require('../../assets/images/FoodIcon.png')}
          onPress={() => navigation.navigate('Cause', { ...mock.causes[0] })}
        />
        <DonationButton
          title="Educação"
          imageRelativePath={require('../../assets/images/EducationIcon.png')}
          onPress={() => navigation.navigate('Cause', { ...mock.causes[1] })}
        />
        <DonationButton
          title="Casa"
          imageRelativePath={require('../../assets/images/HouseIcon.png')}
          onPress={() => navigation.navigate('Cause', { ...mock.causes[2] })}
        />
        <DonationButton
          title="Brinquedos"
          imageRelativePath={require('../../assets/images/ToyIcon.png')}
          onPress={() => navigation.navigate('Cause', { ...mock.causes[3] })}
        />
      </Styled.DonationCausesContainer>
    </Styled.Wrapper>
  );
};
