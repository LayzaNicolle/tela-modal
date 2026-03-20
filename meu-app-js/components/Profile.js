import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/foto.jpeg')}
        style={styles.image}
      />
      <Text style={styles.name}>Seu Nome</Text>
      <Text style={styles.name}>Layza Nicolle</Text>
      <Text style={styles.bio}>
        Estudante de tecnologia apaixonada por desenvolvimento, design, análise de dados e agora uma grande curiosa e apaixonada por AWS.
        Sempre buscando aprender novas ferramentas e melhorar minhas habilidades.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', padding: 20 },
  image: { width: 120, height: 120, borderRadius: 60, marginBottom: 15 },
  name: { fontSize: 22, fontWeight: 'bold' },
  bio: { fontSize: 16, textAlign: 'center', color: '#666', marginTop: 10 },
});