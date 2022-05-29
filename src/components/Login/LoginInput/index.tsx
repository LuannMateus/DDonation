import { TextInputProps } from 'react-native';
import { theme } from '../../../styles/theme';
import { Typography } from '../../Typography';
import * as Styled from './styles';

export type LoginInputProps = TextInputProps & {
  type?: 'email' | 'password';
};

export const LoginInput = ({ type = 'email', ...args }: LoginInputProps) => {
  return (
    <Styled.Wrapper>
      <Styled.LabelContainer>
        <Typography weight="semiBold" color="primaryColor75">
          {type === 'email' ? 'Email' : 'Password'}
        </Typography>
      </Styled.LabelContainer>
      <Styled.InputAndIconContainer>
        {type === 'email' ? (
          <Styled.Icon
            source={require('../../../assets/images/Icons/EmailIcon.png')}
          />
        ) : (
          <Styled.Icon
            source={require('../../../assets/images/Icons/PasswordIcon.png')}
          />
        )}

        <Styled.Input
          placeholder={type === 'email' ? 'example@gmail.com' : ''}
          placeholderTextColor={theme.colors.primaryBg75}
          keyboardType={type === 'email' ? 'email-address' : 'default'}
          secureTextEntry={type === 'password'}
          {...args}
        />
        {type === 'password' && (
          <Styled.ToggleViewPasswordIcon
            source={require('../../../assets/images/Icons/OpenEyeIcon.png')}
          />
        )}
      </Styled.InputAndIconContainer>
    </Styled.Wrapper>
  );
};
