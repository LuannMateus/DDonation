import styled, { css } from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  ${({ theme }) => css`
    height: 100%;

    display: flex;
    justify-content: flex-start;

    background: ${theme.colors.white};

    padding: 0 20px;
    padding-top: 64px;
  `}
`;

export const SeeAllList = styled.FlatList``;

export const SeeAllTouchable = styled.TouchableOpacity`
  ${({ theme }) => css`
    padding: ${theme.padding.small} 0;
  `}
`;
