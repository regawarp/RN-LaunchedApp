import * as React from 'react';
import { View, Text, Button, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenA from './screens/ScreenA';
import ScreenB from './screens/ScreenB';
import ScreenC from './screens/ScreenC';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer
      linking={{
        prefixes: ["myapp://app", "https://www.launchedapp.com"],
        config: {
          screens: {
            Home: "home",
            ScreenA: "a",
            ScreenB: "b",
            HomeWParam: {
              path: "home/:token",
              parse: {
                token: (token) => `${token}`
              }
            },
            ScreenAWParam: {
              path: "a/:token",
              parse: {
                token: (token) => `${token}`
              }
            },
            ScreenBWParam: {
              path: "b/:token",
              parse: {
                token: (token) => `${token}`
              }
            },
            ScreenC: "c"
          }
        }
      }}
    >
      <Stack.Navigator
        initialRouteName={'Login'}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ScreenA" component={ScreenA} />
        <Stack.Screen name="ScreenB" component={ScreenB} />
        <Stack.Screen name="HomeWParam" component={HomeScreen} />
        <Stack.Screen name="ScreenAWParam" component={ScreenA} />
        <Stack.Screen name="ScreenBWParam" component={ScreenB} />
        <Stack.Screen name="ScreenC" component={ScreenC} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;