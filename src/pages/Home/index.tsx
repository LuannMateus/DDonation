import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import * as Styled from './styles';

export const Home = () => {
  return (
    <Styled.Wrapper>
      <Text>Hello World!</Text>
      <StatusBar style="auto" />
    </Styled.Wrapper>
  );
};
