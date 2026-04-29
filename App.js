import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';
import GroupInfoScreen from './src/screens/GroupInfoScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: 'Produtos',
            headerLeft: () => (
              <TouchableOpacity
                style={styles.headerButton}
                onPress={() => navigation.replace('Login')}
              >
                <Text style={styles.headerButtonText}>Logout</Text>
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                style={styles.headerButton}
                onPress={() => navigation.navigate('GroupInfo')}
              >
                <Text style={styles.headerButtonText}>Informações</Text>
              </TouchableOpacity>
            ),
            headerTintColor: '#333',
            headerTitleAlign: 'center',
          })}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetailsScreen}
          options={{ title: 'Detalhes do Produto' }}
        />
        <Stack.Screen
          name="GroupInfo"
          component={GroupInfoScreen}
          options={{ title: 'Informações do Grupo' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerButton: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  headerButtonText: {
    color: '#2f80ed',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
