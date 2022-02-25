import { ReactNode } from 'react';
import styled, { css } from 'styled-components/native';

type GlobalStylesProviderProps = {
  children: ReactNode;
};

export const GlobalStylesProvider = ({
  children,
}: GlobalStylesProviderProps) => {
  return <GlobalStyles>{children}</GlobalStyles>;
};

const GlobalStyles = styled.View`
  ${() => css``}
`;
