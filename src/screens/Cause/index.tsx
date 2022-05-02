import { StatusBar } from 'expo-status-bar';
import { EmergencyCases } from '../../components/EmergencyCases';
import { GoBack } from '../../components/GoBack';
import { Typography } from '../../components/Typography';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Styled from './styles';
import { useCallback, useEffect, useState } from 'react';
import { findCauseById } from '../../api/Cause/findCauseById';
import { TCause } from '../../models/Cause';
import { TDonationRequest } from '../../models/DonationRequest';
import Axios, { CancelTokenSource } from 'axios';
import { findAllDonationRequestsByCategoryAndEmergency } from '../../api/DonationRequest/findAllDonationRequestsByCategoryAndEmergency';

export const CauseScreen = () => {
  const navigation = useNavigation();

  const { id } = useRoute().params as { id: string };

  const [causeState, setCauseState] = useState<TCause>();
  const [donationRequestsState, setDonationRequestsState] = useState<
    TDonationRequest[]
  >([]);

  const handleCause = useCallback(
    async (cancelToken: CancelTokenSource) => {
      try {
        const cause = await findCauseById(id, cancelToken);

        if (!cause) throw new Error('Cause not found');

        setCauseState(cause);
      } catch (e) {
        console.log(e);
      }
    },
    [id],
  );

  const handleDonationRequests = useCallback(
    async (cancelToken: CancelTokenSource) => {
      try {
        if (!causeState?.category) {
          return null;
        }

        const donationRequests =
          await findAllDonationRequestsByCategoryAndEmergency(
            causeState?.category || '',
            true,
            cancelToken,
          );

        if (!donationRequests) throw new Error('Donation requests not found');

        setDonationRequestsState(donationRequests);
      } catch (e) {
        console.log(e);
      }
    },
    [causeState?.category],
  );

  useEffect(() => {
    const source = Axios.CancelToken.source();

    handleCause(source);
    handleDonationRequests(source);

    () => source.cancel();
  }, [handleCause, handleDonationRequests]);

  return (
    <Styled.Wrapper>
      <StatusBar style="auto" />
      <GoBack onPress={() => navigation.goBack()} />
      <Styled.MainImage
        source={{
          uri: causeState?.image,
        }}
      />
      <Styled.InfoContainer>
        <Typography size="medium" weight="semiBold" paddingTop={2}>
          {causeState?.title}
        </Typography>
        <Typography size="xsmall" paddingTop={2} color="primaryColor75">
          {causeState?.description}
        </Typography>
      </Styled.InfoContainer>

      <Styled.EmergencyCasesContainer>
        <EmergencyCases
          cardsData={donationRequestsState || []}
          category={causeState?.category || ''}
        />
      </Styled.EmergencyCasesContainer>
    </Styled.Wrapper>
  );
};
