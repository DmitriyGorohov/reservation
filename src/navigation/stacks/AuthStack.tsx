import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { Screens } from '../consts';
import OnboardingScreen from '../../screen/auth/OnboardingScreen.tsx';
import AuthScreen from '../../screen/auth/AuthScreen.tsx';
import WebScreen from '../../screen/web/WebScreen.tsx';

const Stack = createStackNavigator();

const AuthStack = (): React.JSX.Element => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Screens.ONBOARDING} component={OnboardingScreen} />
        <Stack.Screen name={Screens.AUTH} component={AuthScreen} />
        <Stack.Screen name={Screens.WEB_VIEW} component={WebScreen} />
    </Stack.Navigator>
);
export default AuthStack;
