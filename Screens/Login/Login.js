import { useNavigation } from "@react-navigation/core";
import { StyledView, StyledInput,StyledButtons, StyledButtonText, StyledText  } from "./LoginStyle";
import React, { useEffect, useState } from "react";

import { auth } from "../../firebase";




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
      <StyledInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}/>

      <StyledInput 
          placeholder="Password"
          value={pwd}
          onChangeText={(text) => setPwd(text)} 
          secureTextEntry/>

      <StyledButtons  onPress={handleLogin}>
        <StyledButtonText>Login</StyledButtonText>
      </StyledButtons>

      <StyledText onPress={() => navigation.replace('Singup')}>
      Don't have an account? Register here!
        </StyledText>
        <StyledText onPress={handleSignup}>
      Register
        </StyledText>

    </StyledView>
    

  );
}
export default Login;