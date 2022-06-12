import React from "react"; //Importa todas las dependencias de react
import { NavigationContainer } from '@react-navigation/native'; //Importa todas las dependecnias de Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack'; //Importa todas las dependecnias de native stack

import HomeScreen from './screens/HomeScreen'; //Importa de screens HomeScreen
import Login from './screens/Login'; //Importa de screens Login
import PowerBiScreen from "./screens/PowerBiScreen"; //Importa de screens PowerBiScreen

const Stack = createNativeStackNavigator(); //Crea un Native Stack Navigator

const App = () => { //Crea un Contenedor de screens con App y con la variable Stack
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="PowerBiScreen" component={PowerBiScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App; // Envia App a la aplicacion