import { View, Text } from 'react-native' // RNFE
import React, { Component } from 'react'
import PowerBIEmbed from 'react-native-powerbi';
import { WebView } from 'react-native-webview';
import config from '../config';

const PowerBiScreen = () => {
    return (
        <WebView source={{
            uri: config.PWBI
        }}
        />
    )
}

export default PowerBiScreen;

