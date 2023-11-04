
import { StyleSheet, Text, View, Button, TouchableOpacity, } from 'react-native';
import GlobalStyles from './GlobalStyles';
import { Camera, CameraType } from 'expo-camera';
import { useState, useCallback, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider } from './AuthContext';
import { SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';


const isFirstTime = true; // Set this to true if it's the user's first time using the app
const isSignedIn = false; // Set this to true if the user is signed in, otherwise, set it to false

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const Stack = createNativeStackNavigator();
export default function App() {


  const [fontsLoaded] = useFonts({
    'Karla': require('./assets/Fonts/Karla.ttf'),

  });

  if (!fontsLoaded) {
    return <Text>Loading</Text>;
  }

  return (
    <AuthProvider>
      <SafeAreaView
        style={GlobalStyles.droidSafeArea}
      >
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false, animation: 'none' }}>
          <Stack.Screen name="ScanPermissionPage" component={ScanPermissionPage} options={{ }} />
            {isFirstTime ? (
              <>
                <Stack.Screen name="LandingPage" component={LandingPage} options={{}} />
                <Stack.Screen name="WelcomePage" component={WelcomePage} options={{}} />
              </>
            ) : null}

            {isSignedIn ? (
              <>
                {/* <Stack.Screen name="ScanPermissionPage" component={ScanPermissionPage} options={{ }} /> */}
                <Stack.Screen name="ScanPage" component={ScanPage} options={{}} />
              </>
            ) : (
              <>
                <Stack.Screen name="LoginPage" component={LoginPage} options={{}} />
                <Stack.Screen name="SignupPage" component={SignupPage} options={{}} />
              </>
            )}


          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
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




//Pages
import LandingPage from './pages/LandingPage';
import ScanPage from './pages/ScanPage';
import SignupPage from './pages/SignupPage';
import ScanPermissionPage from './pages/ScanPermissionPage';
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';