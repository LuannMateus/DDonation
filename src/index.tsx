import Routes from './Routes';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStylesProvider } from './styles/globalStyle';

const Index = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStylesProvider>
        <Routes />
      </GlobalStylesProvider>
    </ThemeProvider>
  );
};

export default Index;
