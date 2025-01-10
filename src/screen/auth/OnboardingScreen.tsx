import { type FC, useRef, useState } from 'react';
import {
    FlatList,
    Image,
    NativeScrollEvent,
    NativeSyntheticEvent,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Colors from '../../styles/Colors.ts';
import Animated, {
    useAnimatedScrollHandler,
    useSharedValue,
} from 'react-native-reanimated';
import {onboardingItems, windowWidth} from '../../utils/common.ts';
import OnboardingItem from '../../components/Onboarding/OnboardingItem.tsx';
import Dot from '../../components/Onboarding/Dot.tsx';
import ButtonCustom from '../../components/ButtonCustom.tsx';
import Navigation from '../../navigation/navigation.ts';
import { Screens } from '../../navigation/consts';

interface OnboardingScreenProps {}

const OnboardingScreen: FC<OnboardingScreenProps> = (): React.JSX.Element => {
    const flatListRef = useRef<FlatList>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const animation = useSharedValue(0);

    const onScroll = useAnimatedScrollHandler({
        onScroll: (event) => {
            animation.value = event.contentOffset.x;
        },
    });

    const handlePressNext = (): void => {
        const nextIndex = currentIndex + 1;
        if (nextIndex !== onboardingItems.length) {
            const offset = nextIndex * windowWidth;
            flatListRef.current?.scrollToOffset({ offset });
            setCurrentIndex(nextIndex);
        }

        if (onboardingItems.length === nextIndex) {
            Navigation.navigate(Screens.AUTH);
        }
    };

    const onMomentumScrollEnd = (
        event: NativeSyntheticEvent<NativeScrollEvent>
    ): void => {
        const contentOffset = event.nativeEvent.contentOffset.x;
        const current = Math.round(contentOffset / windowWidth);
        setCurrentIndex(current);
    };

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => Navigation.navigate(Screens.AUTH)}
                style={{
                    position: 'absolute',
                    top: 60,
                    right: 20,
                    zIndex: 999,
                }}
            >
                <Text
                    style={{
                        color: Colors.white,
                        fontSize: 24,
                        opacity: 0.5,
                        fontWeight: '600',
                    }}
                >
                    Skip
                </Text>
            </TouchableOpacity>
            <Image
                source={require('../../assets/img/onboarding-image-eclipse-left/onboarding-image-eclipse-left.png')}
                resizeMode={'cover'}
                style={{
                    position: 'absolute',
                    top: 150,
                    left: 0,
                }}
            />
            <Image
                source={require('../../assets/img/onboarding-image-eclipse-right/onboarding-image-eclipse-right.png')}
                resizeMode={'cover'}
                style={{
                    position: 'absolute',
                    top: 350,
                    right: 0,
                }}
            />
            <Animated.FlatList
                ref={flatListRef}
                horizontal
                data={onboardingItems}
                contentContainerStyle={{
                    paddingBottom: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                snapToInterval={windowWidth}
                decelerationRate="fast"
                snapToAlignment="center"
                scrollEventThrottle={16}
                renderItem={({ item, index }) => {
                    return <OnboardingItem item={item} index={index} />;
                }}
                onScroll={onScroll}
                keyExtractor={(item) => item.id.toString()}
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={onMomentumScrollEnd}
            />
            <View
                style={{
                    width: '100%',
                    paddingHorizontal: 20,
                    marginBottom: 20,
                }}
            >
                <View style={[styles.dotContainer, styles.dotContainerStyle]}>
                    {onboardingItems.map((_, index) => (
                        <Dot
                            key={index}
                            width={windowWidth}
                            dotStyle={styles.dotStyle}
                            index={index}
                            scrollX={animation}
                        />
                    ))}
                </View>
                <ButtonCustom onPress={handlePressNext} title={'Next'} />
                <TouchableOpacity
                    onPress={() => Navigation.navigate(Screens.WEB_VIEW)}
                    activeOpacity={0.8}
                    style={{
                        alignItems: 'center',
                        alignSelf: 'center',
                        marginTop: 40,
                    }}
                >
                    <Text
                        style={{
                            textAlign: 'center',
                            fontSize: 12,
                            color: Colors.white,
                            fontWeight: '500',
                        }}
                    >
                        Terms of use | Privacy Policy
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.black,
    },
    dotContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
    },
    dotContainerStyle: {
        paddingBottom: 20,
    },
    dotStyle: {
        backgroundColor: Colors.redButton,
    },
});
export default OnboardingScreen;
