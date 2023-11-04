
import { StyleSheet, Platform } from 'react-native';
import Colors from './Colors';


export default StyleSheet.create({
    droidSafeArea: {
        flex: 1,
        backgroundColor: Colors.background,
        paddingTop: Platform.OS === 'android' ? 30 : 0,
        paddingRight: 30
        , paddingLeft: 30
    },
    Title: {
        fontSize: 26,
        fontWeight: '500', textAlign: "center", lineHeight: 26,

    },
    SubTitle: {
        fontSize: 22,
        fontWeight: '400', textAlign: "justify",

    },
    ActiveButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius: 4,
        elevation: 0,
        margin: 16,
        width: 250,
        backgroundColor: Colors.primary
    },
    ActiveSecondaryButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius: 4,
        elevation: 0,
        margin: 16,
        width: 250,
        backgroundColor: Colors.secondary
    }
    ,
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: Colors.background,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.background,
    },
    scrollcontainer: {

        backgroundColor: Colors.background,
    },
    input: {
        height: 45,
        margin: 6,
        fontSize: 16,
        borderWidth: 1.5,
        padding: 10,
        width: 300,
        borderColor: Colors.secondary,
        borderRadius: 5,
        color: Colors.text,
        backgroundColor: "white"
    },
    inputTitle: {
        color: Colors.secondary,
        paddingLeft: 10,
        fontSize: 16
    },
    Card : {
    backgroundColor:Colors.background,
      borderRadius:5,
      elevation: 10,
      shadowColor: '#52006A88',
      padding:15,
      marginVertical:10,
      width:300,
    
  

    }
});