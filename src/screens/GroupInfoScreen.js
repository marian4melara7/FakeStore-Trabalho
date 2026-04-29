import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function GroupInfoScreen() {
  const MEMBERS = [
    { name: 'Arthur B. Spada', ra: '1136264' },
    { name: 'Emanoel Rosa', ra: '1136489' },
    { name: 'Guilherme T. Castellani', ra: '1136257' },
    { name: 'Maria Eduarda Bernardi Schulze', ra: '1136125' },
    { name: 'Mariana Melara', ra: '1136271' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Informações do Grupo</Text>
      <Text style={styles.description}>
        Este aplicativo foi desenvolvido pelo grupo como parte do trabalho acadêmico.
        Abaixo estão os membros responsáveis pelo desenvolvimento:
      </Text>

      {MEMBERS.map((member, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.name}>{member.name}</Text>
          <Text style={styles.ra}>RA: {member.ra}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
    lineHeight: 22,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  ra: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
});

