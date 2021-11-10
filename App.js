import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';

import PerfilScreen from './components/Perfil/perfil';
import TareasScreen from './components/Tareas/tarea';

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
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

        <Tab.Screen name="Tareas" component={TareasScreen} />
        <Tab.Screen name="Perfil" component={PerfilScreen} />
        
      </Tab.Navigator>
    </NavigationContainer>

  );
}

