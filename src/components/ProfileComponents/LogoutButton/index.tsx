import { Typography } from '../../Typography';
import * as Styled from './styles';

export const LogoutButton = () => {
  return (
    <Styled.Wrapper>
      <Styled.Icon
        source={require('../../../assets/images/Icons/LogoutIcon.png')}
      />
      <Typography color="primaryColor75">Sair</Typography>
    </Styled.Wrapper>
  );
};
