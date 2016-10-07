import React from "react"
import CardsContainer from "./cards/scenes/cards/CardsContainer"
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
        <CardsContainer />
      </View>
    )
  }
}
