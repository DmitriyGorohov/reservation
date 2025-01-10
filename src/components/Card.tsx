import { type FC } from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Colors from '../styles/Colors.ts';

interface CardProps {}

const Card: FC<CardProps> = (): React.JSX.Element => {
    return (
        <View style={styles.container}>
            <Image
                resizeMode={'cover'}
                style={{
                    width: '100%',
                    height: 200,
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                }}
                source={require('../assets/img/card-background/card-background.png')}
            />
            <View
                style={{ flexDirection: 'row', paddingHorizontal: 16, paddingTop: 16, alignItems: 'center', justifyContent: 'space-between' }}
            >
                <Text style={{ color: Colors.white, fontSize: 28, }}>lvl 1</Text>
                <Image
                    source={require('../assets/img/wifi/Paypass.png')}
                />
            </View>
            <Text style={{ color: Colors.white, fontSize: 18, paddingLeft: 16, marginTop: 20, }}>Discount: 1%</Text>
            <Text style={{ color: Colors.white, fontSize: 18, paddingLeft: 16 }}>Cashback: 1%</Text>
            <Text style={{  textAlign: 'right', color: Colors.white, fontSize: 24, paddingRight: 16 }}>0/24</Text>
            <View
                style={{
                    height: 31,
                    borderRadius: 22,
                    paddingHorizontal: 16,
                    marginTop: 10,
                    backgroundColor: 'rgba(0, 57, 83, 0.5)',
                    alignItems: 'center',
                    marginHorizontal: 16,
                    borderColor: Colors.white,
                    borderWidth: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <Text style={{  textAlign: 'right', color: Colors.white, fontSize: 14 }}>0/1000$</Text>
                <Text style={{  textAlign: 'right', color: Colors.white, fontSize: 14, opacity: 0.5 }}>lvl 2</Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        width: '100%',
        height: 200,
        marginVertical: 20,
        borderRadius: 16,
        borderColor: Colors.white,
        borderWidth: 1,
    },
});
export default Card;
