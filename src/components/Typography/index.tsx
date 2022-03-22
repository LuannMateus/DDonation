import { ReactNode } from 'react';
import {
  useFonts,
  Poppins_700Bold,
  Poppins_400Regular,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';
import * as Styled from './styles';

export type TypographyProps = {
  children: ReactNode;
  size?: 'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large';
  weight?: 'regular' | 'semiBold' | 'bold';
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
    Poppins_600SemiBold,
  });

  if (!loadedFonts) return null;

  return (
    <Styled.Title
      size={size}
      style={{
        fontFamily: `${
          weight === 'regular'
            ? 'Poppins_400Regular'
            : weight === 'semiBold'
            ? 'Poppins_600SemiBold'
            : 'Poppins_700Bold'
        }`,
      }}
      color={color}
    >
      {children}
    </Styled.Title>
  );
};
