import React from "react"
import { StyleSheet, Text, View } from "react-native"

export default class SetStatCount extends React.Component {
  render() {
    return (
      <View style={{ alignItems: "center" }}>
        <Text>{this.props.title}</Text>
        <Text>{this.props.count}</Text>
      </View>
    )
  }
}

SetStatCount.propTypes = {
  count: React.PropTypes.number.isRequired,
  title: React.PropTypes.string.isRequired,
}
