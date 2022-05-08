import { useNavigation } from '@react-navigation/native';
import { PropsStack } from '../../routes/Stack/models';
import { Typography } from '../Typography';

import * as Styled from './styles';

export type BackButtonAndTitleProps = {
  hasBackButton?: boolean;
  title: string;
};

export const BackButtonAndTitle = ({
  title = '',
  hasBackButton = false,
}: BackButtonAndTitleProps) => {
  const navigate = useNavigation<PropsStack>();

  return (
    <Styled.Wrapper>
      {hasBackButton && (
        <Styled.TouchableArrow onPress={() => navigate.goBack()}>
          <Styled.BackButtonImage
            source={require('../../assets/images/Icons/LeftPurpleArrowIcon.png')}
          />
        </Styled.TouchableArrow>
      )}

      <Styled.TitleContainer>
        <Typography color="primaryColor" weight="semiBold">
          {title}
        </Typography>
      </Styled.TitleContainer>
    </Styled.Wrapper>
  );
};
