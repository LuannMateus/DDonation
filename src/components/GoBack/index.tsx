import { theme } from '../../styles/theme';
import * as Styled from './styles';

export const GoBack = () => {
  return (
    <Styled.Wrapper
      style={{
        shadowColor: theme.colors.boxShadowColor,
        elevation: 3,
        shadowOffset: {
          width: -2,
          height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      }}
    >
      <Styled.ArrowIcon source={require('../../assets/images/ArrowIcon.png')} />
    </Styled.Wrapper>
  );
};
