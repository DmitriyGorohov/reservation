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
import Card from '../../components/Card.tsx';

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
                <Card />
                <Text
                    onPress={() => Navigation.navigate(Screens.TARIF)}
                    style={{
                        color: Colors.white,
                        fontSize: 18,
                        fontWeight: '700',
                        opacity: 0.5,
                    }}
                >
                    {'Tariff list  >'}
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
                                        overflow: 'hidden',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: windowWidth - 32,

                                        height: 160,
                                        borderRadius: 50,
                                    }}
                                >
                                    <Text
                                        style={{
                                            position: 'absolute',
                                            color: Colors.white,
                                            fontSize: 28,
                                            zIndex: 999,
                                        }}
                                    >
                                        {item.name}
                                    </Text>
                                    <Text
                                        style={{
                                            position: 'absolute',
                                            color: Colors.white,
                                            fontSize: 34,
                                            bottom: 12,
                                            right: 32,
                                            zIndex: 999,
                                        }}
                                    >
                                        {item.price}
                                    </Text>
                                    <Image
                                        resizeMode={'cover'}
                                        style={{
                                            borderWidth: 1,
                                            borderColor: Colors.white,
                                            width: windowWidth - 72,
                                            height: 160,
                                            borderRadius: 30,
                                        }}
                                        source={require('../../assets/img/background-cart/background-cart.png')}
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
