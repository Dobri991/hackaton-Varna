import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Home from './src/containers/Home';
import Login from './src/containers/Login';
import FlagEditor from './src/containers/FlagEditor';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FBBD9A',
    accent: '#f1c40f'
  }
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerTitle: 'FlaGG',
            headerTitleAlign: 'center',
            headerTintColor: '#000000',
            headerBackground: () => <View style={{ flex: 1, backgroundColor: '#FBBD9A' }} />
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Edit" component={FlagEditor} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
