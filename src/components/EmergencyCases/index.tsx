import { EmergencyCard } from '../EmergencyCard';
import { Typography } from '../Typography';
import * as Styled from './styles';

export const EmergencyCases = () => {
  return (
    <Styled.Wrapper>
      <Typography weight="bold" size="large">
        Casos de emergência
      </Typography>
      <Styled.EmergencyCardList
        data={[{ key: 1 }, { key: 2 }, { key: 3 }]}
        renderItem={() => {
          return (
            <Styled.TouchableCardButton activeOpacity={1}>
              <EmergencyCard />
            </Styled.TouchableCardButton>
          );
        }}
      />
    </Styled.Wrapper>
  );
};
