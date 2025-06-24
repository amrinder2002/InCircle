import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Your Trusted Network</Text>
      {/* Future Icons (🔍, 🔔) */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'sticky',
    top: 0,
    width: '100%',
    backgroundColor: '#0F172A',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
    paddingVertical: 12,
    alignItems: 'center',
  },
  logo: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
