import { View, Text, StyleSheet, Dimensions, Image } from 'react-native' // RNFE Imports necesarios
import React from 'react'
const { width, fontScale } = Dimensions.get("window"); //Variables de la pantalla para autoajuste
import Custombutton from '../components/CustomButton/Custombutton'; //Importa el custom buttom
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {

  const navigation = useNavigation();
  const onLogginPressed = () => {
    console.warn('Pasar a Loggin');
    navigation.navigate('Login');
  };

  return (
    <View style={[styles.container, {
      // Desde aqui se puede hacer columnas o filas en la pantalla usando flexbox usamos 3 views para darle formato al screen
      flexDirection: "column"
    }]}>
      <View style={{ flex: 1, backgroundColor: "#2DC7FF", justifyContent: "center", borderRadius: 1, alignItems:"center" }}>
      <Custombutton text="Loggin" onPress={onLogginPressed} />
      </View>
      <View style={{ flex: 3, backgroundColor: "#00ABE7", justifyContent: "center", borderRadius: 1, alignItems: "center" }} >
        <Text style={styles.subtitles} >Bussiness Inteligence PW</Text>
        <Image style={{ width: 100, height: 100, backgroundColor: "#2DC7FF", borderRadius: 6 }} source={require('../images/pw.png')} />
      </View>
      <View style={{ flex: 0.5, backgroundColor: "#0081AF", justifyContent: "center", borderRadius: 1 }} >
        <Text style={styles.name}>Ferreteria la Cochinita</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { //Da formato al contenedor principal
    flex: 1,
    padding: 2,
    backgroundColor: "black",

  },
  titles: { // Da formato al titulo de la pantalla
    fontSize: 30,
    textAlign: "center",
    color: "black",
  },
  subtitles: { //Da formato al subtitulo
    fontSize: 17,
    textAlign: "center",
    color: "black",
  },
  name: { //Da formato al nombre del negocio
    fontSize: 25,
    textAlign: "center",
    color: "white",
  },
});

export default HomeScreen