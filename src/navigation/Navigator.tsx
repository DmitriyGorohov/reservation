import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Navigation from './navigation';

import { AuthStack, TabsStack } from './stacks';
import { Stacks } from './consts';
import Colors from '../styles/Colors.ts';
import { useSelector } from 'react-redux';
import { profileSelector } from '../store/profile/profileSlice.ts';
import EnabledStack from './stacks/EnabledStack.tsx';

const Stack = createStackNavigator();

const Navigator = (): React.JSX.Element => {
    const { isOnboarding, isApi } = useSelector(profileSelector);
    return (
        <NavigationContainer
            ref={Navigation.navigationRef}
            theme={{
                ...DefaultTheme,
                colors: {
                    ...DefaultTheme.colors,
                    background: Colors.black,
                },
            }}
        >
            {isApi ? (
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    {!isOnboarding && (
                        <Stack.Screen name={Stacks.AUTH} component={AuthStack} />
                    )}
                    {TabsStack}
                </Stack.Navigator>
            ) : (
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen
                        name={Stacks.ENABLED}
                        component={EnabledStack}
                    />
                </Stack.Navigator>
            )}
        </NavigationContainer>
    );
};

export default Navigator;
