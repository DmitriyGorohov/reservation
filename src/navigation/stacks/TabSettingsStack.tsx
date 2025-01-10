import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {Screens} from '../consts';
// import SettingsScreen from '../../screen/settings/SettingsScreen.tsx';
import AuthScreen from '../../screen/auth/AuthScreen.tsx';


const Stack = createStackNavigator();

const SettingsStack = (): React.JSX.Element => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={Screens.AUTH} component={AuthScreen} />
  </Stack.Navigator>
);

export default SettingsStack;
