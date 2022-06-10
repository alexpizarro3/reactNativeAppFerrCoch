import { View, Text, FlatList } from 'react-native' //rnfe with es7+react extension
import React, { useEffect, useState } from 'react'  //Con useEffect se realizan operaciones antes del envio de App 
import { obtenerUsuario } from "../api";

const HomeScreen = () => {
    const [user, setUser] = useState([])

    const loadUsers = async () => {
        const dataLoad = await obtenerUsuario();
        setUser(dataLoad)
    }

    useEffect(() => {       //Es como la funcion Init de otros lengujes
        loadUsers();
    }, []);

    return ( //Se retorna el texto de la pantalla Home Screen
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

export default HomeScreen; //Se devuelve el resultado de la funcion