

import { StyleSheet, Text, View, Button,  TouchableOpacity, } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';

export default function ScanPage() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  requestPermission();
  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }
  return (
    <View>
      <Text> ScanPage</Text>

    </View>
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
