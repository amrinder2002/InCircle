import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import Header from '../components/Header';
import TokenScroller from '../components/TokenScroller';
import ListingCard from '../components/ListingCard';
import { useNavigation } from '@react-navigation/native';
import { useApp } from '../context/AppContext';

export default function HomeScreen() {
  const { tokens, listings } = useApp();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <TokenScroller tokens={tokens} />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        {listings.map((l) => (
          <ListingCard
            key={l.id}
            listing={l}
            onPress={() => navigation.navigate('ListingDetail', { listing: l })}
          />
        ))}
      </ScrollView>
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => navigation.navigate('PostListing')}
      />
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
    paddingBottom: 80,
  },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    backgroundColor: '#28A745',
  },
});
