
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';
import GlobalStyles from '../../GlobalStyles';
import { useState } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
export default function SimpleInput({  title }) {
    const [text, onChangeText] = useState('');
    return (

        <View>
            <Text style={{ ...GlobalStyles.inputTitle }}> {title}</Text>
            <TextInput
                style={{ ...GlobalStyles.input }}
                onChangeText={onChangeText}
                value={text}
            />
        </View>




    );
}

