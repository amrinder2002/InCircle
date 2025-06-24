import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function ListingDetailScreen() {
  const { params } = useRoute();
  const listing = params?.listing;
  if (!listing) return null;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: listing.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.price}>{listing.price}</Text>
        <Text style={styles.meta}>{listing.area} · {listing.location}</Text>
        {listing.description ? <Text style={styles.desc}>{listing.description}</Text> : null}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F172A' },
  image: { height: 200, width: '100%' },
  info: { padding: 16 },
  title: { color: '#fff', fontSize: 20, fontWeight: '600', marginBottom: 6 },
  price: { color: '#28A745', fontWeight: 'bold', marginBottom: 4 },
  meta: { color: '#CBD5E1', fontSize: 14, marginBottom: 8 },
  desc: { color: '#fff', fontSize: 14 },
});
