import { StatusBar } from 'expo-status-bar';
import { Example } from '../../components/Example';
import * as Styled from './styles';

export const Home = () => {
  return (
    <Styled.Wrapper>
      <StatusBar style="auto" />
      <Example />
    </Styled.Wrapper>
  );
};
