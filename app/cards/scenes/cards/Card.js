import React from "react"
import { StyleSheet, Text, View } from "react-native"

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    backgroundColor: "#1f509e",
    height: 300,
    justifyContent: "center",
    width: 188,
  },
  name: {
    fontSize: 24,
    color: "white",
  }
})

export default class Card extends React.Component {
  render() {
    return (
      <View style={styles.card} >
        <Text style={styles.name}>
          {this.props.name}
        </Text>
        <Text style={styles.name}>
          ${this.props.cost}
        </Text>


      </View>
    )
  }
}

Card.propTypes = {
  name: React.PropTypes.string.isRequired,
  cost: React.PropTypes.number.isRequired,
}
