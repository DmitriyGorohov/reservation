import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { profileSelector } from '../../store/profile/profileSlice.ts';
import WebView from 'react-native-webview';
import {SafeAreaView} from 'react-native-safe-area-context';
import Colors from '../../styles/Colors.ts';
import ButtonCustom from '../../components/ButtonCustom.tsx';
import Navigation from '../../navigation/navigation.ts';

export const WebScreen = (): React.JSX.Element => {
    const { policyPath } = useSelector(profileSelector);

    return (
        <SafeAreaView style={styles.container}>
            <WebView
                source={{
                    uri: policyPath,
                }}
                originWhitelist={['*']}
                allowsBackForwardNavigationGestures
                saveFormDataDisabled
                allowFileAccessFromFileURLs
                allowingReadAccessToURL={policyPath}
                pullToRefreshEnabled
                javaScriptEnabled
                domStorageEnabled
            />
            <ButtonCustom onPress={() => Navigation.pop()} title={'Back'} />
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: Colors.white,
    },
});

export default WebScreen;
