import { type FC, useRef } from 'react';
import {
    FlatList,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../styles/Colors.ts';
import ButtonCustom from '../../components/ButtonCustom.tsx';
import { listItems, windowWidth } from '../../utils/common.ts';
import Dot from '../../components/Onboarding/Dot.tsx';
import Animated, {
    useAnimatedScrollHandler,
    useSharedValue,
} from 'react-native-reanimated';
import Navigation from '../../navigation/navigation.ts';
import { Screens } from '../../navigation/consts';

interface HomeScreenProps {}

const HomeScreen: FC<HomeScreenProps> = (): React.JSX.Element => {
    const flatListRef = useRef<FlatList>(null);
    const animation = useSharedValue(0);

    const onScroll = useAnimatedScrollHandler({
        onScroll: (event) => {
            animation.value = event.contentOffset.x;
        },
    });

    const handleNavigateReservation = () => {
        Navigation.navigate(Screens.RESERVATION_LIST);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text
                    style={{
                        color: Colors.white,
                        fontSize: 32,
                        fontWeight: '800',
                    }}
                >
                    Home
                </Text>
                <View style={{ marginVertical: 22 }}>
                    <ButtonCustom
                        onPress={handleNavigateReservation}
                        title="Reservation"
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
                    Your card
                </Text>
                <View
                    style={{
                        alignItems: 'center',
                        width: '100%',
                        overflow: 'hidden',
                        justifyContent: 'center',
                        marginBottom: 22,
                    }}
                >
                    <Image
                        style={{ height: 240, borderRadius: 16 }}
                        resizeMode={'contain'}
                        source={require('../../assets/img/credit-card-image/47.png')}
                    />
                </View>
                <Text
                    onPress={() => Navigation.navigate(Screens.TARIF)}
                    style={{
                        color: Colors.white,
                        fontSize: 18,
                        fontWeight: '700',
                        opacity: 0.5,
                    }}
                >
                    Tariff list
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
                                dotStyle={styles.dotStyle}
                                index={index}
                                scrollX={animation}
                            />
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
    },
    dotStyle: {
        backgroundColor: Colors.redButton,
    },
});
export default HomeScreen;
