import { createStackNavigator } from '@react-navigation/stack';

import { Settings } from './pages/Settings';
import { Home } from './pages/Home';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
