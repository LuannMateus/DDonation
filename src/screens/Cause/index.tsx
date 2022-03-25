import { StatusBar } from 'expo-status-bar';
import { EmergencyCases } from '../../components/EmergencyCases';
import { GoBack } from '../../components/GoBack';
import { Typography } from '../../components/Typography';
import mock from './mock';
import * as Styled from './styles';

export const CauseScreen = () => {
  return (
    <Styled.Wrapper>
      <StatusBar style="auto" />
      <GoBack />
      <Styled.MainImage
        source={require('../../assets/images/FoodDonationImage.png')}
      />
      <Styled.InfoContainer>
        <Typography size="medium" weight="semiBold" paddingTop={2}>
          Doe para a alimentação
        </Typography>
        <Typography size="xsmall" paddingTop={2} color="primaryColor75">
          Doar alimentos é uma forma de garantir a subsistência da família
          beneficiada, principalmente em comunidades carentes. Por isso cada
          ajuda é necessária.
        </Typography>
      </Styled.InfoContainer>

      <Styled.EmergencyCasesContainer>
        <EmergencyCases cardsData={mock.cardsData} />
      </Styled.EmergencyCasesContainer>
    </Styled.Wrapper>
  );
};
