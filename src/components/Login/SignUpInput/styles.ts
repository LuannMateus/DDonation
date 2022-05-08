import styled, { css } from 'styled-components/native';

type InputProps = {
  type?: 'default' | 'password';
};

export const Wrapper = styled.View`
  ${() => css`
    width: 100%;
    height: 85px;

    display: flex;
    align-items: flex-start;
  `}
`;

export const LabelContainer = styled.View`
  padding-top: 10px;
`;

export const InputAndIconContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding-bottom: 4px;
`;

export const Input = styled.TextInput<InputProps>`
  ${({ theme, type = 'default' }) => css`
    width: ${type === 'default' ? '100%' : '90%'};

    font-size: ${theme.font.sizes.small};

    text-decoration: none;

    color: ${theme.colors.primaryColor75};
  `}
`;

export const Line = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 1px;

    background-color: ${theme.colors.primaryBorderColor};
  `}
`;

export const ToggleViewPasswordIcon = styled.Image`
  margin-right: 20px;
`;
