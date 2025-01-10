import { type FC, useRef, useState } from 'react';
import {
    FlatList,
    Image,
    NativeScrollEvent,
    NativeSyntheticEvent,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, {
    useAnimatedScrollHandler,
    useSharedValue,
} from 'react-native-reanimated';
import { listItems, windowWidth } from '../../utils/common.ts';
import Dot from '../../components/Onboarding/Dot.tsx';
import Colors from '../../styles/Colors.ts';
import Navigation from '../../navigation/navigation.ts';
import ButtonCustom from '../../components/ButtonCustom.tsx';
import {
    addReservations,
} from '../../store/profile/profileSlice.ts';
import { KeyboardView } from '../../components/base/KeyboardView.tsx';
import { useDispatch } from 'react-redux';

interface ReservationScreenProps {}

const ReservationScreen: FC<ReservationScreenProps> = (): React.JSX.Element => {
    const dispatch = useDispatch();
    const flatListRef = useRef<FlatList>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const animation = useSharedValue(0);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [hour, setHour] = useState('');

    const onScroll = useAnimatedScrollHandler({
        onScroll: (event) => {
            animation.value = event.contentOffset.x;
        },
    });

    const onMomentumScrollEnd = (
        event: NativeSyntheticEvent<NativeScrollEvent>
    ): void => {
        const contentOffset = event.nativeEvent.contentOffset.x;
        const current = Math.round(contentOffset / windowWidth);
        setCurrentIndex(current);
    };

    const onSubmit = () => {
        dispatch(
            addReservations({
                id: Math.random(),
                phone: phone,
                hours: hour,
                name: name,
                tarif: currentIndex,
            })
        );
        setPhone('');
        setHour('');
        setName('');
        Navigation.pop();
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardView isScroll>
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
                        style={styles.input}
                        placeholderTextColor={Colors.white}
                        placeholder={'Your name'}
                        value={name}
                        onChangeText={setName}
                    />
                    <TextInput
                        style={styles.input}
                        placeholderTextColor={Colors.white}
                        placeholder={'Your number'}
                        value={phone}
                        onChangeText={setPhone}
                    />
                    <TextInput
                        style={styles.input}
                        placeholderTextColor={Colors.white}
                        placeholder={'What hours'}
                        value={hour}
                        onChangeText={setHour}
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
                    }}
                >
                    <Animated.FlatList
                        ref={flatListRef}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        onScroll={onScroll}
                        snapToInterval={windowWidth - 32}
                        snapToAlignment={'center'}
                        decelerationRate={'fast'}
                        scrollEventThrottle={16}
                        onMomentumScrollEnd={onMomentumScrollEnd}
                        contentContainerStyle={{
                            alignItems: 'center',
                            height: 200,
                            justifyContent: 'center',
                        }}
                        keyExtractor={(item, index) => `${item.id}_${index}`}
                        data={listItems}
                        renderItem={({ item }) => {
                            return (
                                <View
                                    style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: windowWidth - 32,
                                    }}
                                >
                                    <Image
                                        resizeMode={'contain'}
                                        source={item.image}
                                    />
                                </View>
                            );
                        }}
                    />
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        {listItems.map((_, index) => (
                            <Dot
                                key={index}
                                width={windowWidth}
                                // dotStyle={styles.dotStyle}
                                index={index}
                                scrollX={animation}
                            />
                        ))}
                    </View>
                </View>
                <ButtonCustom
                    style={{
                        position: 'absolute',
                        alignSelf: 'center',
                        bottom: 40,
                    }}
                    disabled={!name || !phone || !hour}
                    onPress={onSubmit}
                    title={'Create'}
                />
            </KeyboardView>
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
export default ReservationScreen;
