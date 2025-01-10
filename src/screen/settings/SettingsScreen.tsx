import { type FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface SettingsScreenProps {}

const SettingsScreen: FC<SettingsScreenProps> = (): React.JSX.Element => {
    return (
        <View style={styles.container}>
            <Text>SettingsScreen</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
export default SettingsScreen;
