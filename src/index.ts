import { registerRootComponent } from 'expo';
import App from './App'; // Aponta para o seu App.tsx dentro da pasta src

// Isso diz ao Expo: "Ei, o aplicativo de verdade começa lá naquele arquivo!"
registerRootComponent(App);