import { TDonorCreditCard } from '../../models/DonorCreditCard';
import { Typography } from '../Typography';
import * as Styled from './styles';

export type CreditCardProps = TDonorCreditCard & {
  backView?: boolean;
};

export const CreditCard = ({
  holderName,
  creditCardNumber,
  validity,
  cvv,
  backView,
}: CreditCardProps) => {
  return !backView ? (
    <Styled.Wrapper>
      <Styled.CreditCardInfoContainer>
        <Typography weight="semiBold" size="xsmall" color="white">
          {creditCardNumber}
        </Typography>
        <Typography size="xsmall" color="white">
          {holderName}
        </Typography>
        <Typography size="xsmall" color="white">
          {validity}
        </Typography>
      </Styled.CreditCardInfoContainer>

      <Styled.Icon
        source={require('../../assets/images/Icons/MasterCardIcon.png')}
      />
    </Styled.Wrapper>
  ) : (
    <Styled.BackViewWrapper>
      <Styled.BackBeltView />
      <Styled.BackViewInfoContainer>
        <Typography weight="semiBold" size="small" color="white">
          {cvv}
        </Typography>
      </Styled.BackViewInfoContainer>
    </Styled.BackViewWrapper>
  );
};
