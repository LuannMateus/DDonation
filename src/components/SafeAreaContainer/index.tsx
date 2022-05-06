import { ReactNode } from 'react';
import { Platform, StatusBar } from 'react-native';

import * as Styled from './styles';

export type SafeAreaContainerProps = {
  children: ReactNode;
};

export const SafeAreaContainer = ({ children }: SafeAreaContainerProps) => {
  return (
    <Styled.Wrapper
      platformSafeArea={Platform.OS === 'android' ? StatusBar.currentHeight : 0}
    >
      {children}
    </Styled.Wrapper>
  );
};
