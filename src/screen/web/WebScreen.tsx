import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';

import { profileSelector } from '../../store/profile/profileSlice.ts';
import WebView from 'react-native-webview';

export const WebScreen = (): React.JSX.Element => {
    const { policyPath } = useSelector(profileSelector);

    return (
        <View style={styles.container}>
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
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
    },
});

export default WebScreen;
