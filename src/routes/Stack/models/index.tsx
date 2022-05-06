import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TCheckout } from '../../../models/Checkout';

export type PropsNavigationStack = {
  SignIn: undefined;
  Home: undefined;
  Welcome: undefined;
  Donation: { id: string };
  Cause: { id: string };
  SeeAll: { category: string };
  Profile: undefined;
  MyProfile: undefined;
  Checkout: TCheckout;
};

export type NavigationStackRoutes =
  | 'SignIn'
  | 'Welcome'
  | 'Home'
  | 'Donation'
  | 'Cause'
  | 'Profile'
  | 'MyProfile'
  | 'Checkout';

export type PropsStack = NativeStackNavigationProp<PropsNavigationStack>;
