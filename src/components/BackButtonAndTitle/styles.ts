import styled, { css } from 'styled-components/native';

type TitleContainerProps = {
  hasBackButton?: boolean;
};

export const Wrapper = styled.View`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding-top: 20px;
`;

export const TouchableArrow = styled.TouchableOpacity`
  width: 30px;
  height: 30px;

  margin-left: 14px;
`;

export const TitleContainer = styled.View<TitleContainerProps>`
  ${({ hasBackButton = false }) => css`
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: center;

    padding-right: ${hasBackButton === true ? '30px' : '0px'};
  `}
`;

export const BackButtonImage = styled.Image``;
