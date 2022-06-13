import { View, Text, StyleSheet, Pressable } from 'react-native' // RNFE
import React from 'react'

const Custombutton = ({onPress, text}) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Text style={styles.text} >{text}</Text>
        </Pressable>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#009DDC",
        width: "90%",
        padding: 15,
        marginVertical: 5,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 6,
    },
    text:{
        fontWeight: "bold",
        color: "white",
    },
});

export default Custombutton