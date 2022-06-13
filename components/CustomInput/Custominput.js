import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';

const Custominput = ({ value, setValue, placeholder, secureTextEntry }) => { //Usamos props {value, setValue y placeholder}
    return (
        <View style={styles.container}>
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                style={styles.input}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FCFCFC",
        width: "100%",
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        paddingHorizontal: 20,
        marginVertical: 5,
    },
    input: {

    },
});




export default Custominput