import { type FC } from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonCustom from '../../components/ButtonCustom.tsx';
import Navigation from '../../navigation/navigation.ts';
import Colors from '../../styles/Colors.ts';
import { useSelector } from 'react-redux';
import {
    profileSelector,
} from '../../store/profile/profileSlice.ts';
import { Screens } from '../../navigation/consts';

interface ReservationListScreenProps {}

const ReservationListScreen: FC<
    ReservationListScreenProps
> = (): React.JSX.Element => {
    const { reservations } = useSelector(profileSelector);

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
            <ButtonCustom
                style={{ marginBottom: 52 }}
                onPress={() => Navigation.navigate(Screens.RESERVATION)}
                title={'Reservation'}
            />
            <Text
                style={{
                    fontSize: 24,
                    textAlign: 'left',
                    color: Colors.white,
                    opacity: 0.5,
                }}
            >
                My Reservation
            </Text>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[
                    {
                        paddingBottom: 40,
                    },
                    !reservations && {
                        paddingHorizontal: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexGrow: 1,
                    },
                ]}
                style={[
                    {
                        flexGrow: 1,
                        paddingTop: 20,
                        paddingBottom: 40,
                    },
                ]}
            >
                {!reservations ? (
                    <Text
                        style={{
                            color: Colors.redButton,
                            fontSize: 24,
                            textAlign: 'center',
                        }}
                    >
                        You've never made a reservation
                    </Text>
                ) : (
                    <>
                        {reservations.map((itm, index) => {
                            return (
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    onPress={() =>
                                        Navigation.navigate(
                                            Screens.RESERVATION_DETAILS,
                                            { item: itm }
                                        )
                                    }
                                    key={`${itm.id}_${index}`}
                                    style={{
                                        width: '100%',
                                        backgroundColor: 'red',
                                        borderRadius: 12,
                                        height: 100,
                                        overflow: 'hidden',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: 22,
                                    }}
                                >
                                    <Image
                                        source={require('../../assets/img/reserv/reserv.png')}
                                        resizeMode={'cover'}
                                        style={{
                                            width: '100%',
                                            position: 'absolute',
                                            top: 0,
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                        }}
                                    />
                                    <Text
                                        style={{
                                            textAlign: 'center',
                                            color: Colors.white,
                                            fontSize: 32,
                                        }}
                                    >
                                        {itm.name}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </>
                )}
            </ScrollView>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
    },
});
export default ReservationListScreen;
