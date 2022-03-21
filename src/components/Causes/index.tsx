import { DonationButton } from '../DonationButton';
import { Typography } from '../Typography';
import * as Styled from './styles';

export const Causes = () => {
  return (
    <Styled.Wrapper>
      <Typography weight="bold" size="large">
        Causas
      </Typography>
      <Styled.DonationCausesContainer>
        <DonationButton
          title="Comida"
          imageRelativePath={require('../../assets/images/FoodIcon.png')}
        />
        <DonationButton
          title="Educação"
          imageRelativePath={require('../../assets/images/EducationIcon.png')}
        />
        <DonationButton
          title="Casa"
          imageRelativePath={require('../../assets/images/HouseIcon.png')}
        />
        <DonationButton
          title="Brinquedos"
          imageRelativePath={require('../../assets/images/ToyIcon.png')}
        />
      </Styled.DonationCausesContainer>
    </Styled.Wrapper>
  );
};
