import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CauseScreenProps } from '../../../screens/Cause';
import { DonationProps } from '../../../screens/Donation';

export type PropsNavigationStack = {
  Home: undefined;
  Welcome: undefined;
  Donation: DonationProps;
  Cause: CauseScreenProps;
};

export type NavigationStackRoutes = 'Welcome' | 'Home' | 'Donation' | 'Cause';

export type PropsStack = NativeStackNavigationProp<PropsNavigationStack>;
