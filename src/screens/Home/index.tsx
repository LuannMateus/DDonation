import { StatusBar } from 'expo-status-bar';
import { Menu } from '../../components/Menu';
import * as Styled from './styles';

export const Home = () => {
  return (
    <Styled.Wrapper>
      <StatusBar style="auto" />
      <Menu />
    </Styled.Wrapper>
  );
};
