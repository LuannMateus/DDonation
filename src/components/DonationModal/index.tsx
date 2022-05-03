import Modal from 'react-native-modal';
import { PriceBox } from './PriceBox';
import { Typography } from '../Typography';
import * as Styled from './styles';
import { Keyboard } from 'react-native';
import { useState } from 'react';

export interface DonationModalProps {
  isOpen: boolean;
  closeModal: () => void;
  handleDonation: (amount: number) => void;
}

export const DonationModal = ({
  isOpen,
  closeModal,
  handleDonation,
}: DonationModalProps) => {
  const [amountState, setAmountState] = useState<number | undefined>(undefined);

  return (
    <Styled.Wrapper>
      <Modal
        isVisible={isOpen}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        animationInTiming={300}
        animationOutTiming={300}
        hideModalContentWhileAnimating
        backdropColor="#fff"
        backdropOpacity={0}
        style={{ margin: 0 }}
        onBackdropPress={() => {
          closeModal();
          Keyboard.dismiss();
        }}
      >
        <Styled.ModalContainer
          onPress={() => Keyboard.dismiss()}
          activeOpacity={1}
        >
          <Typography size="small" weight="semiBold" paddingTop={4}>
            Quanto você quer doar?
          </Typography>

          <Styled.EnterPriceContainer>
            <Styled.EnterPriceTextInput
              placeholder="Digite o preço"
              keyboardType="numeric"
              value={amountState?.toString() || ''}
              onChangeText={(text) => {
                if (text === '') setAmountState(undefined);
                else setAmountState(parseFloat(text));
              }}
            />
          </Styled.EnterPriceContainer>

          <Styled.PricesContainer>
            <PriceBox price={100} onPress={() => setAmountState(100)} />
            <PriceBox price={50} onPress={() => setAmountState(50)} />
            <PriceBox price={5} onPress={() => setAmountState(5)} />
          </Styled.PricesContainer>

          <Styled.DonationTouchableContainer>
            <Styled.DonationTouchable
              onPress={() => {
                closeModal();
                handleDonation(amountState || 0);
              }}
            >
              <Typography size="small" weight="semiBold" color="white">
                Doar
              </Typography>
            </Styled.DonationTouchable>
          </Styled.DonationTouchableContainer>
        </Styled.ModalContainer>
      </Modal>
    </Styled.Wrapper>
  );
};
