import styled from 'styled-components/native';

export const Wrapper = styled.TouchableOpacity`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  padding-top: 18px;
`;

export const Icon = styled.Image`
  width: 30px;
  height: 30px;

  margin-right: 16px;
`;

export const TouchableArrowContainer = styled.View`
  flex: 1;

  display: flex;
  align-items: flex-end;
`;

export const RightArrowIcon = styled.Image`
  width: 20px;
  height: 20px;
`;

export const TouchableArrow = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
`;
