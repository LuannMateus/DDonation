import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { DonationCard } from '../../components/DonationCard';
import { GoBack } from '../../components/GoBack';
import { PropsStack } from '../../routes/Stack/models';
import { useCallback, useEffect, useState } from 'react';
import { TDonationRequest } from '../../models/DonationRequest';
import { findAllDonationRequestsByCategory } from '../../api/DonationRequest/findAllDonationRequestsByCategory';
import * as Styled from './styles';
import { findAllEmergencyDonationRequests } from '../../api/DonationRequest/findAllEmergencyDonationRequests';

export const SeeAll = () => {
  const navigation = useNavigation<PropsStack>();
  const { category } = useRoute().params as { category: string };

  const [donationRequestState, setDonationRequestState] =
    useState<TDonationRequest[]>();

  const handleSeeAllDonationRequest = useCallback(async () => {
    try {
      let donationRequests;

      if (category === 'emergency') {
        donationRequests = await findAllEmergencyDonationRequests();
      } else {
        donationRequests = await findAllDonationRequestsByCategory(category);
      }

      if (!donationRequests) throw new Error('Não foi possível encontrar');

      setDonationRequestState(donationRequests);
    } catch (e) {
      console.log(e);
    }
  }, [category]);

  useEffect(() => {
    handleSeeAllDonationRequest();
  }, [handleSeeAllDonationRequest]);

  return (
    <Styled.Wrapper>
      <StatusBar style="auto" />
      <GoBack onPress={() => navigation.goBack()} />
      <Styled.SeeAllList
        data={donationRequestState}
        renderItem={({ item }) => {
          const typedItem = item as TDonationRequest;

          return (
            <Styled.SeeAllTouchable
              activeOpacity={1}
              onPress={() =>
                navigation.navigate('Donation', { id: typedItem.id })
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
