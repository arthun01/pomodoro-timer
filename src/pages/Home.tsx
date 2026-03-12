import { useNavigation } from '@react-navigation/native';
import { Text, View, TouchableOpacity } from 'react-native';

export const Home = () => {
    const navigation = useNavigation<any>();

    return (
        <View>
            <Text style={{ fontFamily: 'InterBold', fontSize: 32 }}>
                ZenFocus
            </Text>


            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                <Text style={{ fontFamily: 'InterRegular', fontSize: 18 }}>
                    Settings
                </Text>
            </TouchableOpacity>
        </View>
    );
}