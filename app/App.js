import React from "react"
import Cards from "./Cards"
import { List } from "immutable"
import { StyleSheet, Text, View } from "react-native"

const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      backgroundColor: "#F5FCFF",
      flex: 1,
      justifyContent: "center",
    }
  })

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Cards />
      </View>
    )
  }
}
