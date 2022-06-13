import { View, Text, FlatList, StyleSheet, Image, useWindowDimensions } from 'react-native';// RNFE Importa todas las dependecnias de React Native
import React, { useState, useEffect } from 'react'; //Importa todas las dependecnias de React
import { obtenerUsuario } from '../api'; // Obtiene los usuarios desde el api
import logo from "../images/Lacochinita.png"; //Importa el logo
import Custominput from '../components/CustomInput/Custominput';
import Custombutton from '../components/CustomButton/Custombutton';

const Login = () => {
    const [user, setUser] = useState([]); //Variables que almacenan en arreglo el resultado de consultar api users
    const [cedula, setCedula] = useState(''); //variables de texto vacio para alamcenar la cedula del usuario
    const [password, setPassword] = useState(''); //Variables de texto vacio para alamcenar el password 
    const { height } = useWindowDimensions(); //Clase que almacena la altura del screen del dispositivo usado

    const dataUser = async () => { //Funcion que obtiene del api los usuarios
        const loadData = await obtenerUsuario();
        setUser(loadData);
    }

    const onLogginPressed = () => {
        console.warn('Logueese');
    };

    useEffect(() => { //Funcion que ejecuta datauser de primero es como el Init de otros lenguajes
        dataUser();
    }, []);

    return (
        <View style={styles.centeritems}>
            <Image source={logo} style={[styles.imglogo, { height: height * 0.3 }]}  //Muestra el logo 
                resizeMode="contain" />

            <Custominput placeholder="Ingrese su Cedula" value={cedula} setValue={setCedula} />
            <Custominput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true} />
            <Custombutton text="Loggin" onPress={onLogginPressed} />
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