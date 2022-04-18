import { KeyboardTypeOptions, TextInputProps } from 'react-native';
import { Typography } from '../../Typography';
import {
  TextInputMaskOptionProp,
  TextInputMaskTypeProp,
} from 'react-native-masked-text';
import * as Styled from './styles';

export type ProfileInputProps = TextInputProps & {
  label: string;
  value: string;
  marginTop?: 0 | 1 | 2 | 3 | 4 | 5;
  mask?: boolean;
  options?: TextInputMaskOptionProp | undefined;
  type?: TextInputMaskTypeProp | undefined;
  keyboardType?: KeyboardTypeOptions | undefined;
  onChangeText: (value: string) => void;
};

export const ProfileInput = ({
  label,
  value,
  marginTop,
  mask = false,
  options,
  type = 'custom',
  keyboardType = 'default',
  onChangeText,
  onPressIn,
  ...args
}: ProfileInputProps) => {
  return (
    <Styled.Wrapper marginTop={marginTop} {...args}>
      <Styled.LabelContainer>
        <Typography color="primaryColor75">{label}</Typography>
      </Styled.LabelContainer>
      <Styled.InputAndIconContainer>
        {mask ? (
          <Styled.MaskInput
            value={value}
            options={options}
            type={type}
            keyboardType={keyboardType}
            onPressIn={onPressIn}
            onChangeText={(value) => onChangeText(value)}
          />
        ) : (
          <Styled.Input
            value={value}
            onPressIn={onPressIn}
            onChangeText={(value) => onChangeText(value)}
          />
        )}

        <Styled.Icon
          source={require('../../../assets/images/Icons/InputEditIcon.png')}
        />
      </Styled.InputAndIconContainer>
      <Styled.Line />
    </Styled.Wrapper>
  );
};

export const ProfileTwoColumnsInput = ({
  label,
  value,
  mask = false,
  options,
  type = 'custom',
  keyboardType = 'default',
  marginTop,
  onChangeText,
  onPressIn,
  ...args
}: ProfileInputProps) => {
  return (
    <Styled.WrapperTwoColumns marginTop={marginTop} {...args}>
      <Styled.LabelContainer>
        <Typography color="primaryColor75">{label}</Typography>
      </Styled.LabelContainer>
      <Styled.InputAndIconContainer>
        {mask ? (
          <Styled.MaskInputTwoColumns
            value={value}
            options={options}
            type={type}
            keyboardType={keyboardType}
            onPressIn={onPressIn}
            onChangeText={(value) => onChangeText(value)}
          />
        ) : (
          <Styled.InputTwoColumns
            value={value}
            onChangeText={(value) => onChangeText(value)}
            onPressIn={onPressIn}
          />
        )}
        <Styled.Icon
          source={require('../../../assets/images/Icons/InputEditIcon.png')}
        />
      </Styled.InputAndIconContainer>
      <Styled.Line />
    </Styled.WrapperTwoColumns>
  );
};
