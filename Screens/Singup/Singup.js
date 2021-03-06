import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
// auth is an instance of firebase.auth() and it is imported from the firebase.js file
/*import { auth } from "../../firebase";*/

import { auth } from "../../firebase";
import { StyledButtons, StyledButtonText, StyledImage, StyledInput, StyledView } from "../Login/LoginStyle";
const Singup = () =>{
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const navigation = useNavigation();
    useEffect(() => {
        const unsuscribe = auth.onAuthStateChanged((user) => {
          if (user) {
            navigation.replace("Yourtabs");
          }
        });
        return unsuscribe;
      }, []);
      const handleSignup = () => {
        auth
          .createUserWithEmailAndPassword(email, pwd)
          .then((userCredentials) => {
            // then is a fullfilled promise
            const user = userCredentials.user;
            console.log(user.email);
          })
          .catch((error) => {
            // catch is a rejected promise
            alert(error.message);
          });
      };
      const handleLogin = () => {
        navigation.replace("Login");
      };
    return(
   // KeyboardAvoidingView is a type of view that will push the content up when a keyboard shows
  
   <StyledView >
     {/* We have 2 text inputs that will set the state our our constants (email, pdw) */}
     <StyledImage source = {require ("../../assets/Profile.png") } />
     <StyledInput
       placeholder="Email"
       value={email}
       onChangeText={(text) => setEmail(text)}
       style={styles.input}
     />
     <StyledInput
       placeholder="Password"
       value={pwd}
       onChangeText={(text) => setPwd(text)}
       style={styles.input}
       secureTextEntry
     />

     <StyledButtons onPress={handleSignup}>
       <StyledButtonText>Sign Up</StyledButtonText>
     </StyledButtons>
     <StyledButtons onPress={handleLogin} >
       <StyledButtonText>Back</StyledButtonText>
     </StyledButtons>

   </StyledView>

);
};
export default Singup;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    inputContainer: {
      width: "80%",
    },
    input: {
      backgroundColor: "white",
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5,
    },
    buttonContainer: {
      width: "60%",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 40,
    },
    button: {
      backgroundColor: "#0782F9",
      width: "100%",
      padding: 15,
      borderRadius: 10,
      alignItems: "center",
    },
    buttonOutline: {
      backgroundColor: "white",
      marginTop: 5,
      borderColor: "#0782F9",
      borderWidth: 2,
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
    logo: {
      width: 220,
      height: 220,
      marginLeft: 40,
      marginBottom: 20,
    },
  });

