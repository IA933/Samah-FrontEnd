if (Platform.OS === 'android') {
    PermissionsAndroid = require('react-native').PermissionsAndroid;
}
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import GlobalStyles from '../GlobalStyles';
import checkmark from '../assets/CheckMark.png'
import CheckBox from 'react-native-check-box';
import { useState } from 'react';



export default function ScanPermissionPage({ navigation }) {
    let [isChecked, Check] = useState(false);
    return (
        <View style={{ ...GlobalStyles.container, paddingBottom: 25 }}>
            <Text style={{ ...GlobalStyles.Title, marginBottom: 30, marginTop: 30 }} > Can we scan your face? </Text>
            <View style={{ ...GlobalStyles.Card }}>
                <Text style={{ ...GlobalStyles.SubTitle, marginBottom: 5, fontWeight: "500", fontSize: 23 }}>Facial Scan Permission </Text>
                <View style={{ display: "flex" }}>
                    <Text style={{ fontSize: 18, textAlign: "left" }}>For your safety during emergencies, our app requires permission to scan your face for identification.</Text>
                    <Image source={checkmark} style={{ alignSelf: "flex-end", width: 25, height: 24.5, position: "absolute", bottom: -6, right: -6 }} />
                </View>
            </View>
            <View style={{ ...GlobalStyles.Card }}>
                <Text style={{ ...GlobalStyles.SubTitle, marginBottom: 5, fontWeight: "500", fontSize: 23 }}>Privacy </Text>
                <View style={{ display: "flex" }}>
                    <Text style={{ fontSize: 18, textAlign: "left" }}>Your scan data is securely stored for emergency use only.</Text>
                    <Image source={checkmark} style={{ alignSelf: "flex-end", width: 25, height: 24.5, position: "absolute", bottom: -6, right: -6 }} />
                </View>
            </View>
            <View style={{ ...GlobalStyles.Card }}>
                <Text style={{ ...GlobalStyles.SubTitle, marginBottom: 5, fontWeight: "500", fontSize: 23 }}>Consent </Text>

                <View style={{ display: "flex" }}>
                    <Text style={{ fontSize: 18, textAlign: "left" }}>Granting permission means you agree to use this feature during emergencies</Text>
                    <Image source={checkmark} style={{ alignSelf: "flex-end", width: 25, height: 24.5, position: "absolute", bottom: -6, right: -6 }} />
                </View>
            </View>
            <CheckBox
                style={{ flex: 1, padding: 10 }}
                onClick={() => {
                    Check(!isChecked);
                }}
                isChecked={isChecked}
                rightText={"CheckBoawdwadadw"}
                rightTextStyle={{ color: "red" }}
                checkedImage={<View style={{ flexDirection: "row" ,padding:1}}><Image source={require('../assets/CheckedBox.png')} style={{ top: -10, width: 30.5, height: 30.5 }} />
                    <Text style={{ paddingHorizontal: 10, fontSize: 12 }}>I give this app the permition to scan my face</Text>
                </View >}
                unCheckedImage={<View style={{ flexDirection: "row",padding:1}}><Image source={require('../assets/CheckBox.png')} style={{ width: 20, height: 20 }} /><Text style={{ paddingHorizontal: 10, fontSize: 12 }}>I give this app the permition to scan my face</Text>
                </View >}
            />


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
