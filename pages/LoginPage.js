
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';
import GlobalStyles from '../GlobalStyles';
import SimpleInput from '../Componenets/SimpleInput/SimpleInput';
import Colors from '../Colors';
import WideButton from '../Componenets/WideButton/WideButton';
export default function LoginPage({ navigation }) {

    return (
        <View style={{ ...GlobalStyles.container, paddingBottom: 25 }}>
            <Text style={{ ...GlobalStyles.Title, marginBottom: 50, marginTop: 150 }} > Welcome to the Community ! </Text>
            <SimpleInput title="Username" />
            <SimpleInput title="Password" />
            <Text style={{ color: Colors.textback, }}>
                forgot your password ? 
                <Text style={{ color: Colors.accent,fontWeight:"500" }}>
                 click here
                </Text>
            </Text>
            <View style={{ marginTop: 50 ,justifyContent:"space-around",gap:30}}>
                <WideButton Secondary={true} text={"LOGIN"}></WideButton>

                <Text style={{ fontSize: 24, textAlign:"center",fontWeight:"600"}}>OR</Text>

                <WideButton onPress={() => { navigation.navigate('SignupPage'); }} text={"SIGN UP"}>

                </WideButton>
            </View>
        </View>
    );
}

