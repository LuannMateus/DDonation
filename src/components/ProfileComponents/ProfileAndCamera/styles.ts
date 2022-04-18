import styled, { css } from 'styled-components/native';

type ProfileContainerProps = {
  platformSafeArea: number | undefined;
};

export const Wrapper = styled.SafeAreaView`
  flex: 1;

  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;

  overflow: hidden;
`;

export const ProfileContainer = styled.View<ProfileContainerProps>`
  ${({ theme, platformSafeArea = 0 }) => css`
    display: flex;
    align-items: center;

    width: 100%;
    height: 224px;

    padding-top: ${platformSafeArea}px;

    background-color: ${theme.colors.primaryColor};

    border-bottom-left-radius: 404px;
    border-bottom-right-radius: 404px;

    transform: scaleX(2);
  `};
`;

export const BackAndTitleContainer = styled.View`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding-top: 20px;

  transform: scaleX(0.5);
`;

export const TouchableArrow = styled.TouchableOpacity`
  width: 30px;
  height: 30px;

  margin-left: 14px;
`;

export const TitleContainer = styled.View`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  padding-right: 30px;
`;

export const BackButtonImage = styled.Image``;

export const ProfileImageContainer = styled.View`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    border-radius: 200px;
    border: 3px dashed ${theme.colors.primaryBorderColor};

    margin-top: 34px;
    padding: 12px;

    transform: scaleX(0.5);
  `}
`;

export const CameraIconContainer = styled.View`
  ${({ theme }) => css`
    position: relative;

    bottom: 20px;

    width: 40px;
    height: 40px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 24px;

    background-color: ${theme.colors.white};

    transform: scaleX(0.5);
  `}
`;

export const CameraIconImage = styled.Image``;

export const ProfileImage = styled.Image`
  width: 200px;
  height: 200px;
`;

export const NameAndEmailContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;

  transform: scaleX(0.5);
`;
