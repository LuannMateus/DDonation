import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { BackButtonAndTitle } from '../../components/BackButtonAndTitle';
import { GoggleButton, LoginButton } from '../../components/Login/LoginButton';
import { SignUpInput } from '../../components/Login/SignUpInput';
import { SafeAreaContainer } from '../../components/SafeAreaContainer';
import { Typography } from '../../components/Typography';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { PropsStack } from '../../routes/Stack/models';

import * as Styled from './styles';

export const SignUp = () => {
  const navigation = useNavigation<PropsStack>();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      console.warn('Passwords do not match');

      return;
    }

    const auth = getAuth();

    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);

      if (user) {
        console.log(user);

        navigation.navigate('Home');
      }
    } catch (e) {
      console.warn('Error: ', e);
    }
  };

  return (
    <SafeAreaContainer>
      <StatusBar style="auto" />
      <BackButtonAndTitle title="Criar Conta" />
      <Styled.Main>
        <SignUpInput
          label="Nome completo"
          placeholder="John Doe"
          onChangeText={(name) => setName(name)}
        />
        <SignUpInput
          label="Email"
          placeholder="example@mail.com"
          onChangeText={(email) => setEmail(email)}
        />
        <SignUpInput
          label="Senha"
          type="password"
          onChangeText={(password) => setPassword(password)}
        />
        <SignUpInput
          label="Confirmar senha"
          type="password"
          onChangeText={(confirmPassword) =>
            setConfirmPassword(confirmPassword)
          }
        />

        <Styled.LoginTouchableContainer>
          <LoginButton onPress={handleSignUp}>
            <Typography color="white" weight="semiBold">
              Criar Conta
            </Typography>
          </LoginButton>
        </Styled.LoginTouchableContainer>
        <Styled.OrContainer>
          <Typography weight="semiBold">OU</Typography>
        </Styled.OrContainer>
        <Styled.GoogleTouchableContainer>
          <GoggleButton>
            <Typography weight="semiBold">Criar com Google</Typography>
          </GoggleButton>
        </Styled.GoogleTouchableContainer>
        <Styled.ToggleModeContainer>
          <Typography>Já possui uma conta? </Typography>
          <Styled.ToggleModeInput>
            <Typography color="primaryColor75" weight="semiBold">
              Criar Conta
            </Typography>
          </Styled.ToggleModeInput>
        </Styled.ToggleModeContainer>
      </Styled.Main>
    </SafeAreaContainer>
  );
};
