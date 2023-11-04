import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';
import GlobalStyles from '../../GlobalStyles';
import { useState } from 'react';
import Colors from '../../Colors';

export default function WideButton({ onPress , text , Disabled , Secondary}) {
    
    return (

        <TouchableOpacity style={getStyle(Disabled,Secondary)}
            onPress={onPress}>
            <Text style={{ ...GlobalStyles.text }}> {text}</Text>
        </TouchableOpacity>

    );
}
function getStyle(Disabled,Secondary) 
{
    if(!Disabled && !Secondary) 
    {
     return {...GlobalStyles.ActiveButton}
     
    }
     else 
    {
      return {
        ...GlobalStyles.ActiveSecondaryButton
      }
    }
   }
