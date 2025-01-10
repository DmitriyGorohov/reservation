import { type FC } from 'react';
import {
    Image, ImageSourcePropType,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../styles/Colors.ts';
import Navigation from '../../navigation/navigation.ts';
import { useRoute } from '@react-navigation/native';
import { ReservationDetailsRouteProps } from '../../types/stacks/MainStacksType.ts';
import { windowWidth } from '../../utils/common.ts';

interface ReservationDetailsScreenProps {}

const ReservationDetailsScreen: FC<
    ReservationDetailsScreenProps
> = (): React.JSX.Element => {
    const { params } = useRoute<ReservationDetailsRouteProps>();

    const renderImage = (): ImageSourcePropType => {
        switch (params.item.tarif) {
            case 0:
                return require('../../assets/img/basic/basic.png');
            case 1:
                return require('../../assets/img/Advanced/48.png');
            case 2:
                return require('../../assets/img/vip/vip.png');
            case 3:
                return require('../../assets/img/super-vip/50.png');
            default:
                return require('../../assets/img/basic/basic.png');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ alignSelf: 'flex-start', marginBottom: 24 }}>
                <Text
                    style={{
                        fontSize: 24,
                        textAlign: 'center',
                        color: Colors.white,
                    }}
                >
                    Reservation
                </Text>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => Navigation.pop()}
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >
                    <Text
                        style={{
                            marginRight: 10,
                            color: Colors.redButton,
                            fontSize: 30,
                            fontWeight: '700',
                        }}
                    >
                        {'<'}
                    </Text>
                    <Text
                        style={{
                            marginRight: 10,
                            color: Colors.redButton,
                            fontSize: 20,
                            fontWeight: '700',
                        }}
                    >
                        Back
                    </Text>
                </TouchableOpacity>
            </View>
            <Text
                style={{
                    color: Colors.white,
                    fontSize: 18,
                    fontWeight: '700',
                    opacity: 0.5,
                    marginBottom: 20,
                }}
            >
                Info
            </Text>
            <View style={styles.form}>
                <TextInput
                    editable={false}
                    style={styles.input}
                    placeholderTextColor={Colors.white}
                    placeholder={'Your name'}
                    value={params.item.name}
                    // onChangeText={setName}
                />
                <TextInput
                    editable={false}
                    style={styles.input}
                    placeholderTextColor={Colors.white}
                    placeholder={'Your number'}
                    value={params.item.phone}
                    // onChangeText={setPhone}
                />
                <TextInput
                    editable={false}
                    style={styles.input}
                    placeholderTextColor={Colors.white}
                    placeholder={'What hours'}
                    value={params.item.hours}
                    // onChangeText={setHour}
                />
            </View>
            <Text
                style={{
                    color: Colors.white,
                    fontSize: 18,
                    fontWeight: '700',
                    opacity: 0.5,
                }}
            >
                Select tariff list
            </Text>
            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: windowWidth - 32,
                    marginTop: 20,
                }}
            >
                <Image
                    resizeMode={'contain'}
                    source={renderImage()}
                />
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
    },
    form: {
        paddingHorizontal: 16,
        width: '100%',
    },
    input: {
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: Colors.white,
        borderRadius: 16,
        fontWeight: '600',
        color: Colors.white,
        fontSize: 16,
        height: 55,
        marginBottom: 40,
    },
});
export default ReservationDetailsScreen;
