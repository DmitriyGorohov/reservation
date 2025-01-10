import { type FC, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import Colors from '../../styles/Colors.ts';
import { KeyboardView } from '../../components/base/KeyboardView.tsx';
import ButtonCustom from '../../components/ButtonCustom.tsx';
import { useImagePicker } from '../../utils/hooks/useImagePiker.tsx';
import { useDispatch, useSelector } from 'react-redux';
import {
    profileSelector,
    setIsOnboarding,
    setSaveUser,
} from '../../store/profile/profileSlice.ts';
import Navigation from '../../navigation/navigation.ts';
import { Screens } from '../../navigation/consts';

interface AuthScreenProps {}

const AuthScreen: FC<AuthScreenProps> = (): React.JSX.Element => {
    const dispatch = useDispatch();
    const { isOnboarding, account } = useSelector(profileSelector);
    const [isVisible, setIsVisible] = useState(false);
    const [name, setName] = useState(account === null ? '' : account.userName);
    const [age, setAge] = useState(account === null ? '' : account.userAge);
    const [email, setEmail] = useState(
        account === null ? '' : account.userEmail
    );
    const { pickFromGallery, imageUri } = useImagePicker();

    useEffect(() => {
        setTimeout(() => {
            if (isVisible) {
                dispatch(setIsOnboarding(true));
                Navigation.navigate(Screens.MAIN_APP);
            }
        }, 2000);
    }, [dispatch, isVisible]);

    const onSubmit = () => {
        dispatch(
            setSaveUser({
                userName: name,
                userAge: age,
                userEmail: email,
                userAvatar: imageUri as string,
            })
        );
        setIsVisible(true);
        setAge('');
        setEmail('');
        setName('');
    };

    return (
        <SafeAreaView style={styles.container}>
            {isVisible ? (
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Text
                        style={{
                            color: Colors.white,
                            fontSize: 24,
                            textAlign: 'center',
                            marginBottom: 20,
                        }}
                    >
                        Nice to meet you!{' '}
                    </Text>
                    <Text
                        style={{
                            color: Colors.redButton,
                            fontSize: 34,
                            textAlign: 'center',
                        }}
                    >
                        {account?.userName} !
                    </Text>
                </View>
            ) : (
                <KeyboardView isScroll>
                    <View style={styles.title}>
                        {!isOnboarding ? (
                            <Text
                                style={{
                                    fontSize: 32,
                                    color: Colors.white,
                                    fontWeight: '700',
                                }}
                            >
                                Let's get acquainted!
                            </Text>
                        ) : (
                            <Text
                                style={{
                                    fontSize: 32,
                                    color: Colors.white,
                                    fontWeight: '700',
                                }}
                            >
                                Profile
                            </Text>
                        )}
                        {!isOnboarding && (
                            <Text
                                style={{
                                    fontSize: 24,
                                    color: Colors.redButton,
                                    fontWeight: '700',
                                }}
                            >
                                What's your name?
                            </Text>
                        )}
                    </View>
                    <View style={styles.image}>
                        <TouchableOpacity
                            onPress={() => {
                                if (!isOnboarding) {
                                    pickFromGallery()
                                }
                            }}
                            activeOpacity={0.8}
                            style={{
                                position: 'absolute',
                                top: -40,
                                right: 70,
                            }}
                        >
                            <Image
                                resizeMode={'cover'}
                                source={require('../../assets/img/picture/picture.png')}
                            />
                        </TouchableOpacity>
                        <View
                            style={{
                                overflow: 'hidden',
                                width: 200,
                                height: 200,
                                borderRadius: 200 / 2,
                                borderWidth: 1,
                                borderColor: Colors.white,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            {imageUri !== null ? (
                                <Image
                                    resizeMode={'cover'}
                                    style={{ width: 200, height: 200 }}
                                    source={{ uri: `${imageUri}` }}
                                />
                            ) : (
                                <Image
                                    resizeMode={'cover'}
                                    style={{ width: 200, height: 200 }}
                                    source={
                                        account === null
                                            ? require('../../assets/img/avatar/avatar.png')
                                            : { uri: `${account.userAvatar}` }
                                    }
                                />
                            )}
                        </View>
                    </View>
                    <View style={styles.form}>
                        <TextInput
                            style={styles.input}
                            editable={!isOnboarding}
                            placeholderTextColor={Colors.white}
                            placeholder={'Your name'}
                            value={name}
                            onChangeText={setName}
                        />
                        <TextInput
                            editable={!isOnboarding}
                            style={styles.input}
                            placeholderTextColor={Colors.white}
                            placeholder={'Your age'}
                            value={age}
                            onChangeText={setAge}
                        />
                        <TextInput
                            editable={!isOnboarding}
                            style={styles.input}
                            placeholderTextColor={Colors.white}
                            placeholder={'Your email'}
                            value={email}
                            onChangeText={setEmail}
                        />
                        {!isOnboarding && (
                            <ButtonCustom
                                disabled={!name || !age || !email || !imageUri}
                                onPress={onSubmit}
                                title={'Create'}
                            />
                        )}
                        {isOnboarding && (
                            <>
                                <Text
                                    style={{
                                        textAlign: 'center',
                                        color: Colors.white,
                                        fontSize: 24,
                                    }}
                                >
                                    All expenditures: 0$
                                </Text>
                                <Text
                                    style={{
                                        marginTop: 12,
                                        textAlign: 'center',
                                        color: Colors.white,
                                        fontSize: 18,
                                        opacity: 0.5,
                                    }}
                                >
                                    Total hours: 0h
                                </Text>
                            </>
                        )}
                    </View>
                </KeyboardView>
            )}
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        paddingHorizontal: 16,
        width: '100%',
    },
    image: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 34,
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
export default AuthScreen;
