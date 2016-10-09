import React from "react"
import { Picker, StyleSheet, Text, View } from "react-native"

export default class SetSize extends React.Component {
  render() {
    const values = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    return (
      <View>
        <Text>Kingdom Set Size:</Text>
        <Picker
          selectedValue={this.props.value}
          onValueChange={this.props.onChange}
        >
          {values.map((value) => <Picker.Item key={value} label={value.toString()} value={value} />)}
        </Picker>
      </View>
    )
  }
}

SetSize.propTypes = {
  value: React.PropTypes.number.isRequired,
  onChange: React.PropTypes.func.isRequired,
}
