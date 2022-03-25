import { StatusBar } from 'expo-status-bar';
import { Causes } from '../../components/Causes';
import { DonationPersonCounter } from '../../components/DonationPersonCounter';
import { EmergencyCases } from '../../components/EmergencyCases';
import { Menu } from '../../components/Menu';
import mock from './mock';
import * as Styled from './styles';

export const Home = () => {
  return (
    <Styled.Wrapper>
      <StatusBar style="auto" />
      <Menu />
      <DonationPersonCounter />
      <Causes />
      <Styled.EmergencyCasesContainer>
        <EmergencyCases cardsData={mock.cardsData} />
      </Styled.EmergencyCasesContainer>
    </Styled.Wrapper>
  );
};
