import { useNavigation } from "@react-navigation/core";
import { StyledView, StyledInput,StyledButtons, StyledButtonText, StyledText, StyledImage  } from "./LoginStyle";
import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { View, Image } from "react-native";

const Login = () =>{
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  
  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Yourtabs");
      }
    });
    return unsuscribe;
  }, []);


  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, pwd)
      .then((userCredentials) => {
        // then is a fullfilled promise
        const user = userCredentials.user;
        console.log("Logged in with:", user.email);
      })
      .catch((error) => {
        // catch is a rejected promise
        alert(error.message);
      });
  };
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


  
  return (
    <StyledView>
      <StyledImage source = {require ("../../assets/logo.jpg") } />
      <StyledInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}/>

      <StyledInput 
          placeholder="Password"
          value={pwd}
          onChangeText={(text) => setPwd(text)} 
          secureTextEntry/>

      <StyledButtons style = {{}} onPress={handleLogin}>
        <StyledButtonText>Login</StyledButtonText>
      </StyledButtons>

      <StyledText onPress={() => navigation.replace('Singup')}>
        Don't have an account? Register here!
      </StyledText>


    </StyledView>
    

  );
}
export default Login;