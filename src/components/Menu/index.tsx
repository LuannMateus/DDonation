import { Profile } from '../Profile';
import { Typography } from '../Typography';
import * as Styled from './styles';

export const Menu = () => {
  return (
    <Styled.Wrapper>
      <Styled.WelcomeContainer>
        <Typography size="small" color="primaryColor75">
          Olá!
        </Typography>
        <Typography size="medium" weight="bold">
          Ellie William
        </Typography>
      </Styled.WelcomeContainer>
      <Profile />
    </Styled.Wrapper>
  );
};
