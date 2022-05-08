import { StatusBar } from 'expo-status-bar';
import { BackButtonAndTitle } from '../../components/BackButtonAndTitle';
import { GoggleButton, LoginButton } from '../../components/Login/LoginButton';
import { SignUpInput } from '../../components/Login/SignUpInput';
import { SafeAreaContainer } from '../../components/SafeAreaContainer';
import { Typography } from '../../components/Typography';

import * as Styled from './styles';

export const SignUp = () => {
  return (
    <SafeAreaContainer>
      <StatusBar style="auto" />
      <BackButtonAndTitle title="Criar Conta" />
      <Styled.Main>
        <SignUpInput label="Nome completo" placeholder="John Doe" />
        <SignUpInput label="Email" placeholder="example@mail.com" />
        <SignUpInput label="Senha" type="password" />
        <SignUpInput label="Confirmar senha" type="password" />

        <Styled.LoginTouchableContainer>
          <LoginButton>
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
          <Typography>Não possui uma conta? </Typography>
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
