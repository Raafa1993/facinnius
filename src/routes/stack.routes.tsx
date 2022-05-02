import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../Home';
import { SignIn } from '../Login/SignIn';
import { SignUp } from '../Login/SignUp';

const Stack = createNativeStackNavigator();

const AppRoutes: React.FC = () => (
  <Stack.Navigator 
    initialRouteName="SignIn"
    screenOptions={{ headerShown: false }}

  >
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="SignUp" component={SignUp} />
  </Stack.Navigator>
)

export default AppRoutes;