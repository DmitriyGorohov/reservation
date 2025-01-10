import { type FC, useRef, useState } from 'react';
import {
    FlatList,
    NativeScrollEvent,
    NativeSyntheticEvent,
    StyleSheet,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, {
    useAnimatedScrollHandler,
    useSharedValue,
} from 'react-native-reanimated';
import { qrList, windowWidth } from '../../utils/common.ts';
import Dot from '../../components/Onboarding/Dot.tsx';
import ButtonCustom from '../../components/ButtonCustom.tsx';
import Colors from '../../styles/Colors.ts';
import QrCodeItem from './QrCodeItem.tsx';
import { useDispatch } from 'react-redux';
import { setIsOnboardingQrCode } from '../../store/profile/profileSlice.ts';

interface QrCodeOnboardingProps {}

const QrCodeOnboarding: FC<QrCodeOnboardingProps> = (): React.JSX.Element => {
    const dispatch = useDispatch();
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
        if (nextIndex !== qrList.length) {
            const offset = nextIndex * windowWidth;
            flatListRef.current?.scrollToOffset({ offset });
            setCurrentIndex(nextIndex);
        }

        if (qrList.length === nextIndex) {
            dispatch(setIsOnboardingQrCode(true));
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
            <Animated.FlatList
                ref={flatListRef}
                horizontal
                data={qrList}
                contentContainerStyle={{
                    paddingBottom: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                snapToInterval={windowWidth}
                decelerationRate="fast"
                snapToAlignment="center"
                scrollEventThrottle={16}
                renderItem={({ item }) => {
                    return <QrCodeItem item={item} />;
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
                    {qrList.map((_, index) => (
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
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    dotContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
    },
    dotContainerStyle: {},
    dotStyle: {
        backgroundColor: Colors.redButton,
    },
});
export default QrCodeOnboarding;
