import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useApp } from '../context/AppContext';

export default function PostListingScreen() {
  const { addListing } = useApp();
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [area, setArea] = useState('');
  const [location, setLocation] = useState('');

  const onSubmit = () => {
    if (!title) return;
    addListing({ title, price, area, location, image: 'https://placekitten.com/640/360' });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput label="Title" value={title} onChangeText={setTitle} style={styles.input} />
      <TextInput label="Price" value={price} onChangeText={setPrice} style={styles.input} />
      <TextInput label="Area" value={area} onChangeText={setArea} style={styles.input} />
      <TextInput label="Location" value={location} onChangeText={setLocation} style={styles.input} />
      <Button mode="contained" onPress={onSubmit} style={styles.button}>
        Save Listing
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F172A', padding: 16 },
  input: { marginBottom: 12, backgroundColor: '#1E293B' },
  button: { marginTop: 8, backgroundColor: '#28A745' },
});
