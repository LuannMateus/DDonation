import { ImageSourcePropType } from 'react-native';
import { Typography } from '../../Typography';
import * as Styled from './styles';

export type ProfileOptionProps = {
  icon: ImageSourcePropType;
  label: string;
};

export const ProfileOption = ({ icon, label }: ProfileOptionProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Icon source={icon} />
      <Typography>{label}</Typography>
      <Styled.TouchableArrowContainer>
        <Styled.RightArrowIcon
          source={require('../../../assets/images/Icons/RightArrowIcon.png')}
        />
      </Styled.TouchableArrowContainer>
    </Styled.Wrapper>
  );
};
