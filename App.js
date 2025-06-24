import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppProvider } from './context/AppContext';
import AppNavigator from './AppNavigator';

export default function App() {
  return (
    <AppProvider>
      <AppNavigator />
      <StatusBar style="light" />
    </AppProvider>
  );
}
