import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import { theme } from '../styles/theme';
import Stack from './Stack';

export default function Routes() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    </ThemeProvider>
  );
}
