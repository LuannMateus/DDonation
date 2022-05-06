import { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { theme } from '../../../styles/theme';
import { Typography } from '../../Typography';
import * as Styled from './styles';

export type LoginInputProps = TouchableOpacityProps & {
  children?: ReactNode;
};

export const LoginButton = ({ children, ...args }: LoginInputProps) => {
  return (
    <Styled.Wrapper
      style={{
        shadowColor: `${theme.colors.boxShadowColor}`,
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 20,
      }}
      {...args}
    >
      {children}
    </Styled.Wrapper>
  );
};

export const GoggleButton = ({ ...args }: LoginInputProps) => {
  return (
    <Styled.GoogleWrapper
      style={{
        shadowColor: `${theme.colors.boxShadowColor}`,
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 20,
      }}
      {...args}
    >
      <Styled.GoogleIcon
        source={require('../../../assets/images/Icons/GoogleIcon.png')}
      />
      <Typography weight="semiBold">Entrar com Google</Typography>
    </Styled.GoogleWrapper>
  );
};
