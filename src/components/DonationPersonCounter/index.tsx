import { Typography } from '../Typography';
import * as Styled from './styles';

export const DonationPersonCounter = () => {
  return (
    <Styled.Wrapper>
      <Typography>Total de pessoas que você impactou</Typography>
      <Styled.CounterAndHearthIconContainer>
        <Typography size="large" weight="bold">
          0
        </Typography>
        <Styled.HearthImage
          source={require('../../assets/images/HearthIcon.png')}
        />
      </Styled.CounterAndHearthIconContainer>
    </Styled.Wrapper>
  );
};
