import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { DonationCard, DonationCardProps } from '../../components/DonationCard';
import { GoBack } from '../../components/GoBack';
import { PropsStack } from '../../routes/Stack/models';
import mock from './mock';
import donationMock from '../Donation/mock';
import * as Styled from './styles';

export const SeeAll = () => {
  const navigation = useNavigation<PropsStack>();

  return (
    <Styled.Wrapper>
      <StatusBar style="auto" />
      <GoBack onPress={() => navigation.goBack()} />
      <Styled.SeeAllList
        data={mock.cardsData}
        renderItem={({ item }) => {
          const typedItem = item as DonationCardProps;

          return (
            <Styled.SeeAllTouchable
              activeOpacity={1}
              onPress={() =>
                navigation.navigate('Donation', { ...donationMock })
              }
            >
              <DonationCard {...typedItem} />
            </Styled.SeeAllTouchable>
          );
        }}
      />
    </Styled.Wrapper>
  );
};
