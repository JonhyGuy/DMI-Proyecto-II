import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PerfilScreen from './components/Perfil/perfil';
import TareasScreen from './components/Tareas/tarea';
import Login from './Screens/Login/Login';
import Singup from './Screens/Singup/Singup';
import { auth } from "./firebase";
import { useNavigation } from "@react-navigation/core";
import { TouchableOpacity, Text } from 'react-native';

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
      tabBarActiveTintColor: "#000",
      tabBarInactiveTintColor: "grey",
    })}>
      <Tab.Screen name="Tareas" component={TareasScreen} options={{
        headerRight: () => (
          <TouchableOpacity
            onPress={handleSignOut}
            color="#000"
          >
            <Text>Log Out</Text>
          </TouchableOpacity>
        ),
      }} />
      <Tab.Screen name="Perfil" component={PerfilScreen} options={{
        headerRight: () => (
          <TouchableOpacity
            onPress={handleSignOut}
            color="#000"
          >
            <Text>Log Out</Text>
          </TouchableOpacity>
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

