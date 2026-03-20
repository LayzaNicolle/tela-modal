import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://github.com/barbaraluizaoliveira.png' }} 
        style={styles.image} 
      />
      <Text style={styles.name}>Seu Nome</Text>
      <Text style={styles.bio}>
        Desenvolvedora Full-stack focada em Java e Spring Boot. 
        Atualmente cursando Sistemas para Internet e atuando no suporte do PEP.
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