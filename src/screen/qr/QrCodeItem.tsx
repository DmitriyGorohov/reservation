import { type FC } from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import { QrCodeOnboardingType, windowWidth } from '../../utils/common.ts';
import Colors from '../../styles/Colors.ts';

interface QrCodeItemProps {
    item: QrCodeOnboardingType;
}

const QrCodeItem: FC<QrCodeItemProps> = ({ item }): React.JSX.Element => {
    return <View style={styles.container}>
        <Image
            source={item.icon}
            resizeMode={'cover'}
            style={{
                marginBottom: 40,
            }}
        />
        <Text style={{ fontSize: 32, color: Colors.white, marginBottom: 30, }}>{item.title}</Text>
        <Text style={{ fontSize: 26, color: Colors.redButton, marginBottom: 12, }}>{item.subTitle}</Text>
        <Text style={{ fontSize: 18, color: Colors.white, marginBottom: 30, }}>{item.secondTitle}</Text>
    </View>;
};
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: windowWidth,
        paddingTop: 100,
        paddingHorizontal: 30,
    },
});
export default QrCodeItem;
