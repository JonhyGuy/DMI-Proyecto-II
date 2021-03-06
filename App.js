import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { auth } from "./firebase";
import { useNavigation } from "@react-navigation/core";
import { TouchableOpacity, Text } from 'react-native';
import { StyledButtonOut, StyledTextOut } from './styles/styledComponets';

import PerfilScreen from './components/Perfil/perfil';
import TareasScreen from './components/Tareas/tarea';
import Login from './Screens/Login/Login';
import Singup from './Screens/Singup/Singup';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Yourtabs() {
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
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === "Tareas") {
          iconName = focused
            ? "ios-book"
            : "ios-book-outline";
        } else if (route.name === "Perfil") {
          iconName = focused
            ? "ios-person"
            : "ios-person-outline";
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: "#5F366E",
      tabBarInactiveTintColor: "gray",
    })}>
      <Tab.Screen name="Tareas" component={TareasScreen} options={{
        headerRight: () => (
          <StyledButtonOut onPress={handleSignOut}>
            <Ionicons name={'ios-log-out'} size= {20} color= {'white'} />
          </StyledButtonOut>
        ),
        
      }} />
      <Tab.Screen name="Perfil" component={PerfilScreen} options={{
        headerRight: () => (
          <StyledButtonOut onPress={handleSignOut}>
            <Ionicons name={'ios-log-out'} size= {20} color= {'white'} />
          </StyledButtonOut>
        ),
      }} />
    </Tab.Navigator>
  )
}



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" options={{ headerShown: false }}>
          {(props) => <Login {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Singup" options={{ headerShown: false }}>
          {(props) => <Singup {...props} />}
        </Stack.Screen>

        <Stack.Screen
          name='Yourtabs'
          options={{ headerShown: false }}
          component={Yourtabs}
        />
      </Stack.Navigator>

    </NavigationContainer>

  );
}

