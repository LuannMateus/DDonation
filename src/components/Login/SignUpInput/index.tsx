import { TextInputProps } from 'react-native';
import { Typography } from '../../Typography';
import * as Styled from './styles';

export type SignUpInputProps = TextInputProps & {
  label: string;
  type?: 'default' | 'password';
};

export const SignUpInput = ({
  label,
  type = 'default',
  ...args
}: SignUpInputProps) => {
  return (
    <Styled.Wrapper>
      <Styled.LabelContainer>
        <Typography color="primaryColor75">{label}</Typography>
      </Styled.LabelContainer>
      <Styled.InputAndIconContainer>
        <Styled.Input {...args} type={type} />
        {type === 'password' && (
          <Styled.ToggleViewPasswordIcon
            source={require('../../../assets/images/Icons/OpenEyeIcon.png')}
          />
        )}
      </Styled.InputAndIconContainer>
      <Styled.Line />
    </Styled.Wrapper>
  );
};
