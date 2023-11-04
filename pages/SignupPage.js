
import { StyleSheet, Text, View, Button, TouchableOpacity, } from 'react-native';
import { useAuth } from '../AuthContext';
import GlobalStyles from '../GlobalStyles';
import SimpleInput from '../Componenets/SimpleInput/SimpleInput';
import Colors from '../Colors';
import WideButton from '../Componenets/WideButton/WideButton';
import { ScrollView } from 'react-native';
export default function SignupPage({ navigation }) {
    // const { dispatch } = useAuth();
    // dispatch({ type: 'SIGN_IN' });
    return (
        <View style={{ ...GlobalStyles.scrollcontainer, paddingBottom: 200 }}>

            <View style={{ justifyContent: "center", alignItems: 'center' }}>
                <Text style={{ ...GlobalStyles.Title, marginBottom: 25, marginTop: 55 }} > Join our Community ! </Text>
                <SimpleInput title="Full name" />
                <SimpleInput title="Birth date" />
                <SimpleInput title="Blood type" />
                <SimpleInput title="Chronic disease" />
                <SimpleInput title="Username" />
                <SimpleInput title="Password" />
                <SimpleInput title="Confirm password" />
                <View style={{ marginBottom: 10, marginTop:15 }}>
                    <WideButton Secondary={true} text={"NEXT"}>

                    </WideButton>
                </View>

            </View>
        </View>
    );
}




