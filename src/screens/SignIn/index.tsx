import { StatusBar } from 'expo-status-bar';
import { BackButtonAndTitle } from '../../components/BackButtonAndTitle';
import { GoggleButton, LoginButton } from '../../components/Login/LoginButton';
import { LoginInput } from '../../components/Login/LoginInput';
import { SafeAreaContainer } from '../../components/SafeAreaContainer';
import { Typography } from '../../components/Typography';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import * as Styled from './styles';
import { useState } from 'react';
import { PropsStack } from '../../routes/Stack/models';
import { useNavigation } from '@react-navigation/native';

export const SignIn = () => {
  const navigation = useNavigation<PropsStack>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    if (email === '' || password === '') {
      console.warn('Email or password is empty');
    }

    console.log(email, password);

    const auth = getAuth();

    try {
      const user = await signInWithEmailAndPassword(auth, email, password);

      if (user) {
        console.log(user);

        navigation.navigate('Home');
      } else {
        console.warn('User not found');
      }
    } catch (e) {
      console.warn('Error: ', e);
    }
  };

  return (
    <SafeAreaContainer>
      <StatusBar style="auto" />
      <BackButtonAndTitle title="Entrar" />
      <Styled.Main>
        <Styled.InputGroupContainer>
          <Styled.InputContainer>
            <LoginInput onChangeText={(email) => setEmail(email)} />
          </Styled.InputContainer>
          <Styled.InputContainer>
            <LoginInput
              type="password"
              onChangeText={(password) => setPassword(password)}
            />
          </Styled.InputContainer>
        </Styled.InputGroupContainer>
        <Styled.ForgotPasswordContainer>
          <Typography size="xsmall" color="primaryColor75" weight="semiBold">
            Esqueceu a senha?
          </Typography>
        </Styled.ForgotPasswordContainer>
        <Styled.LoginTouchableContainer>
          <LoginButton onPress={handleSignIn}>
            <Typography color="white" weight="semiBold">
              Entrar
            </Typography>
          </LoginButton>
        </Styled.LoginTouchableContainer>
        <Styled.OrContainer>
          <Typography weight="semiBold">OU</Typography>
        </Styled.OrContainer>
        <Styled.GoogleTouchableContainer>
          <GoggleButton>
            <Typography weight="semiBold">Entrar com Google</Typography>
          </GoggleButton>
        </Styled.GoogleTouchableContainer>
        <Styled.ToggleModeContainer>
          <Typography>Não possui uma conta? </Typography>
          <Styled.ToggleModeInput>
            <Typography color="primaryColor75" weight="semiBold">
              Entrar na Conta
            </Typography>
          </Styled.ToggleModeInput>
        </Styled.ToggleModeContainer>
      </Styled.Main>
    </SafeAreaContainer>
  );
};
