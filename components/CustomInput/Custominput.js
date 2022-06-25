import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';

const Custominput = ({
    control,
    name,
    rules = {},
    placeholder,
    secureTextEntry,
}) => { //Usamos props {value, setValue y placeholder}
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field: { value, onChange, onBlur }, fieldState: { error }}) => (
                <View
                    style={[styles.container,{ borderColor: error ? 'red' : 'lightblue' }]}>
                    <TextInput
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        placeholder={placeholder}
                        style={styles.input}
                        secureTextEntry={secureTextEntry}
                    />
                </View>
            )}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fefae0",
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