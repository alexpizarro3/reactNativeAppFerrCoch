import { View, Text } from 'react-native' // RNFE
import React, { Component } from 'react'
import PowerBIEmbed from 'react-native-powerbi';
import { WebView } from 'react-native-webview';

const PowerBiScreen = () => {
    return (
        <WebView source={{
            uri: 'https://app.powerbi.com/view?r=eyJrIjoiOGM4N2ZjNDctMGY1NS00MWM4LTkzZWItZGQxM2RiMzBlOWY3IiwidCI6IjVhMmE4Mjg3LTQ1MzQtNDQwOS1iODQ2LTFjODUwYTkzMGJkOSJ9'
        }}
        />
    )
}

export default PowerBiScreen;

