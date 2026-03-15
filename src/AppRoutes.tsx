import { createStackNavigator } from '@react-navigation/stack';

import { Settings } from './pages/Settings';
import { Home } from './pages/Home';
import { NavigationContainer, NavigationProp, DefaultTheme } from '@react-navigation/native';
import { Theme } from './shared/themes/Theme';

type TScreenDefinitions = {
  Home: undefined;
  Settings: undefined;
}

const Stack = createStackNavigator<TScreenDefinitions>();

export default function AppRoutes() {
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        fonts: {
          ...DefaultTheme.fonts,
          bold: {
            fontWeight: '700',
            fontFamily: Theme.fonts.interBold,
          },
          regular: {
            fontWeight: '500',
            fontFamily: Theme.fonts.interRegular,
          },
        },
        colors: {
          ...DefaultTheme.colors,
          background: Theme.colors.background,
          primary: Theme.colors.primary,
          text: Theme.colors.text,
          card: Theme.colors.divider,
        }
      }}
    >
      <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export type TNavigationScreenProps = NavigationProp<TScreenDefinitions>