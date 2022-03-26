import { EmergencyCard, EmergencyCardProps } from '../EmergencyCard';
import { Typography } from '../Typography';
import { useNavigation } from '@react-navigation/native';
import * as Styled from './styles';
import { PropsStack } from '../../routes/Stack/models';
import mock from '../../screens/Donation/mock';

export type EmergencyCasesProps = {
  cardsData: EmergencyCardProps[];
};

export const EmergencyCases = ({ cardsData = [] }: EmergencyCasesProps) => {
  const navigation = useNavigation<PropsStack>();

  return (
    <Styled.Wrapper>
      <Typography weight="semiBold" size="medium">
        Casos de emergência
      </Typography>
      <Styled.SeeAllContainer>
        <Typography size="xsmall" color="primaryColor75" underline>
          Ver todos
        </Typography>
      </Styled.SeeAllContainer>

      <Styled.EmergencyCardList
        keyExtractor={(item) => {
          const typedItem = item as EmergencyCardProps;

          return typedItem.id;
        }}
        data={cardsData}
        renderItem={({ item }) => {
          return (
            <Styled.TouchableCardButton
              activeOpacity={1}
              onPress={() => navigation.navigate('Donation', { ...mock })}
            >
              <EmergencyCard {...(item as EmergencyCardProps)} />
            </Styled.TouchableCardButton>
          );
        }}
      />
    </Styled.Wrapper>
  );
};
