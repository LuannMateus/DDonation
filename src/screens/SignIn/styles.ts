import styled from 'styled-components/native';

export const Main = styled.View`
  flex: 1;

  width: 100%;

  display: flex;
  justify-content: center;

  padding: 0 20px;
`;

export const InputGroupContainer = styled.View`
  margin-top: 82px;
`;

export const InputContainer = styled.View`
  margin-top: 26px;
`;

export const ForgotPasswordContainer = styled.View`
  width: 100%;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  padding-top: 20px;
`;

export const LoginTouchableContainer = styled.View`
  margin-top: 29px;

  display: flex;
  align-items: center;

  padding-top: 15px;
`;

export const OrContainer = styled.View`
  display: flex;
  align-items: center;

  margin: 15px 0;
`;

export const GoogleTouchableContainer = styled(LoginTouchableContainer)`
  margin-top: 0px;
  padding-top: 0;
  padding-bottom: 18px;
`;

export const ToggleModeContainer = styled.View`
  flex: 1;

  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;

  margin-top: 18px;
  margin-bottom: 18px;
`;

export const ToggleModeInput = styled.TouchableOpacity``;
