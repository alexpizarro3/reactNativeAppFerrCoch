import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
const { width, fontScale } = Dimensions.get("window");

const HomeScreen = () => {
  return (
    <View style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "column"
    }]}>
      <View style={{ flex: 1, backgroundColor: "#DFF2D8", justifyContent: "center" }}>
        <Text style={styles.titles}>Ferreteria la Cochinita</Text>
      </View>
      <View style={{ flex: 2, backgroundColor: "#C6DEA6", justifyContent: "center" }} >
        <Text style={styles.titles}>Bussiness Inteligence</Text>
      </View>
      <View style={{ flex: 3, backgroundColor: "#7EBDC3", justifyContent: "center" }} >
        <Text style={styles.titles}>Login</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    textAlign: "center",
    fontSize: 30,
  },
  titles: {
    fontSize: 30,
    textAlign: "center",
  },

});

export default HomeScreen