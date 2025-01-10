import {
    BottomTabNavigationOptions,
    createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute, Route } from '@react-navigation/native';
import { Screens, Tabs } from '../consts';
import Navigation from '../navigation.ts';
import { HomeStack, QrStack, SettingsStack } from '../stacks';
import Colors from '../../styles/Colors.ts';
import { Image, Platform, View } from 'react-native';

const Tab = createBottomTabNavigator();

const tabBarOptions: BottomTabNavigationOptions = {
    tabBarActiveTintColor: Colors.white,
    tabBarInactiveTintColor: Colors.white,
    tabBarLabelStyle: {
        display: 'none',
    },
    tabBarStyle: [
        {
            elevation: 0,
            height: Platform.OS === 'ios' ? 70 : 80,
            alignItems: 'center',
            justifyContent: 'center',
            shadowOffset: { width: 0, height: 0 },
            borderTopColor: Colors.redButton,
            backgroundColor: Colors.backgroundBottomTab,
        },
    ],
};

const getTabBarVisible = (route: Partial<Route<string>>): string => {
    const routeName = getFocusedRouteNameFromRoute(route);
    const hideOnScreens: string | Screens[] = [Screens.TARIF, Screens.RESERVATION, Screens.RESERVATION_LIST, Screens.RESERVATION_DETAILS];

    if (!routeName) {
        return 'flex';
    }

    return hideOnScreens.includes(routeName as Screens) ? 'none' : 'flex';
};

// const withDynamicColor = (
//     Component: React.ComponentType<IIconProps> | React.ElementType<IIconProps>,
//     focused: boolean,
// ): React.JSX.Element => (
//   <Component color={focused ? Colors.accentBlue : Colors.black40} />
// );

const TabNavigator = () => (
    <Tab.Navigator
        initialRouteName={Navigation.initialRoute}
        screenOptions={{
            headerShown: false,
            tabBarStyle: tabBarOptions.tabBarStyle,
        }}
    >
        <Tab.Screen
            name={Tabs.HOME}
            component={HomeStack}
            options={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    return <View
                            style={{
                                marginTop: Platform.OS === 'ios' ? 20 : 0,
                                width: 80,
                                height: 50,
                                backgroundColor: focused ? Colors.backgroundBottomTabActive : Colors.backgroundBottomTab,
                                borderRadius: 12,
                                alignItems: 'center',
                                 justifyContent: 'center'
                            }}
                    >
                        <Image
                            source={require('../../assets/img/haus-icon/house-2.png')}
                            resizeMode={'cover'}
                        />
                    </View>;
                },
                ...tabBarOptions,
                tabBarStyle: [
                    tabBarOptions.tabBarStyle,
                    { display: getTabBarVisible(route)},
                ],
            })}
        />

        <Tab.Screen
            name={Tabs.QR}
            component={QrStack}
            options={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    return <View
                        style={{
                            marginTop: Platform.OS === 'ios' ? 20 : 0,
                            width: 80,
                            height: 50,
                            backgroundColor: focused ? Colors.backgroundBottomTabActive : Colors.backgroundBottomTab,
                            borderRadius: 12,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Image
                            source={require('../../assets/img/qr-icon/scan-barcode.png')}
                            resizeMode={'cover'}
                        />
                    </View>;
                },
                ...tabBarOptions,
                tabBarStyle: [
                    tabBarOptions.tabBarStyle,
                    { display: getTabBarVisible(route)},
                ],
            })}
        />

        <Tab.Screen
            name={Tabs.SETTINGS}
            component={SettingsStack}
            options={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    return <View
                        style={{
                            marginTop: Platform.OS === 'ios' ? 20 : 0,
                            width: 80,
                            height: 50,
                            backgroundColor: focused ? Colors.backgroundBottomTabActive : Colors.backgroundBottomTab,
                            borderRadius: 12,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Image
                            source={require('../../assets/img/setting-icon/setting-4.png')}
                            resizeMode={'cover'}
                        />
                    </View>;
                },
                ...tabBarOptions,
                tabBarStyle: [
                    tabBarOptions.tabBarStyle,
                    { display: getTabBarVisible(route)},
                ],
            })}
        />
    </Tab.Navigator>
);

export default TabNavigator;
