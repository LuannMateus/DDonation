import { ReactNode } from 'react';
import {
  useFonts,
  Poppins_700Bold,
  Poppins_400Regular,
} from '@expo-google-fonts/poppins';
import * as Styled from './styles';

export type TypographyProps = {
  children: ReactNode;
  size?: 'medium' | 'small';
  weight?: 'regular' | 'bold';
};

export const Typography = ({
  children,
  size = 'small',
  weight = 'regular',
}: TypographyProps) => {
  const [loadedFonts] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!loadedFonts) return null;

  return (
    <Styled.Title
      size={size}
      style={{
        fontFamily: `${
          weight === 'regular' ? 'Poppins_400Regular' : 'Poppins_700Bold'
        }`,
      }}
    >
      {children}
    </Styled.Title>
  );
};
