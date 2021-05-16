import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { AuthProvider } from './src/context/AuthContext';
import { DrawerNavigator } from './src/navigation/DrawerNavigator';

export default function App() {
  return (
   <NavigationContainer>
     <AppState>
             <DrawerNavigator />
     </AppState>
   </NavigationContainer>
  );
}

const AppState = ({children}:any) =>{
  return (
  <AuthProvider>
    {children}
  </AuthProvider>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
