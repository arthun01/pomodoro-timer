import { useNavigation } from '@react-navigation/native';
import { Text, View, TouchableOpacity } from 'react-native';
import { TNavigationScreenProps } from '../AppRoutes';
import { Theme } from '../shared/themes/Theme';

export const Home = () => {
    const navigation = useNavigation<TNavigationScreenProps>();

    return (
        <View>
            <Text style={{ fontFamily: 'InterBold', fontSize: 32, color: Theme.colors.text }}>
                ZenFocus
            </Text>


            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                <Text style={{ color: Theme.colors.text, fontFamily: Theme.fonts.interRegular }}>
                    Settings
                </Text>
            </TouchableOpacity>
        </View>
    );
}