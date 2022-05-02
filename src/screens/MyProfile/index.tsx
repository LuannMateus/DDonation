import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Animated } from 'react-native';

import { updateDonorCreditCardById } from '../../api/DonorCreditCard/updateDonorCreditCardById';
import { CreditCard } from '../../components/CreditCard';
import { ProfileAndCamera } from '../../components/ProfileComponents/ProfileAndCamera';
import {
  ProfileInput,
  ProfileTwoColumnsInput,
} from '../../components/ProfileComponents/ProfileInput';
import { Typography } from '../../components/Typography';
import { TDonorCreditCard } from '../../models/DonorCreditCard';
import * as Styled from './styles';

import { TEMPORARY_USER_ID, TEMPORARY_CREDIT_CARD_TYPE_ID } from '@env';

export const MyProfile = () => {
  const [widthAnimated] = useState(new Animated.Value(320));
  const [backView, setBackView] = useState(false);
  const [creditCardState, setCreditCardState] = useState<TDonorCreditCard>({
    id: '',
    creditCardTypeId: '',
    donorId: '',
    holderName: 'John Doe',
    creditCardNumber: '123123123123',
    validity: '1220',
    cvv: 123,
  });

  const handleUpdateCreditCard = async () => {
    const donorCreditCard = {
      creditCardTypeId: TEMPORARY_CREDIT_CARD_TYPE_ID,
      donorId: TEMPORARY_USER_ID,
      holderName: creditCardState.holderName,
      creditCardNumber: creditCardState.creditCardNumber,
      validity: creditCardState.validity,
      cvv: creditCardState.cvv,
    } as TDonorCreditCard;

    try {
      const updatedDonorCreditCard = await updateDonorCreditCardById(
        '26ed226b-9c9e-45c0-b18f-819e637d3dfe',
        donorCreditCard,
      );

      if (!updatedDonorCreditCard) throw new Error();

      setCreditCardState((prevState) => ({
        ...prevState,
        ...updatedDonorCreditCard,
      }));
    } catch (e) {
      console.log(e);
    }
  };

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
            const parsedValue = parseInt(value);

            setCreditCardState((prevState) => ({
              ...prevState,
              cvv: parsedValue,
            }));
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
          onEndEditing={() => handleUpdateCreditCard()}
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
          onEndEditing={() => handleUpdateCreditCard()}
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
            onEndEditing={() => handleUpdateCreditCard()}
          />
          <ProfileTwoColumnsInput
            label="CVV"
            value={creditCardState.cvv.toString()}
            mask
            type="custom"
            options={{
              mask: '9999',
            }}
            keyboardType="numeric"
            marginTop={5}
            onPressIn={() => creditCardAnimation(true)}
            onChangeText={(value) => {
              const parsedValue = parseInt(value);

              setCreditCardState((prevState) => ({
                ...prevState,
                cvv: parsedValue,
              }));
              creditCardAnimation(true);
            }}
            onEndEditing={() => handleUpdateCreditCard()}
          />
        </Styled.DataAndCvvContainer>
      </Styled.CreditCardInfoContainer>
    </Styled.Scroll>
  );
};
