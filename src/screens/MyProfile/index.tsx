import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Animated } from 'react-native';
import { CreditCard } from '../../components/CreditCard';
import { ProfileAndCamera } from '../../components/ProfileComponents/ProfileAndCamera';
import {
  ProfileInput,
  ProfileTwoColumnsInput,
} from '../../components/ProfileComponents/ProfileInput';
import { Typography } from '../../components/Typography';
import { TCreditCard } from '../../models/CreditCard/CreditCard';
import * as Styled from './styles';

export const MyProfile = () => {
  const [widthAnimated] = useState(new Animated.Value(320));
  const [backView, setBackView] = useState(false);
  const [creditCardState, setCreditCardState] = useState<TCreditCard>({
    holderName: 'John Doe',
    creditCardNumber: '000 000 000 000',
    cvv: '123',
    validity: '12/20',
  });

  const creditCardAnimation = (showBack: boolean) => {
    if (showBack && !backView) {
      Animated.timing(widthAnimated, {
        toValue: 0,
        duration: 400,
        useNativeDriver: false,
      }).start();

      setTimeout(() => {
        Animated.timing(widthAnimated, {
          toValue: 320,
          duration: 400,
          useNativeDriver: false,
        }).start();

        setBackView(true);
      }, 400);
    }

    if (!showBack && backView) {
      Animated.timing(widthAnimated, {
        toValue: 0,
        duration: 400,
        useNativeDriver: false,
      }).start();

      setTimeout(() => {
        Animated.timing(widthAnimated, {
          toValue: 320,
          duration: 400,
          useNativeDriver: false,
        }).start();

        setBackView(false);
      }, 400);
    }
  };

  return (
    <Styled.Scroll>
      <StatusBar style="auto" />
      <Styled.Header>
        <ProfileAndCamera />
      </Styled.Header>
      <Styled.NameAndEmailInputContainer>
        <ProfileInput
          label="Nome completo"
          value="Ellie Wiliam"
          onChangeText={(value) => {
            setCreditCardState((prevState) => ({
              ...prevState,
              holderName: value,
            }));
            creditCardAnimation(false);
          }}
        />
        <ProfileInput
          label="Email"
          value="ellieWiliam@gmail.com"
          keyboardType="email-address"
          marginTop={5}
          onChangeText={(value) => {
            setCreditCardState((prevState) => ({ ...prevState, cvv: value }));
            creditCardAnimation(false);
          }}
        />
      </Styled.NameAndEmailInputContainer>
      <Styled.PaymentMethodContainer>
        <Typography weight="semiBold" size="small">
          Métodos de pagamento
        </Typography>
        <Styled.CreditCardIconContainer>
          <Styled.CreditCardIcon
            source={require('../../assets/images/Icons/CardIcon.png')}
          />
        </Styled.CreditCardIconContainer>

        <Styled.CreditCardContainer>
          <Animated.View style={{ width: widthAnimated }}>
            <CreditCard backView={backView} {...creditCardState} />
          </Animated.View>
        </Styled.CreditCardContainer>
      </Styled.PaymentMethodContainer>
      <Styled.CreditCardInfoContainer>
        <ProfileInput
          label="Nome do Titular"
          value={creditCardState.holderName}
          onPressIn={() => creditCardAnimation(false)}
          onChangeText={(value) => {
            setCreditCardState((prevState) => ({
              ...prevState,
              holderName: value,
            }));
            creditCardAnimation(false);
          }}
        />
        <ProfileInput
          label="Número do Cartão"
          value={creditCardState.creditCardNumber}
          mask
          type="credit-card"
          keyboardType="numeric"
          marginTop={5}
          onPressIn={() => creditCardAnimation(false)}
          onChangeText={(value) => {
            setCreditCardState((prevState) => ({
              ...prevState,
              creditCardNumber: value,
            }));
            creditCardAnimation(false);
          }}
        />
        <Styled.DataAndCvvContainer>
          <ProfileTwoColumnsInput
            label="Data"
            value={creditCardState.validity}
            mask
            type="custom"
            options={{
              mask: '99/99',
            }}
            keyboardType="numeric"
            marginTop={5}
            onPressIn={() => creditCardAnimation(false)}
            onChangeText={(value) => {
              setCreditCardState((prevState) => ({
                ...prevState,
                validity: value,
              }));
              creditCardAnimation(false);
            }}
          />
          <ProfileTwoColumnsInput
            label="CVV"
            value={creditCardState.cvv}
            mask
            type="custom"
            options={{
              mask: '9999',
            }}
            keyboardType="numeric"
            marginTop={5}
            onPressIn={() => creditCardAnimation(true)}
            onChangeText={(value) => {
              setCreditCardState((prevState) => ({ ...prevState, cvv: value }));
              creditCardAnimation(true);
            }}
          />
        </Styled.DataAndCvvContainer>
      </Styled.CreditCardInfoContainer>
    </Styled.Scroll>
  );
};
