import { StyleSheet, Text, View, StatusBar, StatusBarStyle } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import Login from './src/pages/Auth/Login';
import Routes from './src/routes/routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#1d1d2e" barStyle="light-content" translucent={false} />
      <Routes />
    </NavigationContainer>
  );
}