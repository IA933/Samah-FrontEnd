
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import img from '../assets/Logo.png';
import GlobalStyles from '../GlobalStyles';
import { SafeAreaView } from 'react-native';
import WideButton from '../Componenets/WideButton/WideButton';
export default function LandingPage({ navigation }) {

    return (

        <View style={{ ...GlobalStyles.container, paddingBottom: 200 }}>

            <Image style={{ width: 200, height: 300, resizeMode: "contain" }} source={img}></Image>
            <Text style={{ ...GlobalStyles.SubTitle }}> Welcome to Aghithni, a tool to help you create and store a digital identy that can be acceced just with a   aaaascan of the face ! </Text>
            <View style={{ position:"absolute",bottom:50}}> 
             <WideButton onPress={() => { navigation.navigate('LoginPage'); }} text={"GET STARTED"} />
             </View>


        </View>

    );
}
