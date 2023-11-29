import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg',
  ];

  const handleNext = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: images[currentImage] }} style={styles.image} resizeMode="cover" />
      <View style={styles.navigation}>
        <TouchableOpacity onPress={handlePrev}>
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNext}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '70%',
    marginBottom: 20,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  buttonText: {
    color: 'blue',
    fontSize: 18,
  },
});

export default Carousel;
