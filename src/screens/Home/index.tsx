import { StatusBar } from 'expo-status-bar';
import { DonationPersonCounter } from '../../components/DonationPersonCounter';
import { Menu } from '../../components/Menu';
import * as Styled from './styles';

export const Home = () => {
  return (
    <Styled.Wrapper>
      <StatusBar style="auto" />
      <Menu />
      <DonationPersonCounter />
    </Styled.Wrapper>
  );
};
