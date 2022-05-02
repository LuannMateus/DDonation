import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useState } from 'react';
import { DonationInfoBox } from '../../components/DonationInfoBox';
import { DonationModal } from '../../components/DonationModal';
import { GoBack } from '../../components/GoBack';
import { DonationTouchable } from '../../components/Touchable';
import { Typography } from '../../components/Typography';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Styled from './styles';
import { PropsStack } from '../../routes/Stack/models';
import { findDonationRequestById } from '../../api/DonationRequest/findDonationRequestById';
import { TDonationRequest } from '../../models/DonationRequest';

export type DonationProps = TDonationRequest;

export const Donation = () => {
  const { id } = useRoute().params as { id: string };
  const navigation = useNavigation<PropsStack>();

  const [donationRequestState, setDonationRequestState] =
    useState<TDonationRequest>();
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  const handleDonationModalOpen = () => {
    setIsDonationModalOpen(true);
  };

  const handleDonationModalClose = () => {
    setIsDonationModalOpen(false);
    navigation.navigate('Checkout');
  };

  const handleDonationRequest = useCallback(async () => {
    try {
      const donationRequest = await findDonationRequestById(id);

      if (!donationRequest) throw new Error('Não foi possível encontrar');

      console.log(id);

      setDonationRequestState(donationRequest);
    } catch (e) {
      console.log(e);
    }
  }, [id]);

  useEffect(() => {
    handleDonationRequest();
  }, [handleDonationRequest]);

  return (
    <Styled.Wrapper>
      <StatusBar style="auto" />
      <GoBack onPress={() => navigation.goBack()} />
      <Styled.MainImage
        source={{
          uri: donationRequestState?.image,
        }}
      />
      <Styled.DonationInfoContainer>
        <Styled.TitleAndTimeContainer>
          <Typography size="medium" weight="semiBold" paddingTop={2}>
            {donationRequestState?.title}
          </Typography>
          <Typography size="xsmall" weight="regular" paddingTop={2}>
            {donationRequestState?.daysRemaining} dias restantes
          </Typography>
        </Styled.TitleAndTimeContainer>

        <Styled.ByContainer>
          <Typography size="xsmall" color="primaryColor75">
            Por
          </Typography>
          <Typography size="xsmall" weight="bold">
            {donationRequestState?.ownerId}
          </Typography>
        </Styled.ByContainer>

        <Typography size="xsmall" paddingTop={2} color="primaryColor75">
          {donationRequestState?.description}
        </Typography>
      </Styled.DonationInfoContainer>
      <Styled.TargetAndDonationMoneyContainer>
        <DonationInfoBox
          targetValue={donationRequestState?.target}
          type="target"
        />
        <DonationInfoBox
          reachedValue={donationRequestState?.reached}
          type="money"
        />
      </Styled.TargetAndDonationMoneyContainer>
      <Styled.DonationButtonContainer>
        <DonationTouchable
          title="Doar Agora"
          onPress={() => handleDonationModalOpen()}
        />
      </Styled.DonationButtonContainer>
      <DonationModal
        isOpen={isDonationModalOpen}
        closeModal={handleDonationModalClose}
      />
    </Styled.Wrapper>
  );
};
