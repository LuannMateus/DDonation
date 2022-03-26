import styled, { css } from 'styled-components/native';

export const Wrapper = styled.View`
  width: 100%;

  display: flex;
  justify-content: center;

  flex: 1;
`;

export const SeeAllContainer = styled.TouchableOpacity`
  align-self: flex-end;
`;

export const TouchableCardButton = styled.TouchableOpacity`
  ${({ theme }) => css`
    padding-top: ${theme.padding.small};
  `}
`;

export const EmergencyCardList = styled.FlatList``;
