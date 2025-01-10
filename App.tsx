import {StatusBar, StyleSheet} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {Provider, useDispatch} from 'react-redux';
import {AppDispatch, persistor, store} from './src/store/store.ts';
import { PersistGate } from 'redux-persist/integration/react';
import { Host } from 'react-native-portalize';
import Navigator from './src/navigation/Navigator.tsx';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {useEffect} from 'react';
import {AxiosApi} from './src/api/axiosApi.ts';
import {setIsApi, setPolicyPath} from './src/store/profile/profileSlice.ts';

const AppWrapper = () => {
    return (
        <GestureHandlerRootView style={styles.rootContainer}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <App />
                </PersistGate>
            </Provider>
        </GestureHandlerRootView>
    );
};

const App = () => {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        (async () => {
            dispatch(setIsApi(null))
            const api = new AxiosApi('https://clicsushi.store');
            try {
                const data = await api.getTestData();
                dispatch(setPolicyPath(data.policy));
                if (data.policy.includes('privacypolicies')) {
                    console.log('ЕСТЬ');
                    dispatch(setIsApi(true))
                } else {
                    console.log('НЕТУ');
                    dispatch(setIsApi(false))
                }
                console.log('Ответ от API:', data);
            } catch (error) {
                console.error('Ошибка:', error);
            }
        })();
    }, [dispatch]);

    return (
        <SafeAreaProvider style={styles.container}>
          <StatusBar barStyle="light-content" backgroundColor={'transparent'} translucent />
            <Host>
                <Navigator />
            </Host>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
    },
});

export default AppWrapper;
