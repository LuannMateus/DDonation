import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PropsNavigationStack } from './models';

import { Welcome } from '../../screens/Welcome';
import { Home } from '../../screens/Home';
import { Donation } from '../../screens/Donation';
import { CauseScreen } from '../../screens/Cause';
import { SeeAll } from '../../screens/SeeAll';

const { Navigator, Screen } =
  createNativeStackNavigator<PropsNavigationStack>();

export default function Stack() {
  return (
    <Navigator
      initialRouteName="Welcome"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="Welcome" component={Welcome} />
      <Screen name="Home" component={Home} />
      <Screen name="Donation" component={Donation} />
      <Screen name="Cause" component={CauseScreen} />
      <Screen name="SeeAll" component={SeeAll} />
    </Navigator>
  );
}
