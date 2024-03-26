import { StatusBar } from 'expo-status-bar';
import { Text, Image, SafeAreaView } from 'react-native';
import { styles } from './AppStyle';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#61dafb" barStyle="dark-content"/>
      <Image style={styles.imagens}
        source={require('./assets/astronauta.jpg')}
      />
      <Text style={styles.texto}>Esse é um pequeno passo para o homem, mas um gigantesco salto para a humanidade.</Text>
      </SafeAreaView>
  );
}

