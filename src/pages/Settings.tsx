import { useNavigation } from '@react-navigation/native';
import { Text, View, TouchableOpacity } from 'react-native';
import { TNavigationScreenProps } from '../AppRoutes';
import { Theme } from '../shared/themes/Theme';
import { StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import CircularProgress from 'react-native-circular-progress';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export const Settings = () => {
    const navigation = useNavigation<TNavigationScreenProps>();

    return (
        <View style={styles.mainContainer}>
                {/* Botão Settings */}
                <TouchableOpacity style={styles.settingsButton} onPress={() => navigation.goBack()}>
                    <Ionicons name="close" size={28} color={Theme.colors.divider} />
                </TouchableOpacity>


            <View style={styles.container}>

                {/* CONFIGURAÇÕES */}
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>
                        Configurações
                    </Text>
                </View>

                {/* Botão Iniciar */}
                <View style={styles.formContainer}>

                    <View style={styles.formFieldContainer}>
                        <Text style={styles.formFieldLabel}>
                            Período de Foco
                        </Text>

                        <View style={styles.formFieldButtons}>
                            <TouchableOpacity style={styles.secondaryButton}>
                                <Text style={styles.primaryButtonText}>
                                    15 min
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.primaryButton}>
                                <Text style={styles.primaryButtonText}>
                                    25 min
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.secondaryButton}>
                                <Text style={styles.primaryButtonText}>
                                    35 min
                                </Text>
                            </TouchableOpacity>   
                        </View>                     
                    </View>

                    <View style={styles.formFieldContainer}>
                        <Text style={styles.formFieldLabel}>
                            Pausa Curta
                        </Text>

                        <View style={styles.formFieldButtons}>
                            <TouchableOpacity style={styles.secondaryButton}>
                                <Text style={styles.primaryButtonText}>
                                    3 min
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.primaryButton}>
                                <Text style={styles.primaryButtonText}>
                                    5 min
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.secondaryButton}>
                                <Text style={styles.primaryButtonText}>
                                    7 min
                                </Text>
                            </TouchableOpacity>   
                        </View>                     
                    </View>

                    <View style={styles.formFieldContainer}>
                        <Text style={styles.formFieldLabel}>
                            Pausa Longa
                        </Text>

                        <View style={styles.formFieldButtons}>
                            <TouchableOpacity style={styles.secondaryButton}>
                                <Text style={styles.primaryButtonText}>
                                    10 min
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.primaryButton}>
                                <Text style={styles.primaryButtonText}>
                                    15 min
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.secondaryButton}>
                                <Text style={styles.primaryButtonText}>
                                    20 min
                                </Text>
                            </TouchableOpacity>   
                        </View>                     
                    </View>

                    <View style={styles.formFieldContainer}>
                        <Text style={styles.formFieldLabel}>
                            Notificações
                        </Text>

                        <View style={styles.formFieldButtons}>
                            <TouchableOpacity style={styles.secondaryButton}>
                                <Text style={styles.primaryButtonText}>
                                    Desativado
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.primaryButton}>
                                <Text style={styles.primaryButtonText}>
                                    Ativado
                                </Text>
                            </TouchableOpacity>  
                        </View>                     
                    </View>
                </View>


            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 36,
        backgroundColor: Theme.colors.background,
    },
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        width: '100%',
    },
    settingsButton: {
        alignSelf: 'flex-end',
    },
    primaryButton:{
        backgroundColor: Theme.colors.primary,
        paddingHorizontal: 16,
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
        borderColor: Theme.colors.divider,
        backgroundColor: Theme.colors.divider,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 55,
    },
    secondaryButtonText: {
        color: Theme.colors.text,
        fontFamily: Theme.fonts.interRegular,
        fontSize: Theme.fontSizes.body,
    },
    formContainer: {
        width: '100%',
        maxWidth: 300,
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 16,
    },
    titleContainer: {
        alignItems: 'center',
    },
    titleText: {
        color: Theme.colors.text,
        fontFamily: Theme.fonts.interBold,
        fontSize: Theme.fontSizes.title,
    },
    formFieldContainer: {
        gap: 8,
        width: '100%',
    },
    formFieldLabel: {
        color: Theme.colors.text,
        fontFamily: Theme.fonts.interRegular,
        fontSize: Theme.fontSizes.label,
    },
    formFieldButtons: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    },
})