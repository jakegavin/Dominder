import React from "react"
import { StyleSheet, Switch, Text, View } from "react-native"

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 3,
    marginTop: 3,
  },
  label: {
    marginLeft: 8
  }
})

export default class ExpansionToggle extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Switch
          onValueChange={(value) => this.props.onChange(this.props.expansion, value)}
          value={this.props.value}
        />
      <Text style={styles.label}>{this.props.expansion}</Text>
      </View>
    )
  }
}

ExpansionToggle.propTypes = {
  expansion: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  value: React.PropTypes.bool.isRequired,
}
