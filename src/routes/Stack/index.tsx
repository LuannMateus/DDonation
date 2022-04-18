import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PropsNavigationStack } from './models';

import { Welcome } from '../../screens/Welcome';
import { Home } from '../../screens/Home';
import { Donation } from '../../screens/Donation';
import { CauseScreen } from '../../screens/Cause';
import { SeeAll } from '../../screens/SeeAll';
import { Profile } from '../../screens/Profile';
import { MyProfile } from '../../screens/MyProfile';
import { Checkout } from '../../screens/Checkout';

const { Navigator, Screen } =
  createNativeStackNavigator<PropsNavigationStack>();

export default function Stack() {
  return (
    <Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Screen name="Welcome" component={Welcome} />
      <Screen name="Home" component={Home} />
      <Screen name="Donation" component={Donation} />
      <Screen name="Cause" component={CauseScreen} />
      <Screen name="SeeAll" component={SeeAll} />
      <Screen name="Profile" component={Profile} />
      <Screen name="MyProfile" component={MyProfile} />
      <Screen name="Checkout" component={Checkout} />
    </Navigator>
  );
}
