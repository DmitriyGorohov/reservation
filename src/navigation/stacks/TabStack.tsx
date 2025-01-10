import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Screens } from '../consts';
import TabNavigator from '../tabs/TabNavigator';

const Stack = createStackNavigator();

const TabsStack: React.JSX.Element = (
    <Stack.Screen name={Screens.MAIN_APP} component={TabNavigator} />
);

export default TabsStack;
