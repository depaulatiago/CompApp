// Card.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Card = ({ title, onSelect, selected }) => {
  return (
    <TouchableOpacity onPress={onSelect}>
      <View style={[styles.container, selected && styles.selectedContainer, { backgroundColor: '#001F3F' }]}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#007AFF', 
    borderRadius: 5, 
    margin: 5, 
  },
  card: {
    backgroundColor: '#fff',
    padding: 10, 
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    width: 150, 
    height: 100, 
  },
  selectedContainer: {
    borderColor: '#007AFF',
    borderWidth: 2,
  },
  cardTitle: {
    fontSize: 12, 
    fontWeight: 'bold',
  },
});

export default Card;