import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function ListingCard({ listing }) {
  if (!listing) return null;
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: listing.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.price}>{listing.price}</Text>
        <Text style={styles.meta}>{listing.area} · {listing.location}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1F2937',
    borderRadius: 8,
    marginBottom: 12,
    overflow: 'hidden',
  },
  image: {
    height: 160,
    width: '100%',
  },
  info: {
    padding: 12,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  price: {
    color: '#28A745',
    fontWeight: 'bold',
    marginBottom: 2,
  },
  meta: {
    color: '#CBD5E1',
    fontSize: 12,
  },
});
