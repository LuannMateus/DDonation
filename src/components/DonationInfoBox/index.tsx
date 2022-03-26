import { Typography } from '../Typography';
import * as Styled from './styles';

export type DonationInfoBox = {
  targetValue?: number;
  reachedValue?: number;
  type: 'target' | 'money';
};

export const DonationInfoBox = ({
  targetValue,
  reachedValue,
  type = 'target',
}: DonationInfoBox) => {
  return (
    <Styled.Wrapper>
      <Styled.TargetIcon
        source={
          type === 'target'
            ? require('../../assets/images/Icons/TargetIcon.png')
            : require('../../assets/images/Icons/MoneyDonationIcon.png')
        }
      />
      <Styled.LabelAndValue>
        <Typography size="small" paddingTop={2} color="primaryColor75">
          {type === 'target' ? 'Alvo' : 'Alcançado'}{' '}
        </Typography>
        <Typography size="small" color="primaryColor75" weight="semiBold">
          R${type === 'target' ? targetValue : reachedValue}
        </Typography>
      </Styled.LabelAndValue>
    </Styled.Wrapper>
  );
};
