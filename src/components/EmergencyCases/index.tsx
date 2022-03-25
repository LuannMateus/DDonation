import { EmergencyCard, EmergencyCardProps } from '../EmergencyCard';
import { Typography } from '../Typography';
import * as Styled from './styles';

export type EmergencyCasesProps = {
  cardsData: EmergencyCardProps[];
};

export const EmergencyCases = ({ cardsData = [] }: EmergencyCasesProps) => {
  return (
    <Styled.Wrapper>
      <Typography weight="semiBold" size="medium">
        Casos de emergência
      </Typography>
      <Styled.SeeAllContainer>
        <Typography size="xsmall" color="primaryColor75" underline>
          Ver todos
        </Typography>
      </Styled.SeeAllContainer>

      <Styled.EmergencyCardList
        keyExtractor={(item) => {
          const typedItem = item as EmergencyCardProps;

          return typedItem.id;
        }}
        data={cardsData}
        renderItem={({ item }) => {
          return (
            <Styled.TouchableCardButton activeOpacity={1}>
              <EmergencyCard {...(item as EmergencyCardProps)} />
            </Styled.TouchableCardButton>
          );
        }}
      />
    </Styled.Wrapper>
  );
};
