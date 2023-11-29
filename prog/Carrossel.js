// CardCarousel.js

import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import Card from './Card';

const Carrossel = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const cardsData = [
    { id: 1, title: 'Card 1' },
    { id: 2, title: 'Card 2' },
    { id: 3, title: 'Card 3' },
    // Adicione mais dados conforme necessário
  ];

  const handleCardSelect = (cardId) => {
    setSelectedCard(cardId);
  };
  

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <Card title="Card 1" />
      <Card title="Card 2" />
      {/* Adicione mais Cards conforme necessário */}
    </ScrollView>
  );
};

export default Carrossel;
