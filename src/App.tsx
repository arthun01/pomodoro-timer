import { Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import AppRoutes from './AppRoutes';

import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [loaded, error] = useFonts({
    InterRegular: Inter_400Regular,
    InterBold: Inter_700Bold,
  });

  useEffect(() => {
    if (loaded || error){
      SplashScreen.hide()
    }
  }, [loaded, error]);

  if(!loaded && !error){
    return null;
  }

  return <AppRoutes />;
}