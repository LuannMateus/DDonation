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
  paddingTop?: 0 | 1 | 2 | 3 | 4 | 5;
  underline?: true | false;
};

export const Typography = ({
  children,
  size = 'small',
  weight = 'regular',
  color = 'primaryColor',
  paddingTop = 0,
  underline = false,
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
      paddingTop={paddingTop}
      underline={underline}
    >
      {children}
    </Styled.Title>
  );
};
