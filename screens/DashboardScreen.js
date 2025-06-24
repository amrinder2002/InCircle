import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { useApp } from '../context/AppContext';
import ListingCard from '../components/ListingCard';
import TokenScroller from '../components/TokenScroller';

export default function DashboardScreen() {
  const { listings, tokens } = useApp();
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.heading}>Your Tokens</Text>
      <TokenScroller tokens={tokens} />
      <Text style={styles.heading}>Your Listings</Text>
      {listings.map((l) => (
        <ListingCard key={l.id} listing={l} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F172A' },
  content: { padding: 16 },
  heading: { color: '#fff', fontSize: 18, fontWeight: 'bold', marginVertical: 8 },
});
