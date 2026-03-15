import { useNavigation } from '@react-navigation/native';
import { Text, View, TouchableOpacity } from 'react-native';
import { TNavigationScreenProps } from '../AppRoutes';
import { Theme } from '../shared/themes/Theme';
import { StyleSheet } from 'react-native';

import CircularProgress from 'react-native-circular-progress';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export const Home = () => {
    const navigation = useNavigation<TNavigationScreenProps>();

    return (
        <View>
            <View style={styles.progressContainer}>
                <AnimatedCircularProgress
                size={160}
                width={8}
                fill={90}
                tintColor={Theme.colors.divider}
                rotation={0}
                backgroundColor={Theme.colors.primary}
                children={() => (
                    <Text style={styles.progressText}>
                        12:45
                    </Text>
                )}
                />
            </View>

            {/* Botão Iniciar */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.primaryButton}>
                    <Text style={styles.primaryButtonText}>
                        Iniciar
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Botôes Pausar e Parar */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.primaryButton}>
                    <Text style={styles.primaryButtonText}>
                        Pausar
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.secondaryButton}>
                    <Text style={styles.secondaryButtonText}>
                        Parar
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Botôes Continuar e Reiniciar */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.primaryButton}>
                    <Text style={styles.primaryButtonText}>
                        Continuar
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.secondaryButton}>
                    <Text style={styles.secondaryButtonText}>
                        Reiniciar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    primaryButton:{
        backgroundColor: Theme.colors.primary,
        paddingHorizontal: 24,
        paddingVertical: 8,
        borderRadius: 55,
    },
    primaryButtonText: {
        color: Theme.colors.text,
        fontFamily: Theme.fonts.interRegular,
        fontSize: Theme.fontSizes.body,
    },
    secondaryButton:{
        borderWidth: 2,
        borderColor: Theme.colors.primary,
        paddingHorizontal: 24,
        paddingVertical: 8,
        borderRadius: 55,
    },
    secondaryButtonText: {
        color: Theme.colors.text,
        fontFamily: Theme.fonts.interRegular,
        fontSize: Theme.fontSizes.body,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 16,
    },
    progressContainer: {
        alignItems: 'center',
    },
    progressText: {
        color: Theme.colors.text,
        fontFamily: Theme.fonts.interBold,
        fontSize: Theme.fontSizes.title,
    }
})