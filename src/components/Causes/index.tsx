import { DonationButton } from '../DonationButton';
import { Typography } from '../Typography';
import { useNavigation } from '@react-navigation/native';
import * as Styled from './styles';
import { PropsStack } from '../../routes/Stack/models';

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
          imageRelativePath={require('../../assets/images/Icons/FoodIcon.png')}
          onPress={() =>
            navigation.navigate('Cause', {
              id: 'fc59d520-2337-4e94-804f-26397338e8c6',
            })
          }
        />
        <DonationButton
          title="Educação"
          imageRelativePath={require('../../assets/images/Icons/EducationIcon.png')}
          onPress={() =>
            navigation.navigate('Cause', {
              id: 'fb329890-87a3-4ed0-8aee-e17b1be229ab',
            })
          }
        />
        <DonationButton
          title="Casa"
          imageRelativePath={require('../../assets/images/Icons/HouseIcon.png')}
          onPress={() =>
            navigation.navigate('Cause', {
              id: '51909eff-fcc7-43f3-8339-091ee512ec4b',
            })
          }
        />
        <DonationButton
          title="Brinquedos"
          imageRelativePath={require('../../assets/images/Icons/ToyIcon.png')}
          onPress={() =>
            navigation.navigate('Cause', {
              id: 'a87acf8c-2aa8-4b25-af18-e17fda2ab6f1',
            })
          }
        />
      </Styled.DonationCausesContainer>
    </Styled.Wrapper>
  );
};
