// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';

import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
// import 'react-native-reanimated';

import { Appearance } from 'react-native';
import {Colors} from '@/constants/Colors'
// import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = Appearance.getColorScheme();

  const theme = colorScheme ==="dark" ? Colors.dark : Colors.light;

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
      <Stack screenOptions={{headerStyle:{backgroundColor: theme.headerBackground,},
      headerTintColor: theme.text, headerShadowVisible: false
        
      }}>
        {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="(coffee)" options={{ headerShown: false }} /> */}

        <Stack.Screen name='index' options={{ title:"Home", headerShown: true}} />
        <Stack.Screen name='contactus' options={{ title:"Contact", headerTitle:"Contact Us"}} />
        <Stack.Screen name='menu' options={{ title:"Coffee Menu"}} />
        <Stack.Screen name='explore' options={{ title:"Explore"}} />
        <Stack.Screen name="+not-found" />
      </Stack>

  );
}
