import React, { createContext, useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './Header';
import LoginScreen from './LoginScreen';
import Card from './Card';

export const ScreenContext = createContext();

const ScreenProvider = ({ children }) => {
  const [screen, setScreen] = useState('login');

  return (
    <ScreenContext.Provider value={{ screen, setScreen }}>
      {children}
    </ScreenContext.Provider>
  );
};

const App = () => {
  const { screen } = useContext(ScreenContext);

  return (
    <View style={[styles.container, { backgroundColor: '#001F3F' }]}>
      <Header />
      <View style={[styles.contentContainer, screen === 'card' && styles.centerContent]}>
        {screen === 'login' && <LoginScreen />}
        {screen === 'card' && (
          <View style={styles.cardContainer}>
            <Card title="Card 1" onSelect={() => {}} selected={false} />
            <Card title="Card 2" onSelect={() => {}} selected={false} />
          </View>
        )}
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
  contentContainer: {
    flex: 1, // Take the remaining space
    width: '100%', // Ensure it takes the full width
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    flexDirection: 'column', // Cards dispostos em coluna
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default () => (
  <ScreenProvider>
    <App />
  </ScreenProvider>
);
