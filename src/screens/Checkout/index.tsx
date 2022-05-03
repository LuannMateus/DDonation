import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useState } from 'react';
import { ImageSourcePropType, Platform, StatusBar } from 'react-native';
import { findDonationRequestById } from '../../api/DonationRequest/findDonationRequestById';
import { CreditCard } from '../../components/CreditCard';
import { DonationInfoCard } from '../../components/DonationInfoCard';
import { GoBack } from '../../components/GoBack';
import { DonationTouchable } from '../../components/Touchable';
import { Typography } from '../../components/Typography';
import { TCheckout } from '../../models/Checkout';
import { TDonationRequest } from '../../models/DonationRequest';
import { PropsStack } from '../../routes/Stack/models';

import * as Styled from './styles';

export type CheckoutProps = {
  image: ImageSourcePropType;
  title: string;
  daysRemaining: number;
  by: string;
  description: string;
};

export const Checkout = () => {
  const navigation = useNavigation<PropsStack>();
  const { amount, donationRequestId, donorId } = useRoute().params as TCheckout;

  const [donationRequestState, setDonationRequestState] =
    useState<TDonationRequest>();

  const creditCardInfo = {
    holderName: 'John Doe',
    creditCardNumber: '000 000 000 000',
    cvv: '123',
    validity: '12/20',
  };

  const handleDonationRequest = useCallback(async () => {
    try {
      const donationRequest = await findDonationRequestById(donationRequestId);

      setDonationRequestState(donationRequest);
    } catch (e) {
      console.log(e);
    }
  }, [donationRequestId]);

  useEffect(() => {
    handleDonationRequest();
  }, [handleDonationRequest]);

  return (
    <Styled.ScrollWrapper>
      <Styled.Wrapper
        platformSafeArea={
          Platform.OS === 'android' ? StatusBar.currentHeight : 0
        }
      >
        <ExpoStatusBar style="auto" />
        <Styled.BackAndTitleContainer>
          <GoBack onPress={() => navigation.goBack()} />
          <Styled.ScreenTitleContainer>
            <Typography weight="semiBold">Checkout</Typography>
          </Styled.ScreenTitleContainer>
        </Styled.BackAndTitleContainer>
        <Typography weight="semiBold">Método de pagamento</Typography>
        <Styled.PaymentMethodContainer>
          <Styled.CreditCardIconContainer>
            <Styled.CreditCardIcon
              source={require('../../assets/images/Icons/CardIcon.png')}
            />
          </Styled.CreditCardIconContainer>
          {/* <CreditCard {...creditCardInfo} /> */}
        </Styled.PaymentMethodContainer>

        <Typography paddingTop={5} weight="semiBold">
          Doando para
        </Typography>
        <Styled.DonationInfoCardContainer>
          <DonationInfoCard
            title={donationRequestState?.title || ''}
            image={donationRequestState?.image || undefined}
            daysRemaining={donationRequestState?.daysRemaining || 0}
            by={donationRequestState?.owner?.firstName || ''}
          />
        </Styled.DonationInfoCardContainer>

        <Styled.TotalContainer>
          <Typography weight="semiBold">Total</Typography>
          <Typography weight="semiBold">R$ {amount}</Typography>
        </Styled.TotalContainer>
        <Styled.TouchableDonationContainer>
          <DonationTouchable title="Finalizar" />
        </Styled.TouchableDonationContainer>
      </Styled.Wrapper>
    </Styled.ScrollWrapper>
  );
};
