
import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

const Header = () => (
  <View style={styles.header}>
    <View style={styles.imageContainer}>
      <Image
        source={require('../src/assets/logo.jpg')}
        style={{ width: 40, height: 40 }}
        resizeMode="contain"
      />
    </View>
    <Text style={styles.text}>CompApp</Text>
    <View style={styles.imageContainer}>
      <Image
        source={require('../src/assets/usuario.png')}
        style={{ width: 40, height: 40 }}
        resizeMode="contain"
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#101010',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%', 
    padding: 10, 
  },
  imageContainer: {
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});

export default Header;
