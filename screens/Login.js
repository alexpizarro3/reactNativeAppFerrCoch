import { View, Text, FlatList, StyleSheet, Image, useWindowDimensions, TextInput, Alert } from 'react-native';// RNFE Importa todas las dependecnias de React Native
import React, { useState, useEffect } from 'react'; //Importa todas las dependecnias de React
import { obtenerUsuario } from '../api'; // Obtiene los usuarios desde el api
import logo from "../images/Lacochinita.png"; //Importa el logo
import Custominput from '../components/CustomInput/Custominput';
import Custombutton from '../components/CustomButton/Custombutton';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native'; //Importa navigation

const Login = () => {
    const [user, setUser] = useState([]); //Variables que almacenan en arreglo el resultado de consultar api users
    const { height } = useWindowDimensions(); //Clase que almacena la altura del screen del dispositivo usado
    const navigation = useNavigation(); //variable que instancia useNavigation
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const dataUser = async (cedula, password) => { //Funcion que obtiene del api los usuarios
        const loadData = await obtenerUsuario(cedula, password);
        setUser(loadData);
        if (typeof loadData.message === 'undefined') {
            navigation.navigate('PowerBiScreen'); //Navega hacia la pantalla de PowerBiScreen
        } else {
            console.warn(loadData.message);
        }
    }
    console.log(errors);

    const onLogginPressed = data => {
        dataUser(data.cedula, data.password);
    };

    /* useEffect(() => { //Funcion que ejecuta datauser de primero es como el Init de otros lenguajes
        dataUser();
    }, []);
    */
    return (
        <View style={styles.centeritems}>
            <Image
                source={logo}
                style={[styles.imglogo, { height: height * 0.3 }]}  //Muestra el logo 
                resizeMode="contain"
            />
            <Custominput
                name="cedula"
                placeholder="Ingrese su Cedula"
                control={control}
                rules={{ required: true }}
            />
            <Custominput
                name="password"
                placeholder="Password"
                control={control}
                rules={{ required: true }}
                secureTextEntry
            />

            <Custombutton text="Loggin" onPress={handleSubmit(onLogginPressed)} />
            {/* 
            <FlatList  //Usa flatlist para mostrar los usuarios
                data={user}
                renderItem={({ item }) => {
                    return <Text>{item.userCedula}</Text>; //Muesta la cedula de los usuarios del api bd
                }}
            /> */}
        </View>
    )
}

const styles = StyleSheet.create({ //Formato para el logo
    imglogo: {
        width: "100%",
        maxHeight: 400,
        borderRadius: 6,
    },
    centeritems: { //Alinea todos los elementos
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FCFCFC",
    },
});

export default Login;