import { ReactNode } from 'react';
import {
  useFonts,
  Poppins_700Bold,
  Poppins_400Regular,
} from '@expo-google-fonts/poppins';
import * as Styled from './styles';

export type TypographyProps = {
  children: ReactNode;
  size?: 'medium' | 'small' | 'large';
  weight?: 'regular' | 'bold';
  color?: 'primaryColor' | 'primaryColor75' | 'white';
};

export const Typography = ({
  children,
  size = 'small',
  weight = 'regular',
  color = 'primaryColor',
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
      color={color}
    >
      {children}
    </Styled.Title>
  );
};
