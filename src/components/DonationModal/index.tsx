import Modal from 'react-native-modal';
import { PriceBox } from './PriceBox';
import { Typography } from '../Typography';
import * as Styled from './styles';
import { Keyboard } from 'react-native';

export interface DonationModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

export const DonationModal = ({ isOpen, closeModal }: DonationModalProps) => {
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
            />
          </Styled.EnterPriceContainer>

          <Styled.PricesContainer>
            <PriceBox price={100} />
            <PriceBox price={50} />
            <PriceBox price={5} />
          </Styled.PricesContainer>

          <Styled.DonationTouchableContainer>
            <Styled.DonationTouchable onPress={closeModal}>
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
