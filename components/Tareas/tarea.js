import React from "react";
import { useNavigation } from "@react-navigation/core";
//import { Text, View } from "react-native";
import {
    Image,
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from "react-native";
  import { auth } from "../../firebase";

const TareasScreen = () =>{
    const navigation = useNavigation();
    const handleSignOut = () => {
        auth

        .signOut()
  
        .then(() => {
  
          navigation.replace("Login");
  
        })
  
        .catch((error) => {
  
          alert(error.message);
  
        });
    };
    
    return(
        <View>
            <TouchableOpacity style={styles.button} onPress={handleSignOut}>

            <Text style={styles.buttonText}>Sign Out</Text>

        </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({

    container: {
  
      flex: 1,
  
      // alignItems: "center",
  
      justifyContent: "center",
  
    },
  
    button: {
  
      backgroundColor: "#0782F9",
  
      width: "60%",
  
      padding: 15,
  
      borderRadius: 10,
  
      alignItems: "center",
  
      marginTop: 40,
  
    },
  
    buttonText: {
  
      color: "white",
  
      fontWeight: "700",
  
      fontSize: 16,
  
    },
  
    buttonOutlineText: {
  
      color: "#0782F9",
  
      fontWeight: "700",
  
      fontSize: 16,
  
    },
  
    buttonOutline: {
  
      backgroundColor: "white",
  
      marginTop: 5,
  
      borderColor: "#0782F9",
  
      borderWidth: 2,
  
    },
  
  
  
  
  
  });
  export default TareasScreen;