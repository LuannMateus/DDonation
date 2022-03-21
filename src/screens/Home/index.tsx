import { StatusBar } from 'expo-status-bar';
import { Causes } from '../../components/Causes';
import { DonationPersonCounter } from '../../components/DonationPersonCounter';
import { Menu } from '../../components/Menu';
import * as Styled from './styles';

export const Home = () => {
  return (
    <Styled.Wrapper>
      <StatusBar style="auto" />
      <Menu />
      <DonationPersonCounter />
      <Causes />
    </Styled.Wrapper>
  );
};
