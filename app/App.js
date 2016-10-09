import React from "react"
import CardsContainer from "./cards/scenes/cards/CardsContainer"
import { List } from "immutable"
import { StyleSheet, Text, View } from "react-native"

const styles = {
  appContainer: {
    flex: 1,
    paddingTop: 20,
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.appContainer}>
        <CardsContainer />
      </View>
    )
  }
}
