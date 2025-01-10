import { type FC, useEffect, useRef, useState } from 'react';
import { AppState, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    Camera,
    CameraDevice,
    useCameraDevice,
    useCameraPermission,
    useCodeScanner,
} from 'react-native-vision-camera';
import { useIsFocused } from '@react-navigation/native';
import Clipboard from '@react-native-clipboard/clipboard';
import Colors from '../../styles/Colors.ts';
import {useSelector} from 'react-redux';
import {profileSelector} from '../../store/profile/profileSlice.ts';
import QrCodeOnboarding from './QrCodeOnboarding.tsx';

interface QrScreenProps {}

const QrScreen: FC<QrScreenProps> = (): React.JSX.Element => {
    const { isOnboardingQrCode } = useSelector(profileSelector);
    const device: CameraDevice | undefined = useCameraDevice('back');
    const { hasPermission, requestPermission } = useCameraPermission();
    const [qrCode, setQrCode] = useState<string>('');

    const codeScanner = useCodeScanner({
        codeTypes: ['qr', 'ean-13'],
        onCodeScanned: (codes) => {
            setQrCode(codes[0].value as string);
            Clipboard.setString(codes[0].value as string);
        },
    });

    const isFocused = useIsFocused();
    const camera = useRef<Camera>(null);
    const isActive = isFocused && AppState.currentState === 'active';

    useEffect(() => {
        requestPermission();
    }, [requestPermission]);

    if (!hasPermission) {
        return (
            <View style={styles.containerEmpty}>
                <Text style={{ color: Colors.white }}>НЕТ РАЗРЕШЕНИЯ</Text>
            </View>
        );
    }
    if (device == null) {
        return (
            <View style={styles.containerEmpty}>
                <Text style={{ color: Colors.white }}>
                    НЕТУ КАМЕРЫ У ДЕВАЙСА
                </Text>
            </View>
        );
    }

    if (!isFocused) {
        return <View />
    }
    return (
        <>
            {!isOnboardingQrCode ? (
                <QrCodeOnboarding />
                ) : (
                <SafeAreaView style={styles.container}>
                    <Camera
                        ref={camera}
                        style={StyleSheet.absoluteFill}
                        device={device}
                        enableZoomGesture
                        isActive={isActive}
                        codeScanner={codeScanner}
                    />
                    <View style={styles.qr} />
                    {qrCode !== '' && (
                        <View style={styles.qrCode}>
                            <Text
                                style={{
                                    color: Colors.white,
                                    fontSize: 32,
                                    fontWeight: '800',
                                }}
                            >
                                QrCode скопирован
                            </Text>
                        </View>
                    )}
                </SafeAreaView>
            )}
        </>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // paddingHorizontal: 16,
    },
    qr: {
        width: 200,
        height: 200,
        borderStyle: 'dashed',
        borderWidth: 2,
        borderRadius: 12,
        borderColor: Colors.redButton,
        marginBottom: 100,
    },
    containerEmpty: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
    },
    qrCode: {
        position: 'absolute',
        bottom: 190,
        backgroundColor: Colors.redButton,
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 12,
    },
});
export default QrScreen;
