import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useApp } from '../context/AppContext';

export default function RaiseTokenScreen() {
  const { addToken } = useApp();
  const navigation = useNavigation();
  const [text, setText] = useState('');

  const onSubmit = () => {
    if (!text) return;
    addToken(text);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Requirement"
        value={text}
        onChangeText={setText}
        style={styles.input}
        multiline
      />
      <Button mode="contained" onPress={onSubmit} style={styles.button}>
        Post Token
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F172A', padding: 16 },
  input: { marginBottom: 12, backgroundColor: '#1E293B' },
  button: { backgroundColor: '#28A745' },
});
