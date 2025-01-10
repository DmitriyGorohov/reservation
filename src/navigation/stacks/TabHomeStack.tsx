import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { Screens } from '../consts';
import HomeScreen from '../../screen/home/HomeScreen.tsx';
import TarifScreen from '../../screen/home/TarifScreen.tsx';
import ReservationScreen from '../../screen/home/ReservationScreen.tsx';
import ReservationListScreen from '../../screen/home/ReservationListScreen.tsx';
import ReservationDetailsScreen from '../../screen/home/ReservationDetailsScreen.tsx';

const Stack = createStackNavigator();

const HomeStack = (): React.JSX.Element => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Screens.HOME} component={HomeScreen} />
        <Stack.Screen name={Screens.TARIF} component={TarifScreen} />
        <Stack.Screen name={Screens.RESERVATION_LIST} component={ReservationListScreen} />
        <Stack.Screen name={Screens.RESERVATION_DETAILS} component={ReservationDetailsScreen} />
        <Stack.Screen
            name={Screens.RESERVATION}
            component={ReservationScreen}
        />
    </Stack.Navigator>
);

export default HomeStack;
