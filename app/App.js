import React from "react"
import TabNavigationLayout from "./navigation/TabNavigationLayout"
import { StyleSheet, View } from "react-native"

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
        <TabNavigationLayout />
      </View>
    )
  }
}
