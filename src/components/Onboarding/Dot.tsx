import React, { type FC } from 'react';
import { type StyleProp, StyleSheet, type ViewStyle } from 'react-native';
import Animated, {
    Extrapolation,
    interpolate,
    type SharedValue,
    useAnimatedStyle,
    withSpring,
} from 'react-native-reanimated';
import Colors from '../../styles/Colors.ts';

interface DotProps {
    index: number;
    scrollX: SharedValue<number>;
    dotStyle?: StyleProp<ViewStyle>;
    width: number;
}

const Dot: FC<DotProps> = ({
    index,
    scrollX,
    dotStyle,
    width,
}): React.JSX.Element => {
    const dotStyleAnimation = useAnimatedStyle(() => {
        // TODO:  Анимацию dots  можно улучшить и добавить под нужды проекта
        const dotWidth = interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [10, 50, 10],
            Extrapolation.CLAMP
        );
        const opacity = interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [0.3, 1, 0.3],
            Extrapolation.CLAMP
        );
        return {
            width: withSpring(dotWidth),
            opacity,
        };
    });
    return <Animated.View style={[styles.dot, dotStyleAnimation, dotStyle]} />;
};
const styles = StyleSheet.create({
    dot: {
        height: 10,
        borderRadius: 4,
        backgroundColor: Colors.redButton,
        marginHorizontal: 5,
    },
});
export default Dot;
