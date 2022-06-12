import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import React from 'react'
const { width, fontScale } = Dimensions.get("window");

const HomeScreen = () => {
  return (
    <View style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "column"
    }]}>
      <View style={{ flex: 1, backgroundColor: "#DFF2D8", justifyContent: "center", borderRadius: 5 }}>
        <Text style={styles.titles}>Login</Text>
      </View>
      <View style={{ flex: 3, backgroundColor: "yellow", justifyContent: "center", borderRadius: 5 }} >
        <Text style={styles.subtitles} >Bussiness Inteligence PW</Text>
        <Image style={{ width: 100, height: 100 }} source={require('../images/pw.png')} />
      </View>
      <View style={{ flex: 0.5, backgroundColor: "#7EBDC3", justifyContent: "center", borderRadius: 5 }} >
        <Text style={styles.titles}>Ferreteria la Cochinita</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
    backgroundColor: "black",
    
  },
  blocks: {
    justifyContent: "center",
    borderRadius: 10,
  },
  titles: {
    fontSize: 30,
    textAlign: "center",
    color: "black",
  },
  subtitles: {
    fontSize: 15,
    textAlign: "center",
    color: "black",
  },
});

export default HomeScreen