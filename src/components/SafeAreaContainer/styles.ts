import styled, { css } from 'styled-components/native';

type WrapperProps = {
  platformSafeArea: number | undefined;
};

export const Wrapper = styled.View<WrapperProps>`
  ${({ platformSafeArea = 0 }) => css`
    display: flex;
    align-items: stretch;

    width: 100%;
    height: 100%;

    padding-top: ${platformSafeArea}px;
  `};
`;
