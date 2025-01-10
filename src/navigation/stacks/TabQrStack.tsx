import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { Screens } from '../consts';
import QrScreen from '../../screen/qr/QrScreen.tsx';

const Stack = createStackNavigator();

const QrStack = (): React.JSX.Element => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={Screens.QR} component={QrScreen} />
  </Stack.Navigator>
);
export default QrStack;
