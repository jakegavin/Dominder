import React from "react"
import { StyleSheet, Text, TouchableHighlight, View } from "react-native"

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  button: {
    borderRadius: 5,
    borderWidth: 1,
    padding: 5
  }
})

export default class BottomButtons extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.button} onPress={this.props.onReset}>
          <Text>Reset Pile</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

BottomButtons.propTypes = {
  onReset: React.PropTypes.func.isRequired,
}
