import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { MyRoutine } from '../screens/MyRoutine';
import { SignIn } from '../screens/Login/SignIn';
import { SignUp } from '../screens/Login/SignUp';
import { Stoque } from '../screens/Stoque';


const Stack = createNativeStackNavigator();

const AppRoutes: React.FC = () => (
  <Stack.Navigator 
    initialRouteName="SignIn"
    screenOptions={{ headerShown: false }}

  >
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Rotina" component={MyRoutine} />
    <Stack.Screen name="Stoque" component={Stoque} />
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="SignUp" component={SignUp} />
  </Stack.Navigator>
)

export default AppRoutes;