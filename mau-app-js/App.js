import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Modal, Pressable } from 'react-native';
import Profile from './components/Profile';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>App criado para a disciplina Programação para Dispositivos Móveis</Text>
      
      <Profile />

      <Button 
        title="Ver Detalhes" 
        onPress={() => setModalVisible(true)} 
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalCentered}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Detalhamento Profissional</Text>
            <Text style={styles.modalText}>
              • Experiência com Java 8 e Spring Boot.{"\n"}
              • Sustentação de sistemas PEP (MV).{"\n"}
              • Conhecimentos em Oracle PL/SQL.
            </Text>
            
            <Pressable
              style={styles.buttonClose}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.textStyle}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', padding: 20 },
  header: { fontSize: 14, fontWeight: 'bold', position: 'absolute', top: 60, textAlign: 'center' },
  modalCentered: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
  modalView: { backgroundColor: 'white', borderRadius: 20, padding: 35, alignItems: 'center', shadowColor: '#000', width: '80%' },
  modalTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
  modalText: { fontSize: 16, marginBottom: 20, textAlign: 'left' },
  buttonClose: { backgroundColor: '#2196F3', borderRadius: 10, padding: 10 },
  textStyle: { color: 'white', fontWeight: 'bold' }
});