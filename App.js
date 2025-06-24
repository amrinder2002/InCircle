import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Header from './components/Header';
import TokenScroller from './components/TokenScroller';
import ListingCard from './components/ListingCard';

const tokens = [
  { id: 1, text: 'Need 3BHK in Thane up to \u20B91.2 Cr' },
  { id: 2, text: 'Looking for office space in Pune' },
  { id: 3, text: 'Plot near Bengaluru 2000 sqft' },
];

const listings = [
  {
    id: 1,
    image: 'https://placekitten.com/640/360',
    title: 'Modern Family House',
    price: '\u20B92.5 Cr',
    area: '1500 sqft',
    location: 'Mumbai',
  },
  {
    id: 2,
    image: 'https://placekitten.com/641/360',
    title: 'Urban Apartment',
    price: '\u20B91.8 Cr',
    area: '900 sqft',
    location: 'Pune',
  },
  {
    id: 3,
    image: 'https://placekitten.com/642/360',
    title: 'Cozy Cottage',
    price: '\u20B91.2 Cr',
    area: '800 sqft',
    location: 'Bangalore',
  },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <TokenScroller tokens={tokens} />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        {listings.map((l) => (
          <ListingCard key={l.id} listing={l} />
        ))}
      </ScrollView>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
    paddingTop: 60,
    paddingHorizontal: 12,
  },
  scroll: {
    paddingTop: 8,
    paddingBottom: 24,
  },
});
