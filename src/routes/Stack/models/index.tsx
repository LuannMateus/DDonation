import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type PropsNavigationStack = {
  Home: undefined;
  Welcome: undefined;
  Donation: { id: string };
  Cause: { id: string };
  SeeAll: { category: string };
  Profile: undefined;
  MyProfile: undefined;
  Checkout: undefined;
};

export type NavigationStackRoutes =
  | 'Welcome'
  | 'Home'
  | 'Donation'
  | 'Cause'
  | 'Profile'
  | 'MyProfile'
  | 'Checkout';

export type PropsStack = NativeStackNavigationProp<PropsNavigationStack>;
