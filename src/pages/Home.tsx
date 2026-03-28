import { useNavigation } from '@react-navigation/native';
import { Text, View, TouchableOpacity } from 'react-native';
import { TNavigationScreenProps } from '../AppRoutes';
import { Theme } from '../shared/themes/Theme';
import { StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useEffect, useState } from 'react';

import CircularProgress from 'react-native-circular-progress';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export const Home = () => {
    const navigation = useNavigation<TNavigationScreenProps>();

    const [step, setStep] = useState<1 | 2 | 3 | 4>(3);
    const [isRunning, setIsRunning] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    const [currentCircleTime] = useState(25 * 60);
    const [counterCircleTime, setCounterCircleTime] = useState(25 * 60);

    useEffect(() => {
        if(!isRunning || isPaused) return;

        const ref = setInterval(() => {
            setCounterCircleTime(old => old <= 0 ? old : old - 1);
        }, 1000);

        return () => clearInterval(ref);
    }, [isRunning, isPaused]);

    return (
        <View style={styles.mainContainer}>
            {/* Botão Settings */}
            <TouchableOpacity style={styles.settingsButton} onPress={() => navigation.navigate('Settings')}>
                <Ionicons name="settings" size={28} color={Theme.colors.divider} />
            </TouchableOpacity>

            <View style={styles.container}>

                {/* Título, States e Progress */}
                <View style={styles.titleGroup}>
                    {/* TÍTULO */}
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>
                            ZenFocus
                        </Text>
                    </View>

                    {/* STATES */}
                    <View>
                        {!isRunning && (
                        <View style={styles.stateContainer}>
                            <Text style={styles.stateText}>
                                Vamos nos concentrar?
                            </Text>
                        </View>
                        )}
                        {isRunning &&(
                            <>
                                {!isPaused && (
                                <Text style={styles.stateText}>
                                    Hora de se concentrar!
                                </Text>
                                )}
                                {isPaused && (
                                <Text style={styles.stateText}>
                                    Cronômetro em pausa
                                </Text>
                                )}

                                {/*  
                                <Text style={styles.stateText}>
                                    Pausa curta
                                </Text>
                                <Text style={styles.stateText}>
                                    Pausa longa
                                </Text> */}
                            </>
                        )}
                    </View>

                    {/* PROGRESS */}
                    <View style={styles.progressContainer}>
                        <AnimatedCircularProgress
                        size={160}
                        width={8}
                        fill={100 - (counterCircleTime / currentCircleTime) * 100}
                        tintColor={Theme.colors.divider}
                        rotation={0}
                        backgroundColor={Theme.colors.primary}
                        children={() => (
                            <Text style={styles.progressText}>
                                {Math.floor(counterCircleTime / 60)}:{(counterCircleTime % 60).toString().padStart(2, '0')}
                            </Text>
                        )}
                        />
                    </View>
                </View>

                {/* Botão Iniciar */}
                {!isRunning && (
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.primaryButton}
                        onPress={() => setIsRunning(true)}
                    >
                        <Text style={styles.primaryButtonText}>
                            Iniciar
                        </Text>
                    </TouchableOpacity>
                </View>
                )}

                {/* Botões Pausar e Parar */}
                {isRunning && !isPaused && (
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.primaryButton}
                            onPress={() => setIsPaused(true)}
                        >                
                            <Text style={styles.primaryButtonText}>
                                Pausar
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.secondaryButton}
                            onPress={() => setIsRunning(false)}
                        >
                            <Text style={styles.secondaryButtonText}>
                                Parar
                            </Text>
                        </TouchableOpacity>
                    </View>
                )}

                {/* Botôes Continuar e Reiniciar */}
                {isRunning && isPaused && (
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.primaryButton}
                        onPress={() => setIsPaused(false)}
                    >
                        <Text style={styles.primaryButtonText}>
                            Continuar
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.secondaryButton}
                        onPress={() => {setIsPaused(false); setIsRunning(false)}}
                    >
                        <Text style={styles.secondaryButtonText}>
                            Reiniciar
                        </Text>
                    </TouchableOpacity>
                </View>
                )}

                {/* Pomodoros */}
                <View style={styles.pomodorosContainer}>
                    <Text style={styles.pomodorosText}>
                        Pomodoros: 
                    </Text>

                    <View style={step >= 1 ? styles.pomodorosIndicatorComplete : styles.pomodorosIndicator} />
                    <View style={step >= 2 ? styles.pomodorosIndicatorComplete : styles.pomodorosIndicator} />
                    <View style={step >= 3 ? styles.pomodorosIndicatorComplete : styles.pomodorosIndicator} />
                    <View style={step >= 4 ? styles.pomodorosIndicatorComplete : styles.pomodorosIndicator} />
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
    titleGroup: {
        gap: 24,
    },
    settingsButton: {
        alignSelf: 'flex-end',
    },
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
    },
    titleContainer: {
        alignItems: 'center',
    },
    titleText: {
        color: Theme.colors.text,
        fontFamily: Theme.fonts.interBold,
        fontSize: Theme.fontSizes.title,
    },
    stateContainer: {
        alignItems: 'center',
    },
    stateText: {
        color: Theme.colors.text,
        fontFamily: Theme.fonts.interRegular,
        fontSize: Theme.fontSizes.body,
    },
    pomodorosContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 8,
    },
    pomodorosText: {
        color: Theme.colors.text,
        fontFamily: Theme.fonts.interRegular,
        fontSize: Theme.fontSizes.body,
    },
    pomodorosIndicatorComplete: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: Theme.colors.primary,
    },
    pomodorosIndicator: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: Theme.colors.divider,
    },
})
