import { StatusBar } from 'expo-status-bar';
import { EmergencyCases } from '../../components/EmergencyCases';
import { GoBack } from '../../components/GoBack';
import { Typography } from '../../components/Typography';
import { useNavigation } from '@react-navigation/native';
import mock from './mock';
import * as Styled from './styles';
import { ImageSourcePropType } from 'react-native';
import { useRoute } from '@react-navigation/native';

export type CauseScreenProps = {
  image: ImageSourcePropType;
  title: string;
  description: string;
};

export const CauseScreen = () => {
  const { image, title, description } = useRoute()[
    'params'
  ] as CauseScreenProps;
  const navigation = useNavigation();

  return (
    <Styled.Wrapper>
      <StatusBar style="auto" />
      <GoBack onPress={() => navigation.goBack()} />
      <Styled.MainImage source={image} />
      <Styled.InfoContainer>
        <Typography size="medium" weight="semiBold" paddingTop={2}>
          {title}
        </Typography>
        <Typography size="xsmall" paddingTop={2} color="primaryColor75">
          {description}
        </Typography>
      </Styled.InfoContainer>

      <Styled.EmergencyCasesContainer>
        <EmergencyCases cardsData={mock.cardsData} />
      </Styled.EmergencyCasesContainer>
    </Styled.Wrapper>
  );
};
