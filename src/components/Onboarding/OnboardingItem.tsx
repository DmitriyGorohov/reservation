import { type FC } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TOnboarding, windowWidth } from '../../utils/common.ts';
import Colors from '../../styles/Colors.ts';

interface OnboardingItemProps {
    item: TOnboarding;
    index: number;
}

const OnboardingItem: FC<OnboardingItemProps> = ({
    item,
}): React.JSX.Element => {
    return (
        <View style={styles.container}>
            {item.id !== 3 && <Image source={item.icon} resizeMode={'cover'} />}
            {item.id === 3 && (
                <Image
                    source={item.icon}
                    resizeMode={'cover'}
                    style={{
                        position: 'absolute',
                        left: 0,
                        top: 20,
                    }}
                />
            )}
            {item.id === 3 && (
                <Image
                    source={item.iconSecond}
                    resizeMode={'cover'}
                    style={{
                        position: 'absolute',
                        right: 0,
                        top: 50,
                    }}
                />
            )}
            <Text
                style={{
                    paddingTop: item.id === 3 ? 250 : 0,
                    paddingRight: 130,
                    fontWeight: '600',
                    color: Colors.redButton,
                    fontSize: 24,
                }}
            >
                {item.title}{' '}
                <Text
                    style={{
                        paddingTop: item.id === 3 ? 250 : 0,
                        paddingRight: 130,
                        fontWeight: '600',
                        color: Colors.white,
                        fontSize: 24,
                    }}
                >
                    {item.subTitle}
                </Text>
            </Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: windowWidth,
        paddingTop: 100,
        paddingHorizontal: 30,
        // height: 300,
    },
});
export default OnboardingItem;
