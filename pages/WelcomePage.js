
import { StyleSheet, Text, View, Button, TouchableOpacity, } from 'react-native';

export default function WelcomePage({ navigation }) {

    return (
        <View>
            <Text>  WelcomePage</Text>
            <Button title="Go to Signup Page"
                onPress={() => navigation.navigate('LoginPage')}></Button>

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
