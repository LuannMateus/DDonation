import styled, { css } from 'styled-components/native';

export const Wrapper = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 85px;

    display: flex;

    border: 1px solid ${theme.colors.primaryBorderColor};
    border-radius: 24px;
  `}
`;

export const LabelContainer = styled.View`
  padding-top: 10px;
  padding-left: 20px;
`;

export const InputAndIconContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding-left: 20px;
  padding-bottom: 15px;
`;

export const Icon = styled.Image``;

export const Input = styled.TextInput`
  ${({ theme }) => css`
    width: 80%;

    padding-left: 15px;

    font-size: ${theme.font.sizes.small};

    text-decoration: none;

    color: ${theme.colors.primaryColor75};
  `}
`;

export const ToggleViewPasswordIcon = styled.Image`
  margin-right: 20px;
`;
