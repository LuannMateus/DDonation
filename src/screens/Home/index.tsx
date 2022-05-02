import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Causes } from '../../components/Causes';
import { DonationPersonCounter } from '../../components/DonationPersonCounter';
import { EmergencyCases } from '../../components/EmergencyCases';
import { Menu } from '../../components/Menu';
import { TDonationRequest } from '../../models/DonationRequest';
import { findAllEmergencyDonationRequests } from '../../api/DonationRequest/findAllEmergencyDonationRequests';
import * as Styled from './styles';
import Axios, { CancelTokenSource } from 'axios';

export const Home = () => {
  const [emergencyDonationRequestState, setEmergencyDonationRequestState] =
    useState<TDonationRequest[]>([]);

  const handleEmergencyRequests = async (source: CancelTokenSource) => {
    try {
      const emergencyDonationRequests = await findAllEmergencyDonationRequests(
        source,
      );

      setEmergencyDonationRequestState(emergencyDonationRequests || []);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const source = Axios.CancelToken.source();

    handleEmergencyRequests(source);

    () => source.cancel();
  }, []);

  return (
    <Styled.Wrapper>
      <StatusBar style="auto" />
      <Menu />
      <DonationPersonCounter />
      <Causes />
      <Styled.EmergencyCasesContainer>
        <EmergencyCases
          cardsData={emergencyDonationRequestState || []}
          category="emergency"
        />
      </Styled.EmergencyCasesContainer>
    </Styled.Wrapper>
  );
};
