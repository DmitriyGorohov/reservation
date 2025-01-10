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
import { listItems } from '../../utils/common.ts';
import Colors from '../../styles/Colors.ts';
import Navigation from '../../navigation/navigation.ts';

interface TarifScreenProps {}

const TarifScreen: FC<TarifScreenProps> = (): React.JSX.Element => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ alignSelf: 'flex-start', marginBottom: 24 }}>
                    <Text
                        style={{
                            fontSize: 24,
                            textAlign: 'center',
                            color: Colors.white,
                        }}
                    >
                        Tarif List
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
                {listItems.map((item, index) => {
                    return (
                        <View
                            key={`${item.id}_${index}`}
                            style={{
                                width: '100%',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: 20,
                            }}
                        >
                            <Image
                                source={item.image}
                                style={{
                                    marginBottom: 12,
                                }}
                            />
                            <Text
                                style={{
                                    fontSize: 24,
                                    textAlign: 'center',
                                    color: Colors.white,
                                }}
                            >
                                {item.title}
                            </Text>
                        </View>
                    );
                })}
            </ScrollView>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        alignItems: 'center',
    },
});
export default TarifScreen;
