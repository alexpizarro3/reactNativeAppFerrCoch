import { View, Text, FlatList } from 'react-native';//Importa todas las dependecnias de React Native
import React, { useState, useEffect } from 'react'; //Importa todas las dependecnias de React
import { obtenerUsuario } from '../api'; // Obtiene los usuarios desde el api

const Login = () => {
    const [user, setUser] = useState([]);

    const dataUser = async () => {
        const loadData = await obtenerUsuario();
        setUser(loadData);
    }

    useEffect(() => {
        dataUser();
    }, []);

    return (
        <View>
            <FlatList
                data={user}
                renderItem = {({item}) => {
                    return <Text>{item.userCedula}</Text>;
                }}
            />
        </View>
    )
}

export default Login;