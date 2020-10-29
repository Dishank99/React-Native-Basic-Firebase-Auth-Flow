import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dashboard from './screens/Dashboard'
import SignIn from './screens/SignIn'
import SignUp from './screens/SignUp'
import AuthStack from './routes/AuthStack'
import HomeStack from './routes/HomeStack'
import PrivateRoute from './routes/PrivateRoute'
import AuthProvider, { useAuth } from './context/AuthContext'

export default function App() {
  // const { currentUser } = useAuth()
  return (
    <AuthProvider>
      <PrivateRoute/>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
