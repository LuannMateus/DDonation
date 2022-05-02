import { DonationCard, DonationCardProps } from '../DonationCard';
import { Typography } from '../Typography';
import { useNavigation } from '@react-navigation/native';
import * as Styled from './styles';
import { PropsStack } from '../../routes/Stack/models';
import { TDonationRequest } from '../../models/DonationRequest';

export type EmergencyCasesProps = {
  cardsData: TDonationRequest[];
  category: string;
};

export const EmergencyCases = ({
  cardsData = [],
  category,
}: EmergencyCasesProps) => {
  const navigation = useNavigation<PropsStack>();

  return (
    <Styled.Wrapper>
      <Typography weight="semiBold" size="medium">
        Casos de emergência
      </Typography>
      <Styled.SeeAllContainer
        onPress={() =>
          navigation.navigate('SeeAll', {
            category,
          })
        }
      >
        <Typography size="xsmall" color="primaryColor75" underline>
          Ver todos
        </Typography>
      </Styled.SeeAllContainer>

      <Styled.EmergencyCardList
        keyExtractor={(item) => {
          const typedItem = item as DonationCardProps;

          return typedItem.id;
        }}
        data={cardsData}
        renderItem={({ item }) => {
          const typedItem = item as TDonationRequest;

          return (
            <Styled.TouchableCardButton
              activeOpacity={1}
              onPress={() =>
                navigation.navigate('Donation', { id: typedItem.id })
              }
            >
              <DonationCard {...typedItem} />
            </Styled.TouchableCardButton>
          );
        }}
      />
    </Styled.Wrapper>
  );
};
